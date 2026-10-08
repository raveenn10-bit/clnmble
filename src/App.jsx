import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import TopBar from './components/Header/TopBar';
import Navbar from './components/Header/Navbar';
import HeroBanner from './components/Hero/HeroBanner';
import FeaturedProducts from './components/Products/FeaturedProducts';
import AIFlagshipPromo from './components/Promo/AIFlagshipPromo';
import BrandsGrid from './components/Brands/BrandsGrid';
import GoogleReviews from './components/Reviews/GoogleReviews';
import BranchesSection from './components/Showrooms/BranchesSection';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/Cart/CartDrawer';
import QuickViewModal from './components/Modals/QuickViewModal';
import MobileBottomBar from './components/Mobile/MobileBottomBar';
import MobileDrawer from './components/Mobile/MobileDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import { CheckCircle2 } from 'lucide-react';

function MainLayout() {
  const { toastMessage } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    const prodEl = document.getElementById('products-section');
    if (prodEl) {
      prodEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#242424] pb-14 lg:pb-0">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-top-4 border border-gray-700">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <TopBar />
      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {/* Main Body */}
      <main className="flex-1">
        <HeroBanner onExplore={() => handleCategorySelect('All')} />
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <AIFlagshipPromo onShopNow={() => handleCategorySelect('Samsung')} />
        <BrandsGrid onBrandSelect={(brand) => handleCategorySelect(brand)} />
        <GoogleReviews />
        <BranchesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Modals and Navigation */}
      <CartDrawer />
      <QuickViewModal />
      <MobileBottomBar
        onCategorySelect={handleCategorySelect}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
      />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectCategory={handleCategorySelect}
      />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
