# 🍽️ The Cloves Cafe & Dining — Premium Website

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A bespoke, production-ready, ₹50,000+ level luxury website designed for **The Cloves Cafe & Dining**, located in **Pandit Deen Dayal Upadhyaya Nagar (Mughalsarai), Uttar Pradesh**.

---

## 🌟 Key Features & UX Strategist Highlights

- **Bespoke Luxury Aesthetics**: Deep Espresso (`#18110F`) and Champagne Gold (`#D4AF37`) color palette with high whitespace ratio and editorial typography.
- **Cinematic Hero & Entrance**: Ambient overlay with rating pill (**4.2 ★ Google Rating** from 1,043+ verified reviews), direct CTAs, and a smooth scroll down indicator.
- **Proportional Sleek Navbar**: Transparent-to-dark header transition on scroll, compact logo mark, desktop links, and full-screen mobile drawer navigation with spring physics.
- **Interactive Culinary Menu**: Real-time dish searching, pure veg filtering toggle, dynamic food cards, pricing, and modal preview story for every item.
- **The Cloves Signatures**: Highlighted signature items (Paneer Tikka, Hakka Noodles, KitKat Shake, Veg Manchow Soup, Honey Chilli Potato, Dal Fry) rendered in asymmetric horizontal editorial cards.
- **Instagram-Inspired Photo Gallery**: Responsive grid with category tabs (`ALL`, `FOOD`, `INTERIORS`, `DRINKS`, `VIBE`) and a full-screen Lightbox viewer with next/prev controls.
- **Verified Guest Reviews**: Authentic customer feedback highlights focusing on food quality, clean interiors, and hospitality, linked to Google Reviews.
- **High-Converting Table Reservation & Confetti**: Step-by-step interactive booking modal (Date, Time, Guests, Occasion, Special Requests) with celebratory confetti animation (`canvas-confetti`).
- **Mobile First Action Bar**: Fixed bottom navigation bar (`Call`, `Directions`, `Menu`, `Reserve`) optimized for smartphones.
- **Fail-Safe Image Loading**: Automatic `onError` image fallback across all food cards and gallery items.

---

## 📍 Business Details

- **Business Name**: The Cloves Cafe & Dining
- **Category**: Premium Cafe & Dining / North Indian Restaurant
- **Google Rating**: 4.2 ★ (1,043+ verified guest reviews)
- **Price Range**: ₹200 – ₹1,200 per person
- **Address**: GT Rd, in front of Subhash Park, above Allahabad Bank, Ravi Nagar, Subhash Nagar, Pandit Deen Dayal Upadhyaya Nagar, Uttar Pradesh 232101
- **Landmark**: Directly opposite Subhash Park
- **Phone**: `063890 61111`
- **Services**: Dine-In • Takeaway • Delivery • Online Ordering

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3 + Custom CSS Utilities
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Confetti Animation**: Canvas Confetti

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/codeashish12/the-cloves-cafe-and-dining-2.0.git
cd the-cloves-cafe-and-dining-2.0
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```
Open [http://localhost:4173/](http://localhost:4173/) to test the production bundle.

---

## 📂 Project Architecture

```
├── public/
│   └── favicon.svg           # Custom brand icon
├── src/
│   ├── components/           # Reusable UI Components
│   │   ├── Navbar.tsx        # Sticky proportional navbar & mobile drawer
│   │   ├── Hero.tsx          # Hero section with cinematic vignette & scroll indicator
│   │   ├── BrandIntro.tsx    # Editorial brand story & stats
│   │   ├── MenuSection.tsx   # Interactive menu grid with search & veg toggle
│   │   ├── DishModal.tsx     # Dish story inspection modal
│   │   ├── SignatureDishes.tsx # Horizontal signature dish cards
│   │   ├── Experience.tsx    # Ambiance & seating masonry highlights
│   │   ├── Gallery.tsx       # Photo gallery with animated Lightbox modal
│   │   ├── ReviewsSection.tsx# Verified Google review highlights
│   │   ├── LocationSection.tsx # Google maps view & directions links
│   │   ├── ReservationCTA.tsx  # Final high-converting call to action
│   │   ├── ReservationModal.tsx # Interactive reservation form with confetti
│   │   ├── MobileActionBar.tsx # Sticky bottom bar for mobile screens
│   │   ├── ScrollToTop.tsx   # Floating scroll up button
│   │   └── Footer.tsx        # Multi-column luxury footer
│   ├── data/
│   │   ├── menuData.ts       # Menu items dataset & fallback constants
│   │   └── galleryAndReviews.ts # Gallery dataset & verified review highlights
│   ├── App.tsx               # App assembly & modal state management
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind directives & glassmorphic utilities
├── index.html                # HTML entry point with Schema.org JSON-LD structured data
├── package.json              # Project metadata & dependencies
└── tailwind.config.js        # Espresso & Gold custom color palette definition
```

---

## 📄 License & Attribution

Designed and developed for **The Cloves Cafe & Dining**. All rights reserved © 2026.
