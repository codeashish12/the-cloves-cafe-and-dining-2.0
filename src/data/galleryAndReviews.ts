export interface GalleryItem {
  id: string;
  title: string;
  category: 'FOOD' | 'INTERIORS' | 'DRINKS' | 'VIBE';
  image: string;
  subtitle: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Warm Ambiance & Modern Decor',
    category: 'INTERIORS',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Stylish seating designed for comfort, family gatherings, and casual date nights.'
  },
  {
    id: 'g2',
    title: 'Authentic Tandoori & North Indian',
    category: 'FOOD',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Char-grilled delicacies prepared fresh daily with authentic spices.'
  },
  {
    id: 'g3',
    title: 'Handcrafted Mocktails & Cold Brews',
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Refreshing artisanal beverages perfect for sunny afternoons and relaxed evenings.'
  },
  {
    id: 'g4',
    title: 'Celebration Vibes',
    category: 'VIBE',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'The ideal spot in Mughalsarai for birthdays, anniversaries, and group treats.'
  },
  {
    id: 'g5',
    title: 'Classic Chinese & Wok Favourites',
    category: 'FOOD',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Sizzling Hakka noodles, Manchow soups, and honey chilli appetizers.'
  },
  {
    id: 'g6',
    title: 'Indulgent Milkshakes & Cold Coffees',
    category: 'DRINKS',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Thick KitKat and chocolate shakes crafted for dessert lovers.'
  },
  {
    id: 'g7',
    title: 'Clean & Welcoming Dining Hall',
    category: 'INTERIORS',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Hygienic, temperature-controlled, and family-friendly dining floor.'
  },
  {
    id: 'g8',
    title: 'Relaxed Cafe Evening Ambiance',
    category: 'VIBE',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Cozy mood lighting with soft ambient acoustics.'
  }
];

export interface VerifiedReview {
  id: string;
  author: string;
  rating: number;
  highlightText: string;
  fullComment: string;
  visitedDate: string;
  verifiedSource: string;
}

export const verifiedReviews: VerifiedReview[] = [
  {
    id: 'r1',
    author: 'Verified Local Diner',
    rating: 5,
    highlightText: 'Delicious Dal Fry & Hot Tawa Roti',
    fullComment: 'The Dal Fry paired with pure desi ghee Tawa Roti is absolute perfection here! Extremely clean, beautifully decorated interiors and courteous staff.',
    visitedDate: 'Recent Google Review',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'r2',
    author: 'Food Enthusiast',
    rating: 5,
    highlightText: 'Methi Chicken & Ambiance is Unbeatable',
    fullComment: 'Great discovery in PDDU Nagar! The Methi Chicken was rich and full of flavor. Loved the cafe vibe, fast service and warm hospitality.',
    visitedDate: 'Verified Review',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'r3',
    author: 'Family Guest',
    rating: 5,
    highlightText: 'Clean Interiors & Friendly Staff',
    fullComment: 'Visited with family for dinner. The Hakka Noodles and KitKat Shake were loved by kids. Very clean seating, great lighting and polite behavior by staff.',
    visitedDate: 'Verified Review',
    verifiedSource: 'Google Maps'
  },
  {
    id: 'r4',
    author: 'Casual Visitor',
    rating: 4,
    highlightText: 'Great Spot for Hangouts & Mocktails',
    fullComment: 'One of the best cafe & dining spaces in Mughalsarai. Quick service, pleasant background music and reasonable price range (₹200-₹1200 per person).',
    visitedDate: 'Verified Review',
    verifiedSource: 'Google Maps'
  }
];
