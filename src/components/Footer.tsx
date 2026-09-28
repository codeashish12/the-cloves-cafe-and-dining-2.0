import React from 'react';
import { Utensils, MapPin, Phone, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=The+Cloves+Cafe+%26+Dining+GT+Rd+Subhash+Park+PDDU+Nagar+Mughalsarai';

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-gold-500/20 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gold-500/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-espresso-900 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-cream-100 uppercase">
                  THE CLOVES
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase -mt-1 font-medium">
                  Cafe & Dining
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-300/70 font-light leading-relaxed max-w-sm">
              An elevated café and North Indian dining destination in Pandit Deen Dayal Upadhyaya Nagar (Mughalsarai). Offering authentic flavours, warm hospitality, and memorable moments.
            </p>

            <div className="pt-2 text-xs text-gold-400 font-serif italic">
              "Good Food. Great Moments."
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-400 transition-colors">Menu & Dishes</a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-gold-400 transition-colors">Signatures</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold-400 transition-colors">Guest Reviews</a>
              </li>
            </ul>
          </div>

          {/* Visit Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              VISIT US
            </h4>
            <div className="text-xs text-cream-200/80 space-y-2">
              <p className="leading-relaxed">
                GT Rd, in front of Subhash Park, above Allahabad Bank, Ravi Nagar, Subhash Nagar,
              </p>
              <p className="text-gold-300 font-semibold">
                Pandit Deen Dayal Upadhyaya Nagar, Uttar Pradesh 232101
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-medium pt-1"
              >
                <span>Get Directions on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              CONTACT & HOURS
            </h4>
            <div className="text-xs text-cream-200/80 space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <a href="tel:06389061111" className="hover:text-gold-400 font-semibold text-gold-300">
                  063890 61111
                </a>
              </p>
              <p className="text-cream-300/70">
                Open Daily: 11:00 AM – 10:30 PM
              </p>
              <p className="text-[11px] text-cream-400/60 pt-1">
                Dine-In • Takeaway • Delivery • Online Ordering
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-espresso-900 border border-gold-500/20 flex items-center justify-center text-cream-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-espresso-900 border border-gold-500/20 flex items-center justify-center text-cream-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/60">
          <p>© 2026 The Cloves Cafe & Dining. All rights reserved.</p>
          <p>Pandit Deen Dayal Upadhyaya Nagar (Mughalsarai), UP</p>
        </div>

      </div>
    </footer>
  );
};
