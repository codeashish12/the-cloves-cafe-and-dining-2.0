import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Utensils, Sparkles } from 'lucide-react';

interface ReservationCTAProps {
  onOpenReservation: () => void;
}

export const ReservationCTA: React.FC<ReservationCTAProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-24 bg-espresso-950 text-cream-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-espresso-900/90 via-espresso-950 to-espresso-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Sparkle Icon */}
        <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto mb-6 shadow-xl">
          <Sparkles className="w-7 h-7" />
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-cream-100 uppercase leading-tight">
          YOUR TABLE IS <br />
          <span className="gold-gradient-text italic font-normal normal-case">
            Waiting.
          </span>
        </h2>

        <p className="mt-6 text-cream-200/90 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Planning dinner with friends, a family meal, or a relaxed evening out? Come experience <strong className="text-gold-300 font-semibold">The Cloves Cafe & Dining</strong>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenReservation}
            className="px-9 py-4 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold text-sm tracking-widest uppercase rounded-lg transition-all shadow-xl shadow-gold-500/20 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:06389061111"
            className="px-9 py-4 bg-espresso-900 hover:bg-espresso-800 text-cream-100 border border-gold-400/40 font-bold text-sm tracking-widest uppercase rounded-lg transition-all flex items-center gap-2 shadow-xl"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call 063890 61111</span>
          </motion.a>
        </div>

        <p className="mt-8 text-xs text-cream-400/60 uppercase tracking-widest">
          Pandit Deen Dayal Upadhyaya Nagar (Mughalsarai), Uttar Pradesh
        </p>

      </div>
    </section>
  );
};
