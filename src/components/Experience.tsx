import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Smile, Coffee, GlassWater } from 'lucide-react';

const atmosphereHighlights = [
  {
    icon: Sparkles,
    title: 'Elegant Interiors',
    desc: 'Bespoke mood lighting, plush seating, and warm wooden tones crafted for modern comfort.'
  },
  {
    icon: Users,
    title: 'Family & Group Friendly',
    desc: 'Spacious dining tables and warm hospitality tailored for family dinners and group treats.'
  },
  {
    icon: Heart,
    title: 'Casual Date Spot',
    desc: 'An intimate, cozy café setting with soft music, artisanal beverages, and private seating.'
  },
  {
    icon: Smile,
    title: 'Celebrations & Events',
    desc: 'The perfect Mughalsarai venue to host birthdays, anniversaries, and personal milestones.'
  }
];

const experienceImages = [
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    title: 'Warm Ambiance',
    category: 'INTERIOR VIBE',
    colSpan: 'sm:col-span-2 lg:col-span-7',
    height: 'h-72 sm:h-96'
  },
  {
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800',
    title: 'Casual & Comfortable',
    category: 'SEATING',
    colSpan: 'sm:col-span-1 lg:col-span-5',
    height: 'h-72 sm:h-96'
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    title: 'Cafe Corner',
    category: 'BEVERAGE VIBE',
    colSpan: 'sm:col-span-1 lg:col-span-4',
    height: 'h-72 sm:h-80'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    title: 'Celebration Dinners',
    category: 'GATHERINGS',
    colSpan: 'sm:col-span-2 lg:col-span-8',
    height: 'h-72 sm:h-80'
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-espresso-950 text-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              The Ambiance & Vibe
            </span>
            <span className="w-8 h-0.5 bg-gold-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-100 uppercase">
            MORE THAN <span className="gold-gradient-text italic font-normal normal-case">Just A Meal</span>
          </h2>

          <p className="mt-4 text-cream-200/80 text-sm sm:text-base font-light">
            Designed to feel warm, comfortable, and luxury-infused. The Cloves is where great conversations meet memorable flavors.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {atmosphereHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-espresso-900/60 border border-gold-500/15 hover:border-gold-400/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-espresso-950 transition-all duration-300 mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-cream-300/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Masonry-Style Ambiance Photo Layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-6">
          {experienceImages.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group shadow-2xl border border-gold-500/20 ${img.colSpan} ${img.height}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Hover Badge Info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-espresso-950/80 px-2.5 py-1 rounded border border-gold-500/30 backdrop-blur-sm">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-cream-100 mt-2 group-hover:text-gold-300 transition-colors">
                    {img.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
