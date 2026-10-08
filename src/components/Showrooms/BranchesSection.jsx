import React from 'react';
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function BranchesSection() {
  return (
    <section id="branches" className="py-14 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider">
            SHOWROOMS & HUBS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            Digitel Phone Market - Galle, Sri Lanka
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Visit our physical showrooms in Galle for retail testing, technician tool demonstrations, or wholesale order pickups.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.showrooms.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-extrabold text-sm sm:text-base text-gray-900 leading-snug">
                    {branch.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-800 text-[11px] font-bold shrink-0">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span>{branch.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin size={15} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-gray-400 shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`}
                      className="hover:text-blue-700 font-bold text-gray-800 transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-gray-400 shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium">
                  {branch.reviews} Verified In-Store Reviews
                </span>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <span>Directions</span>
                  <Navigation size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
