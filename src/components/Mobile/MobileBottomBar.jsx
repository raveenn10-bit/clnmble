import React from 'react';
import { Home, ShoppingBag, Heart, Grid, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function MobileBottomBar({ onCategorySelect, onOpenMenu }) {
  const { cartCount, setIsCartOpen, wishlist } = useCart();

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40 px-3 py-2 flex items-center justify-around shadow-lg">
      <button
        onClick={() => onCategorySelect('All')}
        className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-blue-700 transition-colors"
      >
        <Home size={18} />
        <span className="text-[10px] font-bold">Shop</span>
      </button>

      <button
        onClick={onOpenMenu}
        className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-blue-700 transition-colors"
      >
        <Grid size={18} />
        <span className="text-[10px] font-bold">Categories</span>
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-blue-700 transition-colors relative"
      >
        <div className="relative">
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white rounded-full text-[9px] w-3.5 h-3.5 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-bold">Cart</span>
      </button>

      <button
        onClick={() => onCategorySelect('Wishlist')}
        className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-blue-700 transition-colors relative"
      >
        <div className="relative">
          <Heart size={18} className={wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''} />
          {wishlist.length > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white rounded-full text-[9px] w-3.5 h-3.5 flex items-center justify-center font-bold">
              {wishlist.length}
            </span>
          )}
        </div>
        <span className="text-[10px] font-bold">Wishlist</span>
      </button>

      <a
        href="tel:0771183979"
        className="flex flex-col items-center gap-0.5 text-blue-700 font-bold"
      >
        <Phone size={18} />
        <span className="text-[10px]">Call</span>
      </a>
    </div>
  );
}
