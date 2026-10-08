import React from 'react';
import { Phone, MapPin, ShieldCheck, Mail, Wrench } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function TopBar() {
  return (
    <div className="bg-[#0f172a] text-gray-300 text-xs py-2 px-4 border-b border-blue-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Contact & Location from Facebook Page */}
        <div className="flex items-center space-x-4 flex-wrap justify-center md:justify-start">
          <a
            href="tel:0771183979"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <Phone size={13} className="text-blue-500" />
            <span className="font-bold text-white tracking-wide">
              {siteData.storeInfo.phone}
            </span>
          </a>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <a
            href={`mailto:${siteData.storeInfo.email}`}
            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors hidden sm:flex"
          >
            <Mail size={13} className="text-blue-400" />
            <span>{siteData.storeInfo.email}</span>
          </a>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin size={13} className="text-red-400" />
            <span className="truncate max-w-xs sm:max-w-none">
              Galle, Sri Lanka (Wholesale Dealers)
            </span>
          </div>
        </div>

        {/* Right: Wholesale Badge & Services */}
        <div className="flex items-center space-x-3 text-[11px]">
          <span className="text-blue-400 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60 flex items-center gap-1">
            <Wrench size={12} />
            Wholesale & Retail
          </span>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <ShieldCheck size={13} /> TRCSL Approved & Guaranteed
          </span>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <span className="text-gray-400 font-medium">LKR (රු)</span>
        </div>
      </div>
    </div>
  );
}
