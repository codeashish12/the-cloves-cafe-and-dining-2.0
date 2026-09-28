import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { menuItems, MenuItem, DEFAULT_FALLBACK_IMAGE } from '../data/menuData';

interface SignatureDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDish, onOpenReservation }) => {
  const signatureDishes = menuItems.filter((item) => item.isSignature).slice(0, 6);

  return (
    <section id="signatures" className="py-24 bg-espresso-900/60 text-cream-100 relative overflow-hidden border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
                Culinary Highlights
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-100 uppercase">
              THE CLOVES <span className="gold-gradient-text italic font-normal normal-case">Signatures</span>
            </h2>
          </div>

          <p className="max-w-md text-cream-300/80 text-sm font-light leading-relaxed">
            Our most loved culinary creations, crafted with authentic Indian spices, fresh ingredients, and signature presentation.
          </p>
        </div>

        <div className="space-y-8">
          {signatureDishes.map((dish, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`group relative bg-espresso-950 rounded-2xl border border-gold-500/20 hover:border-gold-400/50 overflow-hidden shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div
                  className={`lg:col-span-6 relative h-64 sm:h-80 lg:h-auto overflow-hidden ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    onError={(e) => {
                      e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-transparent lg:hidden opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-gold-400 text-espresso-950 shadow-lg">
                      Signature Dish #{index + 1}
                    </span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border ${
                          dish.isVeg
                            ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/60'
                            : 'text-rose-400 border-rose-500/40 bg-rose-950/60'
                        }`}
                      >
                        {dish.isVeg ? 'Veg Special' : 'Non-Veg Special'}
                      </span>

                      <span className="font-serif text-2xl font-bold text-gold-300">
                        {dish.price}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors mt-3">
                      {dish.name}
                    </h3>

                    <p className="mt-3 text-cream-200/80 text-sm sm:text-base font-light leading-relaxed">
                      {dish.description}
                    </p>

                    {dish.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {dish.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-espresso-900 border border-gold-500/20 text-cream-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gold-500/15 flex items-center justify-between">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Dish Story</span>
                    </button>

                    <button
                      onClick={onOpenReservation}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cream-200 hover:text-gold-400 transition-colors"
                    >
                      <span>Reserve Table</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
