import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { galleryItems } from '../data/galleryAndReviews';
import { DEFAULT_FALLBACK_IMAGE } from '../data/menuData';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['ALL', 'FOOD', 'INTERIORS', 'DRINKS', 'VIBE'];

  const filteredItems = activeTab === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-espresso-900/40 text-cream-100 relative overflow-hidden border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Instagram className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
                Visual Journey
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-100 uppercase">
              GALLERY <span className="gold-gradient-text italic font-normal normal-case">& Moments</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  activeTab === cat
                    ? 'bg-gold-400 text-espresso-950 border-gold-400 shadow-md shadow-gold-500/20'
                    : 'bg-espresso-950 text-cream-300 border-gold-500/20 hover:border-gold-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-gold-500/20 bg-espresso-950"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6" />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-espresso-900/80 border border-gold-400/40 flex items-center justify-center text-gold-400 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-cream-100 mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full z-10 bg-espresso-950 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-gold-500/20 bg-espresso-900/60">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    {filteredItems[selectedImageIndex].category}
                  </span>
                  <span className="text-xs text-cream-300/50">•</span>
                  <span className="text-xs text-cream-200">
                    {selectedImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-2 rounded-full text-cream-300 hover:text-gold-400 bg-espresso-950 border border-gold-500/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-[60vh] max-h-[550px] bg-black flex items-center justify-center">
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-contain"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-espresso-950/80 text-cream-100 hover:text-gold-400 border border-gold-500/30 backdrop-blur-md transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-espresso-950/80 text-cream-100 hover:text-gold-400 border border-gold-500/30 backdrop-blur-md transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 bg-espresso-950 border-t border-gold-500/20">
                <h3 className="font-serif text-2xl font-bold text-cream-100">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-xs text-cream-300/80 mt-1 font-light">
                  {filteredItems[selectedImageIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
