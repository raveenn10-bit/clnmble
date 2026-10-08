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
import AuthModal from './components/Modals/AuthModal';
import MobileBottomBar from './components/Mobile/MobileBottomBar';
import MobileDrawer from './components/Mobile/MobileDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import { CheckCircle2 } from 'lucide-react';

function MainLayout() {
  const { toastMessage } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQueryFilter, setSearchQueryFilter] = useState('');

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSearchQueryFilter('');
    const prodEl = document.getElementById('products-section');
    if (prodEl) {
      prodEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (query, cat) => {
    setSearchQueryFilter(query);
    if (cat === '2UUL Repair Tools') {
      setSelectedCategory('tools');
    } else if (cat === 'Smartphones') {
      setSelectedCategory('Phones');
    } else if (cat === 'Tablets') {
      setSelectedCategory('Tablets');
    } else {
      setSelectedCategory('All');
    }
    const prodEl = document.getElementById('products-section');
    if (prodEl) {
      prodEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f172a] pb-14 lg:pb-0">
      {/* Toast Notification with animation */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-gray-950 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-bold animate-in fade-in slide-in-from-top-4 duration-200 border border-gray-800">
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
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Main Body */}
      <main className="flex-1">
        <HeroBanner onExplore={() => handleCategorySelect('All')} />
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          searchQueryFilter={searchQueryFilter}
          onClearSearch={() => setSearchQueryFilter('')}
        />
        <AIFlagshipPromo onShopNow={() => handleCategorySelect('Phones')} />
        <BrandsGrid onBrandSelect={(brand) => handleCategorySelect(brand)} />
        <GoogleReviews />
        <BranchesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Modals and Navigation */}
      <CartDrawer />
      <QuickViewModal />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
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
