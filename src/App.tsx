import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { MenuSection } from './components/MenuSection';
import { SignatureDishes } from './components/SignatureDishes';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationCTA } from './components/ReservationCTA';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ScrollToTop } from './components/ScrollToTop';
import { DishModal } from './components/DishModal';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem } from './data/menuData';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-espresso-950 text-cream-100 font-sans selection:bg-gold-500 selection:text-espresso-950 antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Page Content */}
      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <BrandIntro />
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
        <SignatureDishes
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
        <Experience />
        <Gallery />
        <ReviewsSection />
        <LocationSection />
        <ReservationCTA onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <MobileActionBar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />

      {/* Dish Inspection Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;
