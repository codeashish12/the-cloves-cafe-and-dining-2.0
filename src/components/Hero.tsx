import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, UtensilsCrossed, Phone, ChevronDown, Star, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const scrollToMenu = () => {
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
          alt="The Cloves Cafe Ambiance"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle brightness-[0.45] filter contrast-[1.1]"
        />
        {/* Cinematic Multi-layered Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-espresso-950" />
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-terracotta-500/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Rating Badge Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-espresso-900/80 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md shadow-lg"
        >
          <div className="flex items-center text-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <span className="font-semibold text-cream-100">4.2 ★ Google Rating</span>
          <span className="text-gold-400/50">•</span>
          <span className="text-cream-200/80">1,043+ Verified Reviews</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3 max-w-4xl"
        >
          <span className="text-xs sm:text-sm font-sans tracking-[0.35em] text-gold-400 uppercase font-semibold block">
            Welcome to Mughalsarai's Finest Cafe & Dining
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-100 uppercase leading-[1.1]">
            THE CLOVES <br />
            <span className="gold-gradient-text italic font-normal text-3xl sm:text-5xl md:text-6xl tracking-wide normal-case block mt-2">
              Cafe & Dining
            </span>
          </h1>
        </motion.div>

        {/* Tagline & Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl space-y-2"
        >
          <p className="font-serif text-2xl sm:text-3xl text-gold-200/90 italic font-medium">
            "Good Food. Great Moments."
          </p>
          <p className="text-base sm:text-lg text-cream-200/80 font-light max-w-xl mx-auto leading-relaxed">
            An elevated café and dining experience in the heart of PDDU Nagar. Bringing together comfort, luxury, and authentic flavors under one roof.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Explore Menu Button */}
          <motion.button
            whileHover={{ scale: 1.04, translateY: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToMenu}
            className="px-8 py-4 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 shadow-xl shadow-gold-500/20 flex items-center gap-2 group"
          >
            <UtensilsCrossed className="w-4 h-4 text-espresso-950 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Menu</span>
          </motion.button>

          {/* Reserve a Table Button */}
          <motion.button
            whileHover={{ scale: 1.04, translateY: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenReservation}
            className="px-8 py-4 bg-espresso-900/90 hover:bg-espresso-800 text-cream-100 border border-gold-400/40 hover:border-gold-400 font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 backdrop-blur-md shadow-xl flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Reserve a Table</span>
          </motion.button>

          {/* Quick Call Action */}
          <a
            href="tel:06389061111"
            className="px-6 py-4 text-cream-300 hover:text-gold-300 font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center gap-2 border border-transparent hover:border-gold-500/20 rounded-lg"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call 063890 61111</span>
          </a>
        </motion.div>

        {/* Quick Location Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-8 flex items-center gap-2 text-xs text-cream-300/70"
        >
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>GT Rd, in front of Subhash Park, PDDU Nagar (Mughalsarai)</span>
        </motion.div>

      </div>

      {/* Down Scroll Indicator with Smooth Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer"
        onClick={scrollToMenu}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-cream-300/60 font-medium">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 rounded-full border border-gold-400/30 flex items-center justify-center bg-espresso-950/40 backdrop-blur-sm"
        >
          <ChevronDown className="w-5 h-5 text-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
