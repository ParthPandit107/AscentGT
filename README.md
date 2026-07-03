# Ascent Green Technologies Pvt Ltd (AGTPL) - Industrial Automation & RFQ Portal

A premium, production-ready B2B machinery catalog and systems engineering portal designed for **Ascent Green Technologies Pvt Ltd (AGTPL)**. Built using a modern frontend stack to deliver maximum speed, responsive aesthetics, and robust conversion flows for industrial equipment procurement.

---

## 🚀 Key Engineering & Architecture Highlights

This project was built from scratch with a strong focus on performance, SEO, B2B user experience, and modern React patterns.

### ⚡ 1. Performance Code-Splitting & Lazy Loading
- **Optimization**: Replaced standard static imports with dynamic `React.lazy` imports wrapped in a `<Suspense>` boundary.
- **Result**: Successfully split page bundles, slashing the initial entry JavaScript chunk size from **386kB to 251kB**. This improves First Contentful Paint (FCP) and Google PageSpeed index rankings.

### 🔍 2. Dynamic SEO & Open Graph Metadata Hydration
- **Implementation**: Created a custom hook (`useSeo`) that dynamically injects document titles, descriptive meta tags, and Open Graph configurations on route change.
- **Benefit**: Resolves indexing limitations of traditional Single Page Applications (SPAs), ensuring that search engine spiders crawl distinct, descriptive keywords for individual pages (e.g., catalog pages, product spec sheets).

### 🛒 3. B2B Quote Basket (RFQ Shopping Cart)
- **Feature**: Built a global state-driven shopping basket allowing industrial procurers to build complex Requests for Quotation (RFQs) containing multiple different products.
- **UI/UX**: Custom-designed a responsive slide-over Quote Modal with real-time quantity modifiers (+ / -), item removal controls, and clear visual submission feedback.

### ✉️ 4. Automated B2B Communication Gateways
- **Gmail Web Integration**: Programmed a dynamic prefilled email builder. On submission, it bypasses unconfigured local mail apps, launching a direct Gmail compose tab with fully structured request specs (Product details, quantities, client info) addressed to the client’s mailbox.
- **WhatsApp API Gateway**: Generated pre-populated WhatsApp message strings and integrated them across product detail cards and inquiry forms for instant B2B chat redirection.

### 🎨 5. Brand Preloader & Navigation Snapping
- **Preloader**: Created a custom brand-themed forest-green linear gradient preloader screen containing a glowing white ray of light spinning along the circular perimeter of the AGTPL logo.
- **Scroll Restoration**: Created a `<ScrollToTop />` wrapper component with micro-timeouts to counteract browser scroll-anchoring shifts that occur during lazy-loaded component mount.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (fast HMR build tool)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first theme layers)
- **Routing**: [React Router Dom v6](https://reactrouter.com/) (declarative hash routing)
- **Icons**: [Lucide React](https://lucide.dev/) (consistent vector UI icons)

---

## 📁 Key File Structure

```text
src/
├── assets/             # Branding image files and logo assets
├── components/         # Reusable layouts (NavBar, Footer, QuoteModal, ScrollToTop)
├── config/             # Centralized config (site.js for contact info & target emails)
├── data/               # Local JSON-like JS databases (products, solutions, projects)
├── hooks/              # Custom React hooks (useSeo for SEO metadata injection)
├── pages/              # Lazy-loaded page components (Home, Products, Details, Contact)
├── App.jsx             # Main Router assembly and quote basket state management
└── index.css           # Global CSS variables, custom font bindings, and Tailwind imports
```

---

## 💻 Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed:

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project root:
   ```bash
   cd ascent-control-limited
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Launch the local development server:
   ```bash
   npm run dev
   ```
5. Compile a production-ready optimized bundle:
   ```bash
   npm run build
   ```
