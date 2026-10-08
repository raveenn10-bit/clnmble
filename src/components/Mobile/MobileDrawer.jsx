import React from 'react';
import { X, Smartphone, Tablet, Phone, Flame, Heart, Wrench, ShieldCheck } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function MobileDrawer({ isOpen, onClose, onSelectCategory }) {
  if (!isOpen) return null;

  const phoneBrands = [
    'Samsung', 'Xiaomi', 'Redmi', 'Honor', 'Apple', 'Vivo', 'Oppo',
    'Realme', 'Infinix', 'Tecno', 'OnePlus'
  ];

  const handleCatClick = (cat) => {
    onSelectCategory(cat);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-xs bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-blue-50/50">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
                DPM
              </div>
              <span className="font-extrabold text-sm text-gray-900 tracking-tight">
                Digitel Phone Market
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="bg-blue-900 text-white p-3 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider block">
                Wholesale Dealers in Galle
              </span>
              <p className="text-xs font-semibold">
                Mobiles • Accessories • 2UUL Hardware
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-1">
              <button
                onClick={() => handleCatClick('All')}
                className="w-full text-left px-3 py-2 text-xs font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg"
              >
                All Products
              </button>
              <button
                onClick={() => handleCatClick('tools')}
                className="w-full text-left px-3 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-50 rounded-lg flex items-center gap-1.5"
              >
                <Wrench size={14} /> 2UUL Repair Tools
              </button>
              <button
                onClick={() => handleCatClick('Special Offers')}
                className="w-full text-left px-3 py-2 text-xs font-bold text-blue-700 hover:bg-blue-50 rounded-lg flex items-center gap-1.5"
              >
                <Flame size={14} /> Wholesale Deals
              </button>
              <button
                onClick={() => handleCatClick('Wishlist')}
                className="w-full text-left px-3 py-2 text-xs font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-lg flex items-center gap-1.5"
              >
                <Heart size={14} /> My Saved Items
              </button>
            </div>

            {/* Mobile Brands Tree */}
            <div className="pt-2 border-t border-gray-100">
              <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Smartphone size={13} className="text-blue-600" />
                Smartphones
              </div>
              <div className="grid grid-cols-2 gap-1">
                {phoneBrands.map((b) => (
                  <button
                    key={b}
                    onClick={() => handleCatClick(b)}
                    className="text-left px-2.5 py-1.5 text-xs text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded truncate"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Tablets */}
            <div className="pt-2 border-t border-gray-100">
              <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tablet size={13} className="text-blue-600" />
                Tablets
              </div>
              <button
                onClick={() => handleCatClick('Tablets')}
                className="w-full text-left px-2.5 py-1.5 text-xs text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded"
              >
                All Tablets & iPads
              </button>
            </div>
          </div>

          {/* Bottom Hotline */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <a
              href="tel:0771183979"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={15} />
              <span>Call 077 118 3979</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
