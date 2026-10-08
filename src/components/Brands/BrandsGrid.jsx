import React from 'react';
import { siteData } from '../../data/siteData';

export default function BrandsGrid({ onBrandSelect }) {
  return (
    <section id="brands" className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
            AUTHORIZED BRANDS & REPAIR HARDWARE
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Official warranties, TRCSL approved imports and genuine technician equipment in Galle
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4">
          {siteData.brands.map((brand) => (
            <div
              key={brand.slug}
              onClick={() => onBrandSelect(brand.name)}
              className="bg-white hover:bg-blue-50/60 rounded-xl p-3.5 sm:p-4 border border-gray-200/80 hover:border-blue-400 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200 group shadow-xs hover:shadow"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-8 max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden font-black text-xs text-gray-700 group-hover:text-blue-600">
                  {brand.name[0]}
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-700 transition-colors text-center truncate w-full">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
