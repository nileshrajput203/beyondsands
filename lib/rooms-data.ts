export interface RoomPackage {
  badge: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  priceSuffix: string;
  meals: string[] | null;
  checkin: string;
  checkout: string;
  whatsappMsg: string;
}

export interface RoomItem {
  id: string;
  numeral: string;
  index: string;
  name: string;
  price: number;
  priceFormatted: string;
  originalPrice: string;
  discountPercent: number;
  size: string;
  guests: number;
  units: number | null;
  bedType: string;
  view: string;
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  features: string[];
  images: {
    src: string;
    alt: string;
  }[];
  packages: RoomPackage[];
}

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "garden-view",
    numeral: "1.",
    index: "01",
    name: "Garden View Room",
    price: 5000,
    priceFormatted: "₹5,000",
    originalPrice: "₹7,000",
    discountPercent: 29,
    size: "380 sq ft",
    guests: 4,
    units: 2,
    bedType: "King Size Bed",
    view: "Garden View & Coconut Groves",
    shortDescription: "Spacious room with a private balcony overlooking our lush coconut palm groves and serene gardens.",
    longDescription: "Immerse yourself in nature with our Garden View Room. Featuring a private balcony that opens to sweeping views of our coconut groves and landscaped gardens, this room provides the ultimate peaceful escape. Enjoy the morning sea breeze while sipping your tea or coffee in a private outdoor setting.",
    amenities: ["Free WiFi", "Breakfast", "AC", "Private Parking", "Room Service", "Tea/Coffee Maker"],
    features: ["Private Verandah", "Garden View", "Work Desk", "King Bed", "Rain Shower", "Direct Garden Access"],
    images: [
      { src: "/assets/rooms/garden-view-main.jpg", alt: "Garden View Room Main Interior" },
      { src: "/assets/rooms/garden-view-thumb1.jpg", alt: "Private Verandah Patio Seating" },
      { src: "/assets/rooms/garden-view-thumb2.jpg", alt: "King Bed Setup with Garden Backdrop" },
      { src: "/assets/rooms/garden-view-thumb3.jpg", alt: "Interior Woodwork Detailing" },
      { src: "/assets/rooms/garden-view-thumb4.jpg", alt: "Balcony Palm Fronds View" },
    ],
    packages: [
      {
        badge: "CLASSIC",
        title: "Accommodation",
        subtitle: "No Food Included",
        priceLabel: "₹5,000",
        priceSuffix: "/ Night",
        meals: null,
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'd like to book the Garden View Room — Accommodation Only (no food) at ₹5,000/night. Can you share availability?"
      },
      {
        badge: "GROUPS",
        title: "Per Person Package",
        subtitle: "4 Person Minimum",
        priceLabel: "₹2,800",
        priceSuffix: "/ Per Person",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'm interested in the Garden View Room — Per Person Package at ₹2,800/person (4 person min, food included). Can you share details and availability?"
      },
      {
        badge: "COUPLE",
        title: "Couple Package",
        subtitle: "For 2 Persons",
        priceLabel: "₹7,000",
        priceSuffix: "/ Night",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'd like to book the Garden View Room — Couple Package at ₹7,000/night (food included). Can you share availability?"
      }
    ]
  },
  {
    id: "pool-view",
    numeral: "2.",
    index: "02",
    name: "Pool View Room",
    price: 5000,
    priceFormatted: "₹5,000",
    originalPrice: "₹8,000",
    discountPercent: 38,
    size: "400 sq ft",
    guests: 4,
    units: 4,
    bedType: "King Size Bed",
    view: "Direct Poolside View",
    shortDescription: "Stunning room offering direct views of our shimmering infinity pool and the evening pool lights.",
    longDescription: "Our Pool View Room offers a perfect blend of luxury and convenience. Located just steps away from our azure infinity pool, this room features sliding glass doors that frame beautiful pool views. The interiors are decorated in soothing oceanic blues and warm woods, creating an inviting coastal ambiance. Relax on your private patio or take a refreshing dip at any time.",
    amenities: ["Free WiFi", "Breakfast", "AC", "Pool Access", "Room Service", "Spa Access", "Tea/Coffee Maker"],
    features: ["Poolside View", "Direct Pool Access", "Private Patio", "King Bed", "Modern Bath", "Evening Turndown"],
    images: [
      { src: "/assets/rooms/pool-view-main.jpg", alt: "Pool View Room Balcony View" },
      { src: "/assets/rooms/pool-view-thumb1.jpg", alt: "Premium Suite Bedroom Layout" },
      { src: "/assets/rooms/pool-view-thumb2.jpg", alt: "Cozy Lounge Reading Corner" },
      { src: "/assets/rooms/pool-view-thumb3.jpg", alt: "Sunset Reflection Across Pool" },
      { src: "/assets/rooms/pool-view-thumb4.png", alt: "Azure Swimming Pool Daylight" },
    ],
    packages: [
      {
        badge: "CLASSIC",
        title: "Accommodation",
        subtitle: "No Food Included",
        priceLabel: "₹5,000",
        priceSuffix: "/ Night",
        meals: null,
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'd like to book the Pool View Room — Accommodation Only (no food) at ₹5,000/night. Can you share availability?"
      },
      {
        badge: "GROUPS",
        title: "Per Person Package",
        subtitle: "4 Person Minimum",
        priceLabel: "₹2,800",
        priceSuffix: "/ Per Person",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'm interested in the Pool View Room — Per Person Package at ₹2,800/person (4 person min, food included). Can you share details and availability?"
      },
      {
        badge: "COUPLE",
        title: "Couple Package",
        subtitle: "For 2 Persons",
        priceLabel: "₹7,000",
        priceSuffix: "/ Night",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'd like to book the Pool View Room — Couple Package at ₹7,000/night (food included). Can you share availability?"
      }
    ]
  },
  {
    id: "couple-room",
    numeral: "3.",
    index: "03",
    name: "Couple Room",
    price: 4500,
    priceFormatted: "₹4,500",
    originalPrice: "₹9,500",
    discountPercent: 53,
    size: "350 sq ft",
    guests: 3,
    units: null,
    bedType: "Queen Size Bed",
    view: "Romantic Coastal Balcony",
    shortDescription: "Cozy and intimate room specifically designed for couples seeking a romantic coastal escape.",
    longDescription: "Designed with intimacy and warmth in mind, our Couple Room provides the quintessential romantic hideaway. Soft ambient lighting, plush bedding, and artisanal wooden accents create a cozy, cocooning atmosphere. Wake to gentle morning birdsong and step out onto your private balcony to watch the palms sway in the sea breeze.",
    amenities: ["Free WiFi", "Breakfast", "AC", "Room Service", "Romantic Setup", "Spa Access", "Welcome Drinks"],
    features: ["Romantic Setting", "Premium Bedding", "Private Balcony", "Queen Bed", "Luxury Bath", "Couples Massage Access"],
    images: [
      { src: "/assets/rooms/couple-room-main.webp", alt: "Couple Room Romantic Setup & Floral Accents" },
      { src: "/assets/rooms/couple-room-thumb1.webp", alt: "Cozy Coastal Bed Arrangement" },
      { src: "/assets/rooms/couple-room-thumb2.webp", alt: "Warm Handpicked Interior Decor" },
      { src: "/assets/rooms/couple-room-thumb3.webp", alt: "Modern Comfort Room Perspective" },
      { src: "/assets/rooms/couple-room-thumb4.webp", alt: "Serene Lighting & Evening Atmosphere" },
    ],
    packages: [
      {
        badge: "GROUPS",
        title: "Per Person Package",
        subtitle: "2 Person Minimum",
        priceLabel: "₹2,800",
        priceSuffix: "/ Per Person",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'm interested in the Couple Room — Per Person Package at ₹2,800/person (food included). Can you share details and availability?"
      },
      {
        badge: "COUPLE",
        title: "Couple Package",
        subtitle: "For 2 Persons",
        priceLabel: "₹7,000",
        priceSuffix: "/ Night",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'd like to book the Couple Room — Couple Package at ₹7,000/night (food included). Can you share availability?"
      }
    ]
  },
  {
    id: "family-dorm",
    numeral: "4.",
    index: "04",
    name: "Family Dorm",
    price: 6500,
    priceFormatted: "₹6,500",
    originalPrice: "₹14,000",
    discountPercent: 54,
    size: "650 sq ft",
    guests: 8,
    units: 1,
    bedType: "Multiple Premium Beds",
    view: "Garden & Property Grounds",
    shortDescription: "Spacious multi-bed accommodation perfect for families or groups of friends traveling together.",
    longDescription: "A vibrant, expansive retreat crafted specifically for shared memories. Featuring generous floor plans, multiple dedicated sleeping areas with plush mattresses, and communal seating zones. Ideal for large families, reunions, and travel cohorts who desire closeness without sacrificing comfort.",
    amenities: ["Free WiFi", "Breakfast", "AC", "Private Parking", "Room Service", "Extra Beds Available"],
    features: ["Family Friendly", "Multiple Beds", "Spacious Seating", "Garden View", "Connecting Layout", "Kid Friendly Amenities"],
    images: [
      { src: "/assets/rooms/family-dorm-main.jpg", alt: "Family Dorm Main Hall Multi-Bed Layout" },
      { src: "/assets/rooms/family-dorm-thumb1.jpg", alt: "Group Lounge & Generous Seating" },
      { src: "/assets/rooms/family-dorm-thumb2.jpg", alt: "Flexible Sleeping Arrangements" },
      { src: "/assets/rooms/family-dorm-thumb3.jpg", alt: "Airy Verandah Opening to Gardens" },
      { src: "/assets/rooms/family-dorm-thumb4.jpg", alt: "Cozy Family Suite Nook" },
    ],
    packages: [
      {
        badge: "GROUPS",
        title: "Per Person Package",
        subtitle: "4 Person Minimum",
        priceLabel: "₹2,800",
        priceSuffix: "/ Per Person",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'm interested in the Family Dorm — Per Person Package at ₹2,800/person (4 person min, food included). Can you share details and availability?"
      }
    ]
  },
  {
    id: "garden-view-family",
    numeral: "5.",
    index: "05",
    name: "Garden View Family Room",
    price: 6000,
    priceFormatted: "₹6,000",
    originalPrice: "₹10,000",
    discountPercent: 40,
    size: "480 sq ft",
    guests: 6,
    units: 2,
    bedType: "King Bed + Twin Beds",
    view: "Lush Emerald Garden View",
    shortDescription: "A spacious family room surrounded by lush garden views, ideal for families or groups of up to 6 guests.",
    longDescription: "Surrounded by emerald gardens and coconut groves, our Garden View Family Room provides a generous sanctuary for families desiring peace and connection. Features an expansive private verandah, high wooden ceilings, and bespoke furnishings.",
    amenities: ["Free WiFi", "Breakfast", "AC", "Private Parking", "Room Service", "Tea/Coffee Maker", "Extra Beds Available"],
    features: ["Family Friendly", "Garden View", "Multiple Beds", "Private Verandah", "Work Desk", "Direct Garden Access"],
    images: [
      { src: "/assets/rooms/garden-view-thumb3.jpg", alt: "Garden View Family Room Main Suite Interior" },
      { src: "/assets/rooms/garden-view-thumb1.jpg", alt: "Verandah Seating with Garden View" },
      { src: "/assets/rooms/garden-view-thumb5.png", alt: "Palms & Emerald Lawn Perspective" },
      { src: "/assets/rooms/garden-courtyard.png", alt: "Courtyard Entryway & Garden Pathway" },
      { src: "/assets/rooms/garden-view-thumb4.jpg", alt: "Balcony Palm Fronds View" },
    ],
    packages: [
      {
        badge: "GROUPS",
        title: "Per Person Package",
        subtitle: "4 Person Minimum",
        priceLabel: "₹2,800",
        priceSuffix: "/ Per Person",
        meals: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
        checkin: "12:00 PM",
        checkout: "11:00 AM",
        whatsappMsg: "Hi Beyond Sands! I'm interested in the Garden View Family Room — Per Person Package at ₹2,800/person (food included). Can you share availability?"
      }
    ]
  }
];
