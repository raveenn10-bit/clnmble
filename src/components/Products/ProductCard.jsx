import React, { useState } from 'react';
import { Eye, Heart, ShoppingCart, Check, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, formatLKR, setQuickViewProduct, toggleWishlist, isInWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const isWish = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => {
      setIsAdding(false);
    }, 900);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="product-card group relative bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col justify-between p-3 sm:p-4 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
    >
      {/* Top Badges & Actions */}
      <div className="relative w-full aspect-square bg-[#f8fafc] rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3">
        {/* Discount / Category Badge */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.discount && (
            <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
              {product.discount}
            </span>
          )}
          {product.badge && (
            <span className="bg-gray-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isWish
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white/90 text-gray-500 hover:text-blue-600 hover:bg-white shadow-sm'
          }`}
          title="Add to Wishlist"
        >
          <Heart size={15} className={isWish ? 'fill-white' : ''} />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = product.fallbackImage;
          }}
        />

        {/* Quick View Floating Overlay on Hover */}
        <div
          className={`absolute inset-x-2 bottom-2 z-10 transition-all duration-200 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-full bg-white/95 hover:bg-blue-700 hover:text-white text-gray-900 text-xs font-bold py-2 rounded-lg shadow-lg backdrop-blur-sm flex items-center justify-center gap-1.5 transition-colors border border-gray-200"
          >
            <Eye size={14} />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Stock */}
          <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
            <span className="uppercase font-bold tracking-wider text-blue-600">
              {product.brand}
            </span>
            <span className="text-emerald-600 font-semibold">{product.stock}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="font-bold text-xs sm:text-sm text-gray-900 hover:text-blue-700 cursor-pointer line-clamp-2 transition-colors mb-1.5 leading-snug"
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-[11px] text-gray-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="text-sm sm:text-base font-extrabold text-blue-700">
              {formatLKR(product.price)}
            </div>
            {product.oldPrice && (
              <div className="text-[11px] text-gray-400 line-through">
                {formatLKR(product.oldPrice)}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`p-2.5 sm:px-3 sm:py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              isAdding
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white'
            }`}
            title="Add to Cart"
          >
            {isAdding ? (
              <>
                <Check size={14} />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart size={15} />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
