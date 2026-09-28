import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { verifiedReviews } from '../data/galleryAndReviews';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-espresso-950 text-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Authentic Guest Feedback
            </span>
            <span className="w-8 h-0.5 bg-gold-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-100 uppercase">
            WHAT OUR <span className="gold-gradient-text italic font-normal normal-case">Guests Say</span>
          </h2>

          {/* Rating Summary Card */}
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-espresso border border-gold-500/30 shadow-xl">
            <div className="flex items-center gap-1 text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="h-6 w-px bg-gold-500/30" />
            <div className="text-left">
              <p className="font-serif text-xl font-bold text-cream-100 leading-tight">4.2 ★ Rating</p>
              <p className="text-[11px] text-cream-300/70">Based on 1,043+ Verified Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {verifiedReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-espresso-900/60 border border-gold-500/20 hover:border-gold-400/40 shadow-2xl flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-gold-500/10 absolute top-6 right-6 group-hover:text-gold-500/20 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-gold-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <h3 className="font-serif text-xl font-bold text-gold-300 mb-2">
                  "{rev.highlightText}"
                </h3>

                <p className="text-cream-200/90 text-sm font-light leading-relaxed">
                  {rev.fullComment}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-espresso-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-cream-200">{rev.author}</span>
                </div>

                <span className="text-[11px] text-cream-400/60">
                  {rev.verifiedSource}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read All Google Reviews External CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Cloves+Cafe+%26+Dining+Mughalsarai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-espresso-900 hover:bg-espresso-800 text-gold-300 border border-gold-400/30 font-semibold text-xs tracking-widest uppercase rounded-lg transition-colors shadow-lg"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-gold-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
