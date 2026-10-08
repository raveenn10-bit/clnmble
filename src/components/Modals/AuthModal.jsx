import React, { useState } from 'react';
import { X, User, Lock, Phone, ShieldCheck, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function AuthModal({ isOpen, onClose }) {
  const { showToast } = useCart();
  const [tab, setTab] = useState('wholesale'); // 'wholesale' or 'retail'
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Welcome back! Logged in as ${tab === 'wholesale' ? 'Wholesale Partner' : 'Customer'}`);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl z-10 border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2 font-black text-sm shadow-inner">
            DPM
          </div>
          <h3 className="text-xl font-black text-gray-950">
            Digitel Phone Market
          </h3>
          <p className="text-xs text-gray-500">
            Galle Wholesale & Retail Account Portal
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setTab('wholesale')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              tab === 'wholesale'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Wholesale Dealer Login
          </button>
          <button
            type="button"
            onClick={() => setTab('retail')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              tab === 'retail'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Customer Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-gray-700 font-bold mb-1.5">
              {tab === 'wholesale' ? 'Dealer Phone Number or Email' : 'Phone Number or Email'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder={tab === 'wholesale' ? 'e.g. 077 118 3979' : 'e.g. yourname@mail.com'}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
              />
              <Phone size={15} className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600"
              />
              <Lock size={15} className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-700/30 uppercase tracking-wider text-xs transition-all transform active:scale-98"
          >
            {isSubmitting ? 'Signing In...' : tab === 'wholesale' ? 'Login to Wholesale Portal' : 'Sign In'}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
          New wholesale buyer in Galle?{' '}
          <a
            href="https://wa.me/94771183979?text=Hi%20Digitel,%20I%20would%20like%20to%20register%20as%20a%20wholesale%20dealer."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold hover:underline"
          >
            Register on WhatsApp (077 118 3979)
          </a>
        </div>
      </div>
    </div>
  );
}
