import { createClient } from '@supabase/supabase-js';
import { products as defaultProducts } from '../data/products';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase keys are fully configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'YOUR_SUPABASE_URL');

let supabaseClient = null;
if (isSupabaseConfigured) {
  try {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
}

// Helper to initialize local storage mock data
const getLocalProducts = () => {
  const localData = localStorage.getItem('agt_products_catalog');
  if (localData) {
    try {
      const parsed = JSON.parse(localData);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.error('Failed to parse local catalog data, resetting...');
    }
  }
  // Seed initial catalog data
  localStorage.setItem('agt_products_catalog', JSON.stringify(defaultProducts));
  return defaultProducts;
};

// Database Abstraction Interface
export const db = {
  /**
   * Fetch all products from either Supabase or LocalStorage fallback
   */
  async getProducts() {
    if (isSupabaseConfigured && supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('products')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;
        
        // If table is empty, seed it with initial products (only for developer setup convenience)
        if (!data || data.length === 0) {
          console.log('Supabase table is empty. Seeding database with initial catalog...');
          await this.seedSupabaseTable();
          // Fetch again
          const { data: seededData } = await supabaseClient
            .from('products')
            .select('*')
            .order('name', { ascending: true });
          return seededData || defaultProducts;
        }
        
        return data;
      } catch (err) {
        console.error('Supabase fetch products error, falling back to local mock storage:', err);
        return getLocalProducts();
      }
    } else {
      console.log('Running in local fallback mock database mode.');
      return getLocalProducts();
    }
  },

  /**
   * Update a product's estimated price and stock availability
   */
  async updateProduct(productId, updates) {
    if (isSupabaseConfigured && supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('products')
          .update({
            price: updates.price,
            availability: updates.availability
          })
          .eq('id', productId)
          .select();

        if (error) throw error;
        return { success: true, data };
      } catch (err) {
        console.error('Supabase update product error:', err);
        return { success: false, error: err.message };
      }
    } else {
      // Mock LocalStorage update
      const localList = getLocalProducts();
      const updatedList = localList.map(p => {
        if (p.id === productId) {
          return { ...p, ...updates };
        }
        return p;
      });
      localStorage.setItem('agt_products_catalog', JSON.stringify(updatedList));
      return { success: true, mockUpdated: true };
    }
  },

  /**
   * Seed the Supabase table with initial catalog data
   */
  async seedSupabaseTable() {
    if (!supabaseClient) return;
    try {
      // Supabase expects flat objects matching the schema columns
      const rows = defaultProducts.map(p => ({
        id: p.id,
        name: p.name,
        brand: p.brand,
        modelNumber: p.modelNumber,
        category: p.category,
        shortDescription: p.shortDescription,
        fullDescription: p.fullDescription,
        price: p.price,
        availability: p.availability,
        image: p.image,
        brochureUrl: p.brochureUrl,
        datasheetUrl: p.datasheetUrl,
        specs: p.specs,
        features: p.features,
        applications: p.applications,
        accessories: p.accessories
      }));

      const { error } = await supabaseClient
        .from('products')
        .insert(rows);

      if (error) throw error;
      console.log('Supabase table successfully seeded!');
    } catch (err) {
      console.error('Failed to seed Supabase table:', err);
    }
  }
};
