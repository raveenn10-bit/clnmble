import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function GoogleReviews() {
  const [selectedBranch, setSelectedBranch] = useState('All');

  const branches = ['All', 'Digitel Galle Showroom', 'Digitel Galle Wholesale', 'Technician Tools Hub'];

  const filtered = selectedBranch === 'All'
    ? siteData.testimonials
    : siteData.testimonials.filter((t) => t.branch === selectedBranch);

  return (
    <section id="reviews" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Reviews Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-100 text-blue-900 text-[11px] font-black px-2 py-0.5 rounded">
                DIGITEL REVIEWS
              </span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-800">5.0 / 5.0 Rating (Galle)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Customer & Wholesale Client Reviews
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Real feedback from mobile phone buyers and technician repair shops across Galle & Southern Province
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Digital+Phone+Market+Galle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all self-start md:self-auto"
          >
            <span>Write a Review on Google</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Branch Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {branches.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBranch(b)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedBranch === b
                  ? 'bg-blue-950 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50/70 hover:bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                        {review.author}
                      </div>
                      <div className="text-[11px] text-blue-600 font-semibold">
                        {review.branch}
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-gray-400">{review.date}</div>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle size={13} className="text-emerald-600" />
                  Verified Digitel Customer
                </span>
                <span className="text-gray-400 flex items-center gap-1">
                  <ThumbsUp size={12} /> Helpful
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
