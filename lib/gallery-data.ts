export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "Rooms" | "Nature" | "Amenities" | "Architecture";
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/gallery/gallery-wedding-mandap.webp",
    title: "Grand Wedding Mandap & Stage",
    category: "Architecture",
    description: "Traditional decorated wedding mandap with royal gold seating and floral arch backdrop"
  },
  {
    id: 2,
    src: "/assets/gallery/gallery-wedding-couple.webp",
    title: "Wedding Ceremony Celebration",
    category: "Amenities",
    description: "Memorable wedding ceremony and garland moments celebrated on the resort stage"
  },
  {
    id: 3,
    src: "/assets/gallery/gallery-banquet-hall.webp",
    title: "Air-Conditioned Banquet & Ceremony Hall",
    category: "Amenities",
    description: "Expansive air-conditioned banquet hall with guest chairs and decorated stage aisle"
  },
  {
    id: 4,
    src: "/assets/gallery/gallery-buffet-dining.webp",
    title: "Covered Outdoor Buffet & Dining",
    category: "Amenities",
    description: "Pure vegetarian multi-course feast and buffet counter with garden and canopy breeze"
  }
];
