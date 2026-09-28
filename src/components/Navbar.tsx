import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronRight, Utensils } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-espresso-dark py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-espresso-950/90 via-espresso-950/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Sleek & Proportional */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full border border-gold-400/40 bg-espresso-900 flex items-center justify-center group-hover:border-gold-400 transition-colors shadow-md shrink-0">
                <Utensils className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-cream-100 uppercase group-hover:text-gold-300 transition-colors">
                  THE CLOVES
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gold-400 uppercase -mt-0.5 font-medium">
                  CAFE & DINING
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium tracking-wider uppercase text-cream-200/80 hover:text-gold-400 transition-colors relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:06389061111"
                className="flex items-center gap-1.5 text-xs font-semibold text-cream-200/90 hover:text-gold-400 px-3 py-2 rounded-lg transition-colors border border-gold-500/20 hover:border-gold-500/40"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>063890 61111</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenReservation}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider text-espresso-950 uppercase bg-gold-400 rounded-md group hover:bg-gold-300 transition-all shadow-md shadow-gold-500/10"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>Reserve A Table</span>
              </motion.button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-lg text-cream-100 hover:text-gold-400 bg-espresso-900/80 border border-gold-500/20 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-espresso-950 border-l border-gold-500/30 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gold-500/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full border border-gold-400/40 bg-espresso-900 flex items-center justify-center">
                      <Utensils className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="font-serif text-base font-bold tracking-wider text-cream-100 uppercase">
                        THE CLOVES
                      </span>
                      <span className="text-[8px] tracking-[0.2em] text-gold-400 uppercase -mt-0.5 font-medium">
                        CAFE & DINING
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-cream-300 hover:text-gold-400 rounded-full border border-gold-500/20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-3">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.3 }}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between text-sm font-serif tracking-wider text-cream-200 hover:text-gold-400 py-2 border-b border-espresso-800/60"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-gold-400/60" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-col gap-3">
                <a
                  href="tel:06389061111"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-espresso-900 border border-gold-500/30 text-cream-100 rounded-lg text-xs font-semibold tracking-wider"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  Call: 063890 61111
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold uppercase tracking-widest text-xs rounded-lg transition-colors shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve a Table
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
