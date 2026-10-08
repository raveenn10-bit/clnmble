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
  Phone
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { siteData } from '../../data/siteData';

export default function Navbar({ onOpenMobileMenu, onCategorySelect, selectedCategory }) {
  const { cartCount, cartTotal, formatLKR, setIsCartOpen, wishlist } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearchCat, setSelectedSearchCat] = useState('All Categories');
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const catRef = useRef(null);

  const phoneBrands = [
    'Samsung', 'Xiaomi', 'Redmi', 'Honor', 'Apple', 'Vivo', 'Oppo',
    'Realme', 'Infinix', 'Tecno', 'OnePlus'
  ];

  const repairTools = [
    '2UUL Preheat Puller', '2UUL 130,000 RPM Cool Vac', '2UUL Mini Sharpener',
    '2UUL Desktop Charging Station', '2UUL The One Jig', 'Universal PCB Fixtures'
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setIsCatDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo (Recreating the Digitel Phone Market Facebook Brand Logo) */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-blue-900 via-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-700/20 p-2 border-2 border-white">
              {/* Handset Icon */}
              <Phone size={22} className="rotate-12 fill-white stroke-white" />
              {/* Active Green Dot matching FB logo */}
              <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></span>
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
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mt-0.5">
                Wholesale Dealers in Galle
              </span>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <div className="flex w-full border-2 border-blue-600 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-600/30 bg-white shadow-xs">
            {/* Category Dropdown */}
            <div className="relative" ref={catRef}>
              <button
                type="button"
                onClick={() => setIsCatDropdownOpen(!isCatDropdownOpen)}
                className="h-full px-3.5 bg-gray-50 hover:bg-gray-100 text-xs font-medium text-gray-700 border-r border-gray-200 flex items-center gap-1 whitespace-nowrap transition-colors"
              >
                <span>{selectedSearchCat}</span>
                <ChevronDown size={14} className="text-gray-500" />
              </button>

              {isCatDropdownOpen && (
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 z-50 text-xs">
                  {['All Categories', 'Smartphones', '2UUL Repair Tools', 'Tablets', 'Wholesale Packs', 'Original Accessories'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedSearchCat(cat);
                        setIsCatDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between"
                    >
                      {cat}
                      {selectedSearchCat === cat && <Check size={14} className="text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phones, 2UUL repair tools, displays, accessories..."
              className="flex-1 px-4 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}

            {/* Submit */}
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 flex items-center justify-center transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right Actions: Account, Wishlist, Cart */}
        <div className="flex items-center gap-4 text-gray-700">
          {/* User Account */}
          <div className="hidden lg:flex items-center gap-2 hover:text-blue-700 cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
              <User size={18} />
            </div>
            <div className="text-left text-xs leading-tight">
              <div className="text-gray-400 text-[10px]">Wholesale / Retail</div>
              <div className="font-bold text-gray-800">My Account</div>
            </div>
          </div>

          {/* Wishlist */}
          <div
            onClick={() => onCategorySelect('Wishlist')}
            className="relative cursor-pointer hover:text-blue-700 transition-colors p-1"
            title="View Wishlist"
          >
            <Heart size={22} className={wishlist.length > 0 ? 'text-red-500 fill-red-500' : ''} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Cart Icon & Total */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 bg-blue-50/70 hover:bg-blue-100 text-gray-800 hover:text-blue-800 p-2 rounded-xl transition-all border border-blue-200/60 group"
          >
            <div className="relative">
              <ShoppingCart size={22} className="text-blue-700 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-bold shadow-sm">
                {cartCount}
              </span>
            </div>
            <div className="hidden sm:block text-left text-xs leading-tight">
              <div className="text-gray-500 text-[10px] uppercase font-semibold">Wholesale Cart</div>
              <div className="font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors">
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
              <ChevronDown size={14} className={`transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
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
              <Flame size={14} className="fill-blue-600" />
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
