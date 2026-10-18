export interface EventGalleryItem {
  id: string;
  title: string;
  category: "Weddings" | "Lawns & Decor" | "Pre-Wedding" | "Banquets & Dining";
  src: string;
  description: string;
  capacity?: string;
  tag: string;
}

export const EVENT_GALLERY_ITEMS: EventGalleryItem[] = [
  {
    id: "event-1",
    title: "Grand Wedding & Celebration Stage",
    category: "Weddings",
    src: "/assets/events/wedding-banner.webp",
    description: "Official outdoor celebration stage setup under swaying coconut palms with custom floral canopies and ambient lighting.",
    capacity: "Up to 250 Guests",
    tag: "Wedding Stage",
  },
  {
    id: "event-2",
    title: "Air-Conditioned Banquet & Conference Hall",
    category: "Banquets & Dining",
    src: "/assets/events/banquet-hall.jpg",
    description: "Modern, fully air-conditioned indoor banquet hall equipped for sacred indoor rituals, family dining feasts, and corporate gatherings.",
    capacity: "100 – 150 Guests",
    tag: "Indoor Banquet",
  },
  {
    id: "event-3",
    title: "Evening Poolside Celebration Deck",
    category: "Pre-Wedding",
    src: "/assets/events/pool-evening.jpg",
    description: "Tranquil evening poolside venue with ambient blue illumination, ideal for Sangeet nights, ring ceremonies, and musical cocktail evenings.",
    capacity: "50 – 120 Guests",
    tag: "Poolside Evening",
  },
  {
    id: "event-4",
    title: "Resort Palm Walkway & Celebration Lawn",
    category: "Lawns & Decor",
    src: "/assets/events/lawn-garden.png",
    description: "Spacious manicured green lawn framed by soaring palm trees, designed for open-air banquets, buffet spreads, and grand guest seating.",
    capacity: "50 – 250 Guests",
    tag: "Palm Lawn",
  },
  {
    id: "event-5",
    title: "Landscaped Garden Courtyard",
    category: "Lawns & Decor",
    src: "/assets/events/garden-courtyard.png",
    description: "Intimate landscaped sitting nooks and verandah pathways immersed in coastal flora, perfect for daytime gatherings and photo sessions.",
    capacity: "30 – 80 Guests",
    tag: "Garden Courtyard",
  },
  {
    id: "event-6",
    title: "Signature Blue Swimming Pool & Deck",
    category: "Pre-Wedding",
    src: "/assets/events/pool-deck.png",
    description: "Expansive swimming pool with crystal blue waters, perfect for vibrant Haldi celebrations, poolside fun, and pre-wedding revelry.",
    capacity: "40 – 100 Guests",
    tag: "Pool Deck",
  },
  {
    id: "event-7",
    title: "Resort Palm Canopy & Coastal Setting",
    category: "Lawns & Decor",
    src: "/assets/events/resort-canopy.jpg",
    description: "Breathtaking aerial view of Beyond Sands nestled amidst whispering coastal groves directly opposite Sheetla Devi Temple.",
    capacity: "Full Resort Buyout",
    tag: "Resort Setting",
  },
  {
    id: "event-8",
    title: "Lush Green Landscaped Grounds",
    category: "Lawns & Decor",
    src: "/assets/events/lush-gardens.jpg",
    description: "Vibrant tropical lawns celebrating native coastal greenery, offering plenty of open space for wedding photography and rituals.",
    capacity: "Scenic Backdrop",
    tag: "Lush Grounds",
  },
  {
    id: "event-9",
    title: "Golden Hour Sunset Celebration Lawn",
    category: "Weddings",
    src: "/assets/events/golden-hour.jpg",
    description: "Experience the magical sunset hues washing over the resort lawn, crafting timeless memories for your dream coastal wedding.",
    capacity: "Up to 250 Guests",
    tag: "Sunset Lawn",
  },
];
