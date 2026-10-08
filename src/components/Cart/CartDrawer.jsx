import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
    formatLKR,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 15000;
  const progressPercent = Math.min(100, Math.round((cartTotal / freeDeliveryThreshold) * 100));

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-blue-50/40">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-blue-700" />
              <h2 className="text-base sm:text-lg font-black text-gray-900">
                Wholesale & Retail Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="bg-blue-50/70 p-3 px-5 border-b border-blue-100/60">
            <div className="flex justify-between text-[11px] font-bold text-gray-700 mb-1.5">
              <span>
                {cartTotal >= freeDeliveryThreshold
                  ? '🎉 Free Islandwide Delivery Unlocked!'
                  : `Add ${formatLKR(freeDeliveryThreshold - cartTotal)} more for Free Delivery`}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-blue-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {checkoutSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">Order Placed Successfully!</h3>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  Thank you! A representative from Digitel Phone Market Galle will call you shortly on your phone to confirm your delivery and wholesale pricing details.
                </p>
                <button
                  onClick={() => {
                    setCheckoutSuccess(false);
                    setIsCartOpen(false);
                  }}
                  className="bg-blue-600 text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Continue Shopping
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag size={28} />
                </div>
                <h4 className="font-bold text-gray-700 text-sm">Your cart is currently empty</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Browse through our catalog of smartphones, tablets, and 2UUL technician repair tools.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Return to Catalog
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-3 p-3 bg-gray-50/60 rounded-xl border border-gray-100 relative group"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-contain rounded-lg bg-white p-1 border border-gray-200/60 shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = item.fallbackImage;
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900 truncate">
                        {item.title}
                      </h4>
                      {item.variant && item.variant !== 'default' && (
                        <span className="text-[11px] text-gray-500 font-medium block">
                          Option: {item.variant}
                        </span>
                      )}
                      <span className="text-xs font-black text-blue-700 block mt-0.5">
                        {formatLKR(item.price)}
                      </span>
                    </div>

                    {/* Quantity Selector & Trash */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-l transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-r transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {!checkoutSuccess && cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/50 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-bold text-gray-900">{formatLKR(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Islandwide Shipping:</span>
                  <span className="text-emerald-600 font-bold">
                    {cartTotal >= freeDeliveryThreshold ? 'FREE' : formatLKR(450)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total Amount:</span>
                  <span className="text-blue-700 text-base">
                    {formatLKR(cartTotal + (cartTotal >= freeDeliveryThreshold ? 0 : 450))}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-800/30 transition-all"
              >
                {isCheckingOut ? (
                  <span>Processing Demo Checkout...</span>
                ) : (
                  <>
                    <span>Confirm Order</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-medium">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>100% Genuine with Warranty • Galle Showroom</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
