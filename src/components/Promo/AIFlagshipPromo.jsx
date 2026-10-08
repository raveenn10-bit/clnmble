import React from 'react';
import { ArrowRight, CheckCircle2, Store, Wrench, Sparkles } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function AIFlagshipPromo({ onShopNow }) {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-[#0a192f] to-[#1e3a8a] text-white p-8 sm:p-12 shadow-2xl border border-blue-900/40">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Sparkles size={14} className="text-blue-400" />
              <span>DIGITEL PHONE MARKET • GALLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Upgrade Your Mobile Experience
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Visit Digitel Phone Market showroom in Galle, Sri Lanka. We supply wholesale mobile phones, high-precision 2UUL technician repair tools, phone replacement parts, and original accessories to repair shops and individual customers across the Southern Province.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onShopNow}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg shadow-blue-900/40 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Wholesale Deals</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#branches"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm transition-all"
              >
                <Store size={16} />
                <span>Visit Galle Showroom</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>Wholesale Quantity Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>100% Genuine 2UUL Hardware</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>Fast Southern Province Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Statement Section from Facebook page */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
              6.8K FOLLOWERS • WHOLESALE DEALERS IN GALLE
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Mobiles, Accessories, Service & Genuine Products
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              At Digitel Phone Market, we provide high quality retail and wholesale mobile phones, replacement screens, phone repair stations, and premium phone accessories in Galle. We support repair shops and mobile retailers with competitive wholesale rates and direct islandwide delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-semibold text-gray-700">
              {siteData.services.map((srv) => (
                <span key={srv} className="bg-gray-100 px-3 py-1 rounded-full border border-gray-200/60">
                  ✓ {srv}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
