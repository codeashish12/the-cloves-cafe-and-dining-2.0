import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Eye, Utensils, Sparkles } from 'lucide-react';
import { menuCategories, menuItems, MenuItem, DEFAULT_FALLBACK_IMAGE } from '../data/menuData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish, onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !vegOnly || item.isVeg;

      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, vegOnly]);

  return (
    <section id="menu" className="py-24 bg-espresso-950 text-cream-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Crafted With Passion
            </span>
            <span className="w-8 h-0.5 bg-gold-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-100 uppercase">
            OUR CULINARY <span className="gold-gradient-text italic font-normal normal-case">Menu</span>
          </h2>

          <p className="mt-4 text-cream-200/80 text-sm sm:text-base font-light">
            Explore authentic North Indian curries, aromatic tandoori kebabs, sizzling Chinese starters, handcrafted café beverages and shakes.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Hakka Noodles, Dal Fry..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-espresso-900/90 border border-gold-500/20 text-cream-100 placeholder-cream-400/50 text-xs sm:text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                vegOnly
                  ? 'bg-emerald-950 text-emerald-400 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                  : 'bg-espresso-900/80 text-cream-300 border-gold-500/20 hover:border-gold-500/40'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${vegOnly ? 'bg-emerald-400 animate-pulse' : 'bg-cream-400/40'}`} />
              <span>Pure Veg Only</span>
            </button>
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'text-espresso-950 font-bold'
                      : 'text-cream-300/80 hover:text-cream-100 hover:bg-espresso-900/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuTabActive"
                      className="absolute inset-0 bg-gold-400 rounded-full shadow-md shadow-gold-500/20"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery + vegOnly}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-espresso-900/70 border border-gold-500/15 hover:border-gold-400/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-espresso-950">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      onError={(e) => {
                        e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${
                          dish.isVeg
                            ? 'bg-emerald-950/90 text-emerald-400 border-emerald-500/40'
                            : 'bg-rose-950/90 text-rose-400 border-rose-500/40'
                        }`}
                      >
                        {dish.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {dish.isPopular && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-gold-400 text-espresso-950 shadow-md">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-cream-100 group-hover:text-gold-300 transition-colors">
                          {dish.name}
                        </h3>
                        <span className="font-serif text-lg font-bold text-gold-400 shrink-0">
                          {dish.price}
                        </span>
                      </div>

                      <p className="mt-2 text-cream-300/70 text-xs line-clamp-2 font-light leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-espresso-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-cream-400/60 uppercase tracking-wider">
                        {dish.category}
                      </span>

                      <button
                        onClick={() => onSelectDish(dish)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Utensils className="w-12 h-12 text-gold-400/40 mx-auto mb-3" />
              <p className="font-serif text-xl text-cream-200">No dishes match your search.</p>
              <p className="text-xs text-cream-400/60 mt-1">Try switching category tabs or clearing filters.</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl glass-espresso border border-gold-500/20 max-w-2xl mx-auto shadow-2xl">
            <div className="text-left">
              <p className="font-serif text-xl font-bold text-cream-100">Want to explore our complete offline menu?</p>
              <p className="text-xs text-cream-300/80 mt-0.5">Visit us at GT Road, Mughalsarai or reserve a table in advance.</p>
            </div>
            <button
              onClick={onOpenReservation}
              className="shrink-0 px-6 py-3 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold uppercase text-xs tracking-widest rounded-lg transition-colors shadow-lg shadow-gold-500/20"
            >
              Reserve a Table
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
