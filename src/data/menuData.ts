export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  isVeg: boolean;
  isPopular?: boolean;
  isSignature?: boolean;
  image: string;
  tags?: string[];
}

export const menuCategories = [
  { id: 'all', name: 'ALL' },
  { id: 'starters', name: 'STARTERS' },
  { id: 'soups', name: 'SOUPS' },
  { id: 'north-indian', name: 'NORTH INDIAN' },
  { id: 'chinese', name: 'CHINESE' },
  { id: 'cafe', name: 'CAFE' },
  { id: 'shakes', name: 'SHAKES' },
  { id: 'mocktails', name: 'MOCKTAILS' },
  { id: 'desserts', name: 'DESSERTS' },
];

export const menuItems: MenuItem[] = [
  // SIGNATURES & POPULAR
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    category: 'starters',
    description: 'Char-grilled cottage cheese marinated in hung curd and aromatic Indian spices, served with mint chutney.',
    price: '₹280',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800',
    tags: ['Chef Special', 'Tandoor']
  },
  {
    id: 'hakka-noodles',
    name: 'Hakka Noodles',
    category: 'chinese',
    description: 'Classic wok-tossed thin noodles with crisp garden vegetables, soy sauce and subtle aromatic seasonings.',
    price: '₹220',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    tags: ['Wok Tossed', 'Popular']
  },
  {
    id: 'kitkat-shake',
    name: 'KitKat Shake',
    category: 'shakes',
    description: 'Rich chocolate shake blended with crunchy KitKat wafers, topped with whipped cream and chocolate drizzle.',
    price: '₹190',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    tags: ['Bestseller', 'Indulgent']
  },
  {
    id: 'veg-manchow-soup',
    name: 'Veg Manchow Soup',
    category: 'soups',
    description: 'Spicy and tangy soy-flavored broth loaded with finely diced vegetables, topped with crispy fried noodles.',
    price: '₹160',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    tags: ['Comfort Food', 'Spicy']
  },
  {
    id: 'honey-chilli-potato',
    name: 'Honey Chilli Potato',
    category: 'chinese',
    description: 'Crispy sesame-crusted potato finger chips tossed in a sweet & spicy honey-chilli sauce.',
    price: '₹240',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    tags: ['Crispy', 'Crowd Favourite']
  },
  {
    id: 'dal-fry',
    name: 'Dal Fry',
    category: 'north-indian',
    description: 'Yellow lentils tempered with desi ghee, cumin, garlic, red chillies and fresh coriander.',
    price: '₹190',
    isVeg: true,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    tags: ['Authentic', 'Desi Ghee']
  },
  {
    id: 'methi-chicken',
    name: 'Methi Chicken',
    category: 'north-indian',
    description: 'Tender chicken pieces cooked in a rich gravy infused with fresh fenugreek leaves and whole Indian spices.',
    price: '₹360',
    isVeg: false,
    isPopular: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    tags: ['Signature Non-Veg', 'Rich Gravy']
  },
  {
    id: 'tawa-roti',
    name: 'Tawa Roti (Desi Ghee)',
    category: 'north-indian',
    description: 'Freshly puffed whole wheat flatbread baked on traditional iron tawa with optional pure desi ghee.',
    price: '₹25',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    tags: ['Fresh Baked']
  },
  {
    id: 'hara-bhara-kebab',
    name: 'Hara Bhara Kebab',
    category: 'starters',
    description: 'Nutritious patties made from spinach, green peas, and potatoes with aromatic subtle herbs.',
    price: '₹230',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    category: 'starters',
    description: 'Boneless chicken cubes marinated in spicy red tandoori masala, slow-roasted in clay tandoor.',
    price: '₹340',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sweet-corn-soup',
    name: 'Cream of Sweet Corn Soup',
    category: 'soups',
    description: 'Creamy golden sweet corn kernel soup with mild white pepper and fresh herbs.',
    price: '₹150',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    category: 'north-indian',
    description: 'Soft cottage cheese cubes simmered in a velvety tomato, cashew, and butter gravy.',
    price: '₹290',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chilli-paneer-dry',
    name: 'Chilli Paneer (Dry)',
    category: 'chinese',
    description: 'Crispy fried paneer blocks tossed with bell peppers, onions, garlic and dark soy sauce.',
    price: '₹260',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'veg-sizzler',
    name: 'The Cloves Supreme Sizzler',
    category: 'cafe',
    description: 'Sizzling hot platter featuring grilled vegetables, Hakka noodles, cottage cheese steak and French fries.',
    price: '₹380',
    isVeg: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ['Chef Signature', 'Sizzling']
  },
  {
    id: 'cold-coffee-icecream',
    name: 'Classic Cold Coffee with Ice Cream',
    category: 'cafe',
    description: 'Thick creamy espresso blend served chilled with a generous scoop of vanilla bean ice cream.',
    price: '₹170',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'virgin-mojito',
    name: 'Mint Virgin Mojito',
    category: 'mocktails',
    description: 'Refreshing crushed fresh mint leaves, zesty lime juice, sugar syrup, and sparkling soda over crushed ice.',
    price: '₹160',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blue-lagoon',
    name: 'Electric Blue Lagoon',
    category: 'mocktails',
    description: 'Vibrant blue curaçao flavor muddled with fresh lemon and bubbly sprite splash.',
    price: '₹170',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gulab-jamun-ice-cream',
    name: 'Hot Gulab Jamun with Vanilla Ice Cream',
    category: 'desserts',
    description: 'Soft warm khoya dumplings soaked in cardamom sugar syrup, served with cold vanilla ice cream.',
    price: '₹140',
    isVeg: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800'
  }
];

export const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
