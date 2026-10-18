export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "Rooms" | "Nature" | "Amenities" | "Architecture";
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: "/assets/rooms/garden-view-main.jpg", title: "Garden View Room - Interior", category: "Rooms", description: "Cosy living area overlooking the private garden" },
  { id: 2, src: "/assets/rooms/garden-view-thumb1.jpg", title: "Garden View Room - Patio", category: "Rooms", description: "Sunlit verandah with relaxing outdoor seating" },
  { id: 3, src: "/assets/rooms/garden-view-thumb2.jpg", title: "Garden View Room - Bed Setup", category: "Rooms", description: "King size bed with premium linens and garden backdrop" },
  { id: 4, src: "/assets/rooms/garden-view-thumb3.jpg", title: "Garden View Room - Detailing", category: "Rooms", description: "Elegant woodwork and local art decor" },
  { id: 5, src: "/assets/rooms/garden-view-thumb4.jpg", title: "Garden View Room - Balcony View", category: "Rooms", description: "Direct sights of the waving palm fronds" },
  { id: 6, src: "/assets/rooms/garden-view-thumb4.jpg", title: "Garden View Room - Seating Corner", category: "Rooms", description: "Quiet work-friendly corner in the suite" },
  { id: 7, src: "/assets/rooms/garden-view-thumb5.png", title: "Resort Palm Walkway", category: "Architecture", description: "Pathways lined with tall palm trees and lush turf" },
  { id: 8, src: "/assets/rooms/garden-courtyard.png", title: "Garden Courtyard", category: "Nature", description: "Tranquil garden sitting area surrounded by greenery" },
  { id: 9, src: "/assets/rooms/pool-view-main.jpg", title: "Pool View Room - Balcony", category: "Rooms", description: "Balcony overlooking our shimmering infinity pool" },
  { id: 10, src: "/assets/rooms/pool-view-thumb1.jpg", title: "Pool View Room - Premium Suite", category: "Rooms", description: "Spacious coastal-themed bedroom layout" },
  { id: 11, src: "/assets/rooms/pool-view-thumb2.jpg", title: "Pool View Room - Cozy Corner", category: "Rooms", description: "Lounge area ideal for reading and relaxation" },
  { id: 12, src: "/assets/rooms/pool-view-thumb3.jpg", title: "Pool View Room - Sunset Reflection", category: "Rooms", description: "Pool lights shimmering at sunset" },
  { id: 13, src: "/assets/rooms/pool-view-thumb4.png", title: "Infinity Swimming Pool", category: "Amenities", description: "Our signature blue pool under the clear sky" },
  { id: 14, src: "/assets/rooms/pool-view-thumb5.jpg", title: "Poolside Twilight View", category: "Amenities", description: "Evening reflections across the illuminated waters" },
  { id: 15, src: "/assets/rooms/couple-room-thumb2.webp", title: "Couple Room - Romantic Setup", category: "Rooms", description: "Intimate setup with ambient lighting and floral decor" },
  { id: 16, src: "/assets/rooms/couple-room-thumb1.webp", title: "Couple Room - Cozy Retreat", category: "Rooms", description: "Quiet coastal retreat designed for couples" },
  { id: 17, src: "/assets/rooms/couple-room-main.webp", title: "Couple Room - Elegant Detailing", category: "Rooms", description: "Modern amenities and handpicked warm decor" },
  { id: 18, src: "/assets/rooms/family-dorm-main.jpg", title: "Family Dorm - Main Hall", category: "Rooms", description: "Spacious layout with multiple premium beds" },
  { id: 19, src: "/assets/rooms/family-dorm-thumb1.jpg", title: "Family Dorm - Group Lounge", category: "Rooms", description: "Generous sitting space for group bonding" },
  { id: 20, src: "/assets/rooms/family-dorm-thumb2.jpg", title: "Family Dorm - Additional Setup", category: "Rooms", description: "Flexible bed arrangements for larger families" },
  { id: 21, src: "/assets/rooms/family-dorm-thumb3.jpg", title: "Family Dorm - Airy Verandah", category: "Rooms", description: "Lounge area opening up to coastal views" },
  { id: 22, src: "/assets/rooms/family-dorm-thumb4.jpg", title: "Family Dorm - Comfort Nook", category: "Rooms", description: "Cozy and spacious nook within the family suite" },
  { id: 23, src: "/assets/rooms/family-dorm-thumb5.jpg", title: "Family Dorm - Group Layout View", category: "Rooms", description: "Full view of the premium multi-bed design" },
  { id: 24, src: "/assets/location/location-surroundings-beach.webp", title: "Kelva Beach & Suru Forest", category: "Nature", description: "Pristine shoreline lined with towering casuarina trees" },
  { id: 25, src: "/assets/location/location-kelvafort.jpg", title: "Kelva Fort Portuguese Ruins", category: "Nature", description: "Historic coastal sea fort accessible during low tide" },
  { id: 26, src: "/assets/location/location-kelvadam.avif", title: "Kelva Dam Reservoir", category: "Nature", description: "Lush greenery and freshwater streams during monsoons" },
  { id: 27, src: "/assets/location/location-drone-shitlamata.jpg", title: "Sheetla Devi Temple", category: "Nature", description: "Ancient sea-facing temple dedicated to the deity" },
  { id: 28, src: "/assets/hero/hero-canopy-poster.jpg", title: "Resort Canopy View", category: "Architecture", description: "Stunning overview of the resort under palm canopy" },
  { id: 29, src: "/assets/hero/hero-gardens.jpg", title: "Lush Green Gardens", category: "Nature", description: "Lush tropical landscape surrounding the accommodations" },
  { id: 30, src: "/assets/gallery/wedding-banner.webp", title: "Wedding & Celebrations Setup", category: "Amenities", description: "Open-air celebration lawn with customized event lighting" },
  { id: 31, src: "/assets/gallery/banquet-hall.jpg", title: "Banquet & Event Lawn", category: "Amenities", description: "Multi-purpose event lawn and air-conditioned banquet hall" },
  { id: 32, src: "/assets/rooms/couple-room-thumb3.webp", title: "Couple Room - Modern Comfort", category: "Rooms", description: "Thoughtfully designed space for absolute comfort and relaxation" },
  { id: 33, src: "/assets/rooms/couple-room-thumb4.webp", title: "Couple Room - Serene Design", category: "Rooms", description: "Soft lighting and cozy arrangement for a perfect getaway" }
];
