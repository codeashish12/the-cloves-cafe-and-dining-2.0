import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=The+Cloves+Cafe+%26+Dining+GT+Rd+Subhash+Park+PDDU+Nagar+Mughalsarai';

  return (
    <section id="location" className="py-24 bg-espresso-900/40 text-cream-100 relative overflow-hidden border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              Visit The Cloves
            </span>
            <span className="w-8 h-0.5 bg-gold-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-100 uppercase">
            FIND <span className="gold-gradient-text italic font-normal normal-case">Us</span>
          </h2>

          <p className="mt-4 text-cream-200/80 text-sm sm:text-base font-light">
            Conveniently situated on GT Road in Mughalsarai, directly opposite Subhash Park.
          </p>
        </div>

        {/* Content Box */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-espresso-950 p-8 sm:p-10 rounded-2xl border border-gold-500/20 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 uppercase">Address</h3>
                  <p className="mt-1 text-sm text-cream-200/90 leading-relaxed font-light">
                    GT Rd, in front of Subhash Park, above Allahabad Bank, Ravi Nagar, Subhash Nagar,
                  </p>
                  <p className="text-sm font-semibold text-gold-300 mt-1">
                    Pandit Deen Dayal Upadhyaya Nagar, Uttar Pradesh 232101
                  </p>
                  <p className="text-xs text-cream-400/60 mt-1 italic">
                    Landmark: Opposite Subhash Park
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 uppercase">Phone & Orders</h3>
                  <p className="mt-1 text-base font-bold text-gold-400">
                    063890 61111
                  </p>
                  <p className="text-xs text-cream-300/70 mt-0.5">
                    Available for Dine-In, Delivery & Takeaway inquiries.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100 uppercase">Dining Hours</h3>
                  <p className="mt-1 text-sm text-cream-200">
                    Open Daily: <span className="text-gold-300 font-semibold">11:00 AM – 10:30 PM</span>
                  </p>
                  <p className="text-xs text-cream-400/60 mt-0.5">
                    Serving lunch, afternoon cafe brews, dinner & dessert.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-8 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:06389061111"
                className="py-3.5 px-6 bg-espresso-900 hover:bg-espresso-800 text-cream-100 border border-gold-500/30 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </motion.div>

          {/* Right Map Placeholder / Google Map Embedded View */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-espresso-950 rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl relative min-h-[380px] flex flex-col"
          >
            {/* Embedded Google Map Iframe */}
            <iframe
              title="The Cloves Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.243178050186!2d83.1165!3d25.2818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3271df05a395%3A0x6b6c16ec22bd51b4!2sPandit%20Deen%20Dayal%20Upadhyaya%20Nagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] object-cover flex-1"
            />

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-espresso border border-gold-500/30 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-medium text-cream-100">
                <Compass className="w-4 h-4 text-gold-400" />
                <span>GT Road, Mughalsarai (PDDU Nagar)</span>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
