import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import { DEFAULT_FALLBACK_IMAGE } from '../data/menuData';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-espresso-950 text-cream-100 relative overflow-hidden border-t border-b border-gold-500/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20 group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200"
                alt="The Cloves Interior Dining Ambiance"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_FALLBACK_IMAGE;
                }}
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-espresso border border-gold-500/20 backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Mughalsarai's Premier Dining Address
                </p>
                <p className="font-serif text-lg text-cream-100 font-medium mt-0.5">
                  GT Road, in front of Subhash Park, PDDU Nagar
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:flex absolute -bottom-8 -right-6 glass-espresso p-5 rounded-xl border border-gold-400/30 shadow-2xl items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-cream-100 font-serif">Top Rated Hospitality</p>
                <p className="text-xs text-cream-300/80">Recognized for authentic taste & hygienic family dining.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
                Bespoke Dining & Culinary Artistry
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream-100 uppercase leading-tight">
              WHERE EVERY MEAL <br />
              <span className="gold-gradient-text italic font-normal normal-case">
                Becomes A Memory
              </span>
            </h2>

            <p className="mt-6 text-cream-200/90 text-base sm:text-lg leading-relaxed font-light">
              From comforting Indian classics like rich Dal Fry and hot Tawa Roti to indulgent café favourites including Hakka Noodles and KitKat Shakes, <strong className="text-gold-300 font-semibold">The Cloves Cafe & Dining</strong> brings together great food, warm hospitality, and an inviting atmosphere under one roof.
            </p>

            <p className="mt-4 text-cream-300/70 text-sm sm:text-base leading-relaxed">
              Whether you are planning a relaxed dinner with family, a casual date night, or a lively celebration with friends, our goal is to deliver an unforgettable dining experience in PDDU Nagar.
            </p>

            <div className="mt-10 pt-8 border-t border-gold-500/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-gold-400">
                  <Star className="w-4 h-4 fill-gold-400" />
                  <span className="font-serif text-2xl font-bold text-cream-100">4.2 ★</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-cream-300/60 mt-1">
                  Google Rating
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-cream-100">1,043+</span>
                <span className="text-[11px] uppercase tracking-wider text-cream-300/60 mt-1">
                  Guest Reviews
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gold-300">₹200–₹1,200</span>
                <span className="text-[11px] uppercase tracking-wider text-cream-300/60 mt-1">
                  Per Person Range
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-sm font-semibold text-cream-100 leading-tight">
                  Dine-In • Takeaway • Delivery
                </span>
                <span className="text-[11px] uppercase tracking-wider text-cream-300/60 mt-1">
                  Full Service
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
