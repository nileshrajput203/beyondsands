export interface DishItem {
  id: string;
  name: string;
  course: "Breakfast" | "Lunch" | "Dinner";
  label: string;
  image: string;
  description: string;
  timing: string;
  focalPoint: string;
}

export const DISHES_DATA: DishItem[] = [
  {
    id: "breakfast",
    name: "Coastal Morning Awakening",
    course: "Breakfast",
    label: "Breakfast",
    image: "/assets/dining/breakfast-plate.png",
    description: "Wake to palms, sea air, and fresh coastal morning delicacies, artisanal tea, and warm savouries.",
    timing: "08:00 AM – 10:30 AM",
    focalPoint: "center"
  },
  {
    id: "lunch",
    name: "Maharashtrian Coastal Thali",
    course: "Lunch",
    label: "Lunch",
    image: "/assets/dining/lunch-plate.png",
    description: "Authentic coastal thalis crafted with regional Palghar spices, slow-cooked pulses, and organic greens.",
    timing: "12:30 PM – 03:00 PM",
    focalPoint: "center"
  },
  {
    id: "dinner",
    name: "Blue Hour Twilight Repast",
    course: "Dinner",
    label: "Dinner",
    image: "/assets/dining/dinner-plate.png",
    description: "Curated evening dining under the starlit sky, accompanied by gentle coastal breezes and lantern light.",
    timing: "07:30 PM – 10:30 PM",
    focalPoint: "center"
  }
];

export interface MenuSection {
  title: string;
  timing: string;
  description: string;
  items: {
    name: string;
    description: string;
    dietary: string;
  }[];
}

export const RESORT_MENU: MenuSection[] = [
  {
    title: "Morning Spread (Breakfast)",
    timing: "08:00 AM – 10:30 AM",
    description: "Served hot in our open-air garden pavilion under swaying palm fronds.",
    items: [
      { name: "Steamed Idli & Medu Vada", description: "Freshly ground coconut chutney and aromatic drumstick sambar", dietary: "Vegetarian" },
      { name: "Coastal Poha with Crispy Peanuts", description: "Tempered with mustard seeds, curry leaves, and fresh grated coconut", dietary: "Vegetarian" },
      { name: "Upma & Sheera Duo", description: "Semolina roasted in pure ghee, garnished with cashews and raisins", dietary: "Vegetarian" },
      { name: "Masala Chai & Fresh Filter Coffee", description: "Brewed with hand-picked spices and rich milk", dietary: "Beverage" }
    ]
  },
  {
    title: "Afternoon Feast (Lunch)",
    timing: "12:30 PM – 03:00 PM",
    description: "Hearty traditional coastal meal celebrating the agricultural heritage of Palghar.",
    items: [
      { name: "Signature Coastal Veg Thali", description: "Paneer coastal masala, dal tadka, seasonal sukhi bhaji, chapati, rice, and solkadhi", dietary: "Vegetarian" },
      { name: "Dal Khichdi & Papad Churi", description: "Comforting slow-cooked lentil rice finished with garlic ghee tadka", dietary: "Vegetarian" },
      { name: "Crispy Bhindi & Koshimbir", description: "Spiced okra fritters accompanied by cucumber peanut salad", dietary: "Vegetarian" }
    ]
  },
  {
    title: "Sunset Refreshment (Hi-Tea)",
    timing: "04:30 PM – 06:00 PM",
    description: "Unwind by the infinity pool as the sun dips into the Arabian Sea.",
    items: [
      { name: "Crispy Kanda Bhaji (Onion Pakoras)", description: "Served steaming hot with mint coriander dip", dietary: "Vegetarian" },
      { name: "Vegetable Cutlets & Fries", description: "Golden crumbed vegetable patties with local spice seasoning", dietary: "Vegetarian" },
      { name: "Cutting Chai & Ginger Infusion", description: "Warm coastal evening brew", dietary: "Beverage" }
    ]
  },
  {
    title: "Blue Hour Twilight (Dinner)",
    timing: "07:30 PM – 10:30 PM",
    description: "Candlelit coastal evening dining under the stars.",
    items: [
      { name: "Paneer Tikka Masala", description: "Char-grilled cottage cheese in a rich spiced tomato cashew gravy", dietary: "Vegetarian" },
      { name: "Veg Kolhapuri / Handi", description: "Mixed garden vegetables in a fiery, fragrant red chili reduction", dietary: "Vegetarian" },
      { name: "Jeera Rice & Dal Makhani", description: "Overnight slow-cooked black lentils with cream and cumin rice", dietary: "Vegetarian" },
      { name: "Gulab Jamun with Rabdi", description: "Warm milk dumplings in cardamom syrup topped with condensed milk", dietary: "Dessert" }
    ]
  }
];
