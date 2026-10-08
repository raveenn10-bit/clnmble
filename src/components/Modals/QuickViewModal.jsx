import React, { useState } from 'react';
import { X, Star, ShoppingCart, ShieldCheck, Truck, Check, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    formatLKR,
    toggleWishlist,
    isInWishlist,
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWish = isInWishlist(product.id);
  const currentVariant = selectedVariant || (product.variants && product.variants[0]) || 'Standard';
  const currentColor = selectedColor || (product.colors && product.colors[0]) || 'Standard';

  const handleAddToCart = () => {
    setAddedAnimation(true);
    addToCart(product, quantity, currentVariant);
    setTimeout(() => {
      setAddedAnimation(false);
      setQuickViewProduct(null);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-gray-100">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Product Image */}
          <div className="relative bg-blue-50/40 rounded-2xl p-6 flex items-center justify-center border border-blue-100/60">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-72 w-auto object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = product.fallbackImage;
              }}
            />
            {product.discount && (
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-sm">
                {product.discount} OFF
              </span>
            )}
          </div>

          {/* Right: Info & Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-blue-600 uppercase font-black tracking-wider mb-1">
                <span>{product.brand}</span>
                <span className="text-emerald-600 font-bold">{product.stock}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                {product.title}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {product.rating} ({product.reviewsCount} customer reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-black text-blue-700">
                {formatLKR(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatLKR(product.oldPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Key Specifications */}
            {product.specs && (
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-xs space-y-1.5 text-gray-700">
                <div className="font-black text-[11px] uppercase tracking-wider text-blue-700 mb-1">
                  Product Specifications
                </div>
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize text-gray-500">{key}:</span>
                    <span className="font-semibold text-gray-800 text-right">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Variant selector */}
            {product.variants && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 block">Select Option / Variant:</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        currentVariant === v
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 block">Color: <span className="text-blue-700 font-normal">{currentColor}</span></label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1 rounded-md text-xs font-medium border transition-all ${
                        currentColor === c
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center border border-gray-300 rounded-xl bg-white p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-bold"
                >
                  -
                </button>
                <span className="px-3 text-sm font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={addedAnimation}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-800/30 transition-all"
              >
                {addedAnimation ? (
                  <>
                    <Check size={16} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-xl border transition-colors ${
                  isWish
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-500 hover:border-gray-400'
                }`}
                title="Wishlist"
              >
                <Heart size={18} className={isWish ? 'fill-red-500 text-red-500' : ''} />
              </button>
            </div>

            {/* Guarantee trust points */}
            <div className="pt-2 border-t border-gray-100 flex items-center gap-4 text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-600" />
                Genuine Warranty Guaranteed
              </span>
              <span className="flex items-center gap-1">
                <Truck size={14} className="text-blue-600" />
                Islandwide Fast Shipping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
