import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Wrench } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#0b1329] text-gray-400 text-xs">
      {/* Top Banner Pre-footer */}
      <div className="bg-blue-700 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            DIGITEL PHONE MARKET • GALLE
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 font-medium">
            Wholesale Dealers in Galle • Mobiles • Original Accessories • 2UUL Technician Repair Tools
          </p>
          <div className="pt-2">
            <a
              href="tel:0771183979"
              className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-gray-100 font-extrabold text-sm sm:text-base px-6 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Phone size={16} className="text-blue-700" />
              <span>077 118 3979</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: About & Contact */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              DPM
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              Digitel <span className="text-blue-400">Phone Market</span>
            </span>
          </div>

          <p className="text-gray-400 text-xs leading-relaxed">
            Wholesale dealers based in Galle, Sri Lanka. Specializing in brand new smartphones, replacement parts, 2UUL hardware repair tools, and premium phone accessories.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
              <span>digital phone market galle, Galle, Sri Lanka, 80000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="text-blue-400 shrink-0" />
              <span>077 118 3979</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-blue-400 shrink-0" />
              <span>digitalphonemarket@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Column 2: Showroom & Wholesale Hubs */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Galle Locations
          </h4>
          <ul className="space-y-2 text-xs">
            {siteData.showrooms.map((branch) => (
              <li key={branch.id}>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors flex items-center justify-between"
                >
                  <span>{branch.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Customer Care & Services */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Services & Policies
          </h4>
          <ul className="space-y-2 text-xs">
            {siteData.services.map((srv) => (
              <li key={srv} className="hover:text-white transition-colors">
                ✓ {srv}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Payment Methods & Trust */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">
            Payment & Wholesale Terms
          </h4>
          <p className="text-xs text-gray-400">
            Cash on delivery, bank transfer, and card payments supported for wholesale and retail orders.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px] font-bold">
            <span className="bg-slate-800 text-white px-2.5 py-1 rounded border border-slate-700">Bank Transfer</span>
            <span className="bg-slate-800 text-blue-400 px-2.5 py-1 rounded border border-slate-700">VISA / MasterCard</span>
            <span className="bg-slate-800 text-emerald-400 px-2.5 py-1 rounded border border-slate-700">Cash on Delivery</span>
            <span className="bg-slate-800 text-amber-400 px-2.5 py-1 rounded border border-slate-700">In-Store Pickup</span>
          </div>

          <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold text-xs">
            <ShieldCheck size={16} />
            <span>100% Genuine TRCSL Approved & Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800/80 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <div>
            © 2026 Digitel Phone Market. All rights reserved. Wholesale Dealers in Galle, Sri Lanka.
          </div>
          <div className="flex items-center gap-1">
            <span>Upgrade Your Mobile Experience</span>
            <Heart size={12} className="text-blue-500 fill-blue-500 inline" />
            <span>in Galle</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
