import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Utensils, Phone, CheckCircle2 } from 'lucide-react';
import { MenuItem, DEFAULT_FALLBACK_IMAGE } from '../data/menuData';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose, onOpenReservation }) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-espresso-950 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-espresso-900/80 text-cream-200 hover:text-gold-400 border border-gold-500/20 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              onError={(e) => {
                e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/30 to-transparent" />

            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider ${
                  dish.isVeg
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                    : 'bg-rose-950/80 text-rose-400 border border-rose-500/30'
                }`}
              >
                {dish.isVeg ? '● Pure Veg' : '▲ Non-Veg'}
              </span>

              {dish.isSignature && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-gold-400 text-espresso-950">
                  Chef Signature
                </span>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                  {dish.category.toUpperCase()}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mt-1">
                  {dish.name}
                </h3>
              </div>
              <span className="font-serif text-2xl font-bold text-gold-300 shrink-0">
                {dish.price}
              </span>
            </div>

            <p className="mt-4 text-cream-200/90 text-sm sm:text-base leading-relaxed font-light">
              {dish.description}
            </p>

            {dish.tags && dish.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {dish.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-espresso-900 border border-gold-500/15 text-cream-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gold-500/20 grid grid-cols-2 gap-4 text-xs text-cream-300/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Prepared Fresh to Order</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Dine-In • Takeaway • Delivery</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="flex-1 py-3 px-6 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold uppercase tracking-widest text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                <span>Reserve Table to Enjoy</span>
              </button>

              <a
                href="tel:06389061111"
                className="py-3 px-6 bg-espresso-900 hover:bg-espresso-800 text-cream-100 border border-gold-500/30 text-xs font-semibold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Order via Call (063890 61111)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
