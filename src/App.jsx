import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

import { db } from './config/supabase';
import { products as defaultProducts } from './data/products';

// Lazy load pages for performance & SEO optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Brands = lazy(() => import('./pages/Brands'));
const Clientele = lazy(() => import('./pages/Clientele'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Admin = lazy(() => import('./pages/Admin'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [quoteState, setQuoteState] = useState({
    isOpen: false
  });
  
  const [products, setProducts] = useState(defaultProducts);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('agt_admin_auth') === 'true'
  );

  const loadProducts = async () => {
    try {
      const data = await db.getProducts();
      if (data && Array.isArray(data) && data.length > 0) {
        // Merge with defaultProducts so all new catalog items are guaranteed to exist
        const map = new Map();
        defaultProducts.forEach(p => map.set(p.id, p));
        data.forEach(p => map.set(p.id, { ...(map.get(p.id) || {}), ...p }));
        setProducts(Array.from(map.values()));
      } else {
        setProducts(defaultProducts);
      }
    } catch (err) {
      console.error('Failed to load products from database:', err);
      setProducts(defaultProducts);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleLogin = () => {
    localStorage.setItem('agt_admin_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('agt_admin_auth');
    setIsAuthenticated(false);
  };

  const addToBasket = (product) => {
    setBasket(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromBasket = (productId) => {
    setBasket(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) return;
    setBasket(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: newQty } : item
    ));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const handleOpenQuote = (item = null) => {
    if (item) {
      if (typeof item === 'string') {
        addToBasket({
          id: item.toLowerCase().replace(/\s+/g, '-'),
          name: item,
          modelNumber: 'Custom',
          brand: 'AGTPL',
          price: 'Contact Us',
          category: 'Service'
        });
      } else {
        addToBasket(item);
      }
    }
    setQuoteState({ isOpen: true });
  };

  const handleCloseQuote = () => {
    setQuoteState({ isOpen: false });
  };

  return (
    <>
      {loading && <Preloader />}
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-light-bg text-text-dark">
          {/* Navigation Bar */}
          <NavBar onRequestQuote={handleOpenQuote} basket={basket} isAuthenticated={isAuthenticated} />
  
          {/* Page Content */}
          <main className="flex-1">
            <Suspense fallback={
              <div className="w-full h-96 flex items-center justify-center bg-light-bg">
                <div className="w-8 h-8 border-2 border-t-green border-r-transparent border-b-transparent border-l-sky rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home onRequestQuote={handleOpenQuote} />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions onRequestQuote={handleOpenQuote} />} />
                <Route path="/products" element={<Products onRequestQuote={handleOpenQuote} products={products} />} />
                <Route path="/products/:id" element={<ProductDetail onRequestQuote={handleOpenQuote} products={products} />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/partners" element={<Brands />} />
                <Route path="/clientele" element={<Clientele />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login isAuthenticated={isAuthenticated} onLogin={handleLogin} />} />
                <Route path="/admin" element={<Admin isAuthenticated={isAuthenticated} onLogout={handleLogout} products={products} onRefreshProducts={loadProducts} />} />
              </Routes>
            </Suspense>
          </main>
  
          {/* Global Footer */}
          <Footer onRequestQuote={handleOpenQuote} isAuthenticated={isAuthenticated} />
  
          {/* Global Quote Request Modal */}
          <QuoteModal
            isOpen={quoteState.isOpen}
            onClose={handleCloseQuote}
            basket={basket}
            onRemoveItem={removeFromBasket}
            onUpdateQuantity={updateQuantity}
            onClearBasket={clearBasket}
          />
        </div>
      </Router>
    </>
  );
}
