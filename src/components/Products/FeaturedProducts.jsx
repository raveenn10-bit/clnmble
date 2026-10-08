import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { siteData } from '../../data/siteData';
import { Sparkles, Wrench } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function FeaturedProducts({ selectedCategory, onSelectCategory }) {
  const { wishlist } = useCart();
  const [activeBrandTab, setActiveBrandTab] = useState('All');

  const tabs = ['All', '2UUL Tools', 'Samsung', 'Xiaomi', 'Honor', 'Tablets', 'Wholesale Deals'];

  let filtered = siteData.products;

  // Filter based on tab or navigation category
  if (selectedCategory === 'Wishlist') {
    filtered = wishlist;
  } else if (selectedCategory === 'tools') {
    filtered = siteData.products.filter((p) => p.category === 'tools');
  } else if (selectedCategory === 'Phones') {
    filtered = siteData.products.filter((p) => p.category === 'phones');
  } else if (selectedCategory === 'Tablets') {
    filtered = siteData.products.filter((p) => p.category === 'tablets');
  } else if (selectedCategory === 'Special Offers') {
    filtered = siteData.products.filter((p) => p.discount);
  } else if (activeBrandTab !== 'All') {
    if (activeBrandTab === '2UUL Tools') {
      filtered = siteData.products.filter((p) => p.category === 'tools' || p.brand === '2UUL Tools');
    } else if (activeBrandTab === 'Samsung') {
      filtered = siteData.products.filter((p) => p.brand === 'Samsung');
    } else if (activeBrandTab === 'Xiaomi') {
      filtered = siteData.products.filter((p) => p.brand === 'Xiaomi' || p.brand === 'Redmi');
    } else if (activeBrandTab === 'Honor') {
      filtered = siteData.products.filter((p) => p.brand === 'Honor');
    } else if (activeBrandTab === 'Tablets') {
      filtered = siteData.products.filter((p) => p.category === 'tablets');
    } else if (activeBrandTab === 'Wholesale Deals') {
      filtered = siteData.products.filter((p) => p.discount);
    }
  }

  return (
    <section id="products-section" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              <Sparkles size={13} />
              <span>
                {selectedCategory === 'Wishlist' ? 'Your Saved Items' : 'Direct Wholesale & Retail Rates • Galle'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {selectedCategory === 'Wishlist'
                ? `My Saved Items (${wishlist.length})`
                : 'Featured Smartphones & 2UUL Repair Hardware'}
            </h2>
          </div>

          {/* Tab Filter Pills */}
          {selectedCategory !== 'Wishlist' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveBrandTab(tab);
                    if (onSelectCategory) onSelectCategory('All');
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeBrandTab === tab
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-700/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab === '2UUL Tools' && <Wrench size={12} className="inline mr-1" />}
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-8">
            <p className="text-gray-500 font-medium mb-3">No items found in this section.</p>
            <button
              onClick={() => {
                setActiveBrandTab('All');
                if (onSelectCategory) onSelectCategory('All');
              }}
              className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
