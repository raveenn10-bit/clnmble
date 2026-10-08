import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  ChevronDown,
  PhoneCall,
  Flame,
  Smartphone,
  Tablet,
  Wrench,
  Check,
  X,
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { siteData } from '../../data/siteData';

export default function Navbar({
  onOpenMobileMenu,
  onCategorySelect,
  selectedCategory,
  onOpenAuthModal,
  onSearchSubmit,
}) {
  const { cartCount, cartTotal, formatLKR, setIsCartOpen, wishlist, setQuickViewProduct } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearchCat, setSelectedSearchCat] = useState('All Categories');
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartWiggle, setCartWiggle] = useState(false);

  const catRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Trigger subtle wiggle on cart count change
  useEffect(() => {
    if (cartCount > 0) {
      setCartWiggle(true);
      const timer = setTimeout(() => setCartWiggle(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  // Live search filtering
  const matchingProducts = searchQuery.trim().length > 0
    ? siteData.products.filter((p) => {
        const query = searchQuery.toLowerCase();
        const matchesCategory =
          selectedSearchCat === 'All Categories' ||
          (selectedSearchCat === 'Smartphones' && p.category === 'phones') ||
          (selectedSearchCat === '2UUL Repair Tools' && (p.category === 'tools' || p.brand === '2UUL Tools')) ||
          (selectedSearchCat === 'Tablets' && p.category === 'tablets');

        const matchesText =
          p.title.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query);

        return matchesCategory && matchesText;
      })
    : [];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setIsCatDropdownOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchExecute = (e) => {
    if (e) e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery, selectedSearchCat);
    } else {
      onCategorySelect('All');
    }
    setIsSearchFocused(false);
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const phoneBrands = [
    'Samsung', 'Xiaomi', 'Redmi', 'Honor', 'Apple', 'Vivo', 'Oppo',
    'Realme', 'Infinix', 'Tecno', 'OnePlus'
  ];

  const repairTools = [
    '2UUL Preheat Puller', '2UUL 130,000 RPM Cool Vac', '2UUL Mini Sharpener',
    '2UUL Desktop Charging Station', '2UUL The One Jig', 'Universal PCB Fixtures'
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3 sm:gap-4">
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all active:scale-95"
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo (Digitel Phone Market Galle) */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-blue-900 via-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-700/20 p-2 border-2 border-white transition-transform group-hover:scale-105 duration-300">
              <Phone size={21} className="rotate-12 fill-white stroke-white" />
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm animate-pulse"></span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl text-gray-950 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                  Digitel
                </span>
                <span className="font-extrabold text-lg sm:text-xl text-blue-700 tracking-tight leading-none">
                  Phone Market
                </span>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-0.5">
                Wholesale Dealers in Galle
              </span>
            </div>
          </a>
        </div>

        {/* Search Bar - Pixel-perfect WoodMart pill with live search & smooth animations */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-2 relative" ref={searchContainerRef}>
          <form
            onSubmit={handleSearchExecute}
            className={`flex w-full items-center bg-white border-2 rounded-full transition-all duration-300 shadow-xs ${
              isSearchFocused
                ? 'border-blue-600 ring-4 ring-blue-600/15 shadow-md'
                : 'border-blue-500 hover:border-blue-600'
            }`}
          >
            {/* Category Dropdown */}
            <div className="relative" ref={catRef}>
              <button
                type="button"
                onClick={() => setIsCatDropdownOpen(!isCatDropdownOpen)}
                className="h-10.5 px-4 bg-gray-50/80 hover:bg-gray-100 text-xs font-semibold text-gray-700 border-r border-gray-200 rounded-l-full flex items-center gap-1.5 whitespace-nowrap transition-colors"
              >
                <span>{selectedSearchCat}</span>
                <ChevronDown
                  size={14}
                  className={`text-gray-500 transition-transform duration-200 ${
                    isCatDropdownOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {isCatDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 text-xs animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                    Search Within
                  </div>
                  {['All Categories', 'Smartphones', '2UUL Repair Tools', 'Tablets', 'Original Accessories'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedSearchCat(cat);
                        setIsCatDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between font-medium transition-colors"
                    >
                      <span>{cat}</span>
                      {selectedSearchCat === cat && <Check size={14} className="text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setIsSearchFocused(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phones, 2UUL repair tools, displays, accessories..."
              className="flex-1 px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors mr-1"
                title="Clear search"
              >
                <X size={15} />
              </button>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white h-10.5 px-5.5 rounded-r-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm hover:shadow"
              aria-label="Search"
            >
              <Search size={18} className="transition-transform duration-200 group-hover:scale-110" />
            </button>
          </form>

          {/* Live Search Results Animated Dropdown */}
          {isSearchFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-xs">
                <span className="font-bold text-gray-600">
                  {matchingProducts.length > 0
                    ? `Found ${matchingProducts.length} matching products:`
                    : 'No direct match found'}
                </span>
                <span className="text-[11px] text-gray-400">Press Enter to view all</span>
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                {matchingProducts.length > 0 ? (
                  matchingProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        setQuickViewProduct(prod);
                        setIsSearchFocused(false);
                      }}
                      className="p-3 hover:bg-blue-50/70 cursor-pointer flex items-center justify-between gap-3 transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-11 h-11 object-contain rounded-lg bg-gray-50 p-1 border border-gray-200 shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = prod.fallbackImage;
                          }}
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-700 transition-colors truncate">
                            {prod.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-bold text-blue-600 uppercase">
                              {prod.brand}
                            </span>
                            <span className="text-[10px] text-emerald-600 font-semibold">
                              • {prod.stock}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs font-extrabold text-blue-700">
                          {formatLKR(prod.price)}
                        </div>
                        <span className="text-[10px] text-gray-400 group-hover:text-blue-600 font-medium flex items-center justify-end gap-1">
                          Quick View <ArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-gray-500 space-y-2">
                    <p>No products matching "{searchQuery}"</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchFocused(false);
                        onCategorySelect('All');
                      }}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Browse full catalog
                    </button>
                  </div>
                )}
              </div>

              {matchingProducts.length > 0 && (
                <div className="p-2.5 bg-gray-50/90 border-t border-gray-100 text-center">
                  <button
                    type="button"
                    onClick={handleSearchExecute}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View all matching results in catalog</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Actions: Account, Wishlist, Cart - Cohesive, Harmonious & Animated */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-gray-700">
          {/* User Account Button with Hover Pulse */}
          <button
            onClick={onOpenAuthModal}
            className="hidden lg:flex items-center gap-2.5 p-1.5 pr-3 rounded-full hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-all duration-200 border border-transparent hover:border-blue-100 group"
            title="Open Wholesale & Retail Account"
          >
            <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
              <User size={18} />
            </div>
            <div className="text-left text-xs leading-tight">
              <div className="text-gray-400 text-[10px] font-medium">Wholesale / Retail</div>
              <div className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                My Account
              </div>
            </div>
          </button>

          {/* Wishlist Button with Counter and Hover Scale */}
          <button
            onClick={() => onCategorySelect('Wishlist')}
            className="relative p-2.5 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer border border-transparent hover:border-red-100 group active:scale-90"
            title="View Wishlist"
          >
            <Heart
              size={22}
              className={`transition-transform duration-200 group-hover:scale-110 ${
                wishlist.length > 0 ? 'text-red-500 fill-red-500' : 'text-gray-700'
              }`}
            />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold shadow-sm animate-badge-pop">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Wholesale Cart Pill Button with Animated Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`flex items-center gap-2.5 bg-blue-50/70 hover:bg-blue-100/90 text-gray-800 hover:text-blue-800 p-2 sm:px-3 sm:py-2 rounded-2xl transition-all duration-300 border border-blue-200/80 shadow-xs hover:shadow-md hover:border-blue-400 group active:scale-95 ${
              cartWiggle ? 'animate-cart-wiggle' : ''
            }`}
          >
            <div className="relative">
              <ShoppingCart
                size={22}
                className="text-blue-700 transition-transform duration-200 group-hover:scale-110"
              />
              <span
                className={`absolute -top-2.5 -right-2.5 bg-blue-600 text-white rounded-full text-[10px] w-4.5 h-4.5 flex items-center justify-center font-black shadow-sm border border-white ${
                  cartWiggle ? 'animate-badge-pop' : ''
                }`}
              >
                {cartCount}
              </span>
            </div>
            <div className="hidden sm:block text-left text-xs leading-tight">
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tight">
                Wholesale Cart
              </div>
              <div className="font-black text-gray-950 group-hover:text-blue-700 transition-colors">
                {formatLKR(cartTotal)}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Menu Bar (Desktop) */}
      <div className="hidden lg:block bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Categories Button / Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-3 px-5 flex items-center gap-3 transition-colors uppercase tracking-wider rounded-t-sm"
            >
              <Menu size={16} />
              <span>Browse Catalog</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isCategoryMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Categories Dropdown Mega Menu */}
            {isCategoryMenuOpen && (
              <div
                className="absolute top-full left-0 w-80 bg-white shadow-2xl border border-gray-200 rounded-b-md z-50 py-2 divide-y divide-gray-100 animate-in fade-in slide-in-from-top-1"
                onMouseLeave={() => setIsCategoryMenuOpen(false)}
              >
                {/* 2UUL Tools Callout */}
                <div className="p-3 bg-emerald-50/70">
                  <div className="text-[11px] font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Wrench size={13} className="text-emerald-600" />
                    2UUL Technician Tools (In Galle)
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {repairTools.slice(0, 4).map((tool) => (
                      <button
                        key={tool}
                        onClick={() => {
                          onCategorySelect('tools');
                          setIsCategoryMenuOpen(false);
                        }}
                        className="text-left px-2 py-1 text-xs text-gray-700 hover:text-emerald-700 hover:bg-white rounded transition-colors truncate font-medium"
                      >
                        • {tool}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-2">
                  <div className="px-2 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Smartphone size={13} className="text-blue-600" />
                    Mobile Phones By Brand
                  </div>
                  <div className="grid grid-cols-2 p-1 gap-1 max-h-56 overflow-y-auto">
                    {phoneBrands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          onCategorySelect(brand);
                          setIsCategoryMenuOpen(false);
                        }}
                        className="text-left px-2 py-1.5 text-xs text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors truncate"
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Links */}
          <nav className="flex items-center space-x-7 text-xs font-bold tracking-wide uppercase">
            <button
              onClick={() => onCategorySelect('All')}
              className={`py-3 transition-colors ${
                selectedCategory === 'All'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onCategorySelect('Phones')}
              className={`py-3 transition-colors ${
                selectedCategory === 'Phones'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Smartphones
            </button>
            <button
              onClick={() => onCategorySelect('tools')}
              className={`py-3 transition-colors font-extrabold ${
                selectedCategory === 'tools'
                  ? 'text-emerald-700 border-b-2 border-emerald-600'
                  : 'text-emerald-600 hover:text-emerald-700'
              }`}
            >
              2UUL Repair Tools
            </button>
            <button
              onClick={() => onCategorySelect('Tablets')}
              className={`py-3 transition-colors ${
                selectedCategory === 'Tablets'
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Tablets
            </button>
            <a
              href="#reviews"
              className="py-3 text-gray-700 hover:text-blue-700 transition-colors"
            >
              Customer Reviews
            </a>
            <a
              href="#branches"
              className="py-3 text-gray-700 hover:text-blue-700 transition-colors"
            >
              Galle Showrooms
            </a>
            <button
              onClick={() => onCategorySelect('Special Offers')}
              className="py-3 text-blue-700 hover:text-blue-800 flex items-center gap-1 font-extrabold transition-colors"
            >
              <Flame size={14} className="fill-blue-600 animate-pulse" />
              Wholesale Deals
            </button>
          </nav>

          {/* Hotline Quick Callout */}
          <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <PhoneCall size={14} />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase block font-semibold">Galle Hotline:</span>
              <a
                href="tel:0771183979"
                className="hover:text-blue-700 font-extrabold text-blue-900 transition-colors"
              >
                077 118 3979
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
