import React, { useState, useEffect } from 'react';
import { Smartphone, Headphones, Wrench, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function HeroBanner({ onExplore }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Upgrade Your Mobile Experience',
      subtitle: 'Wholesale Dealers in Galle • Brand New Smartphones, Displays & Original Accessories',
      badge: 'DIGITEL PHONE MARKET GALLE',
      bgGradient: 'from-slate-950 via-[#0a192f] to-[#1e3a8a]',
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      cta: 'Explore Wholesale Deals',
      tag: 'Direct Wholesale Rates',
    },
    {
      id: 2,
      title: '2UUL Professional Technician Tools',
      subtitle: 'Preheat Puller 0-150°C, 130,000 RPM Cool Vac Pro & The One Jig Available in Galle',
      badge: 'OFFICIAL 2UUL HARDWARE DEALER',
      bgGradient: 'from-zinc-950 via-[#064e3b] to-[#0f172a]',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      cta: 'View Repair Tools',
      tag: 'Technician Grade Hardware',
    },
    {
      id: 3,
      title: 'Samsung, Xiaomi & Honor Flagships',
      subtitle: '100% Genuine with Company Warranty • In-Store Hands-on Testing at Galle Showroom',
      badge: 'TRCSL APPROVED PHONES',
      bgGradient: 'from-gray-950 via-[#1e1b4b] to-[#172554]',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80',
      cta: 'Shop Smartphones',
      tag: 'Best Price in Southern Province',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="relative bg-gray-100 pb-4">
      {/* Hero Carousel */}
      <div className="relative overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center bg-gray-950">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-all duration-700`}
        >
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left text-white space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm">
              <Sparkles size={13} className="text-blue-400" />
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExplore}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg shadow-blue-700/40 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{slide.cta}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#branches"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all"
              >
                Visit Galle Showroom
              </a>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = slide.fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs text-white">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">Wholesale & Retail Galle</span>
                  <span className="font-bold text-emerald-400">{slide.tag}</span>
                </div>
                <div className="bg-blue-600 text-[11px] font-bold px-3 py-1 rounded-md">
                  In Stock
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Nav Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/10 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/10 z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === i ? 'w-6 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Feature Badges - matching Digitel Facebook Page Banner exactly! */}
      <div className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {/* 1: Mobiles */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-2">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
              <Smartphone size={24} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-tight">
                Mobiles
              </h4>
              <p className="text-[11px] text-gray-500">Wide Range of Brand New Smartphones</p>
            </div>
          </div>

          {/* 2: Accessories */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 shrink-0">
              <Headphones size={24} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-tight">
                Accessories
              </h4>
              <p className="text-[11px] text-gray-500">Original & Premium Parts & Chargers</p>
            </div>
          </div>

          {/* 3: Service */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
              <Wrench size={24} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-tight">
                Service & 2UUL Tools
              </h4>
              <p className="text-[11px] text-gray-500">Expert Support & Wholesale Guidance</p>
            </div>
          </div>

          {/* 4: Genuine Products */}
          <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-tight">
                Genuine Products
              </h4>
              <p className="text-[11px] text-gray-500">Quality You Can Trust with Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
