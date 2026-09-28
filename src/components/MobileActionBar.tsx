import React from 'react';
import { Phone, Navigation, Utensils, Calendar } from 'lucide-react';

interface MobileActionBarProps {
  onOpenReservation: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenReservation }) => {
  const scrollToMenu = () => {
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=The+Cloves+Cafe+%26+Dining+GT+Rd+Subhash+Park+PDDU+Nagar+Mughalsarai';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe">
      <div className="glass-espresso-dark border-t border-gold-500/30 px-3 py-2 flex items-center justify-around shadow-2xl">
        {/* Call Button */}
        <a
          href="tel:06389061111"
          className="flex flex-col items-center gap-1 text-[10px] font-semibold tracking-wider text-cream-200/90 hover:text-gold-400 py-1 px-3 transition-colors"
        >
          <Phone className="w-5 h-5 text-gold-400" />
          <span>Call</span>
        </a>

        {/* Directions Button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[10px] font-semibold tracking-wider text-cream-200/90 hover:text-gold-400 py-1 px-3 transition-colors"
        >
          <Navigation className="w-5 h-5 text-gold-400" />
          <span>Directions</span>
        </a>

        {/* Menu Button */}
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center gap-1 text-[10px] font-semibold tracking-wider text-cream-200/90 hover:text-gold-400 py-1 px-3 transition-colors"
        >
          <Utensils className="w-5 h-5 text-gold-400" />
          <span>Menu</span>
        </button>

        {/* Reserve Button */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center gap-1 text-[10px] font-bold tracking-wider text-espresso-950 bg-gold-400 hover:bg-gold-300 py-1.5 px-4 rounded-lg transition-colors shadow-md shadow-gold-500/20"
        >
          <Calendar className="w-5 h-5" />
          <span>Reserve</span>
        </button>
      </div>
    </div>
  );
};
