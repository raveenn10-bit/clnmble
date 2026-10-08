import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Hi Digitel Phone Market, I would like to check prices and availability for mobile phones / 2UUL tools.');

  const phoneNum = '94771183979';
  const whatsappUrl = `https://wa.me/${phoneNum}?text=${encodeURIComponent(customMsg)}`;

  return (
    <div className="fixed bottom-16 lg:bottom-6 right-4 sm:right-6 z-40">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          {/* Header */}
          <div className="bg-[#25D366] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                DPM
              </div>
              <div>
                <h4 className="font-bold text-xs leading-none">
                  Digitel Phone Market Galle
                </h4>
                <span className="text-[10px] text-green-100 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Online Now (077 118 3979)
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 space-y-3 bg-[#e5ddd5]/30 text-xs">
            <div className="bg-white p-2.5 rounded-xl shadow-xs text-gray-800 rounded-tl-none max-w-[85%]">
              Hello! 👋 Welcome to Digitel Phone Market Galle. How can we assist with your mobile phone or wholesale technician repair tool order today?
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-gray-500 font-bold uppercase">Your Message:</label>
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                rows={2}
                className="w-full text-xs p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#25D366] bg-white text-gray-800"
              />
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors"
            >
              <Send size={14} />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-600/30 transition-transform duration-200 hover:scale-110 active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824z" />
          </svg>
        )}
      </button>
    </div>
  );
}
