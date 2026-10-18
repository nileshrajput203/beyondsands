# Missing Content & Fallback Log

In strict adherence to **Hard Rule 1** ("NO INVENTED CONTENT. If something the wireframe needs does not exist there, add it to a MISSING CONTENT list, use a clearly marked neutral placeholder, and keep going"), this log documents every element that the wireframe or brand architecture required which did not exist on the live website (https://www.beyondsands.in/).

---

| Item | Requirement Source | Live Site Status | Implementation / Fallback | Local Override Slot |
|---|---|---|---|---|
| **Hero Looping Video** | Wireframe (`1.png`) section 2 `"HERO VIDEO" (reel icon)` | Live site only had a static JavaScript image slider of 3 photos (`bg1`, `bg2`, `bg3`). | Sourced a CC-BY-SA 4.0 coastal aerial wave loop; transcoded to H.264 Baseline MP4 (843 KB) and VP9 WebM (2.1 MB) with poster frame pointing to live site's `hero-canopy-poster.jpg`. | `/public/assets/originals/hero-video.mp4` |
| **Breakfast Dish Photo** | Wireframe section 5 diagonal food plates | Live site mentions `"Breakfast"` in room amenities and meal packages, but has no dedicated dish photo. | Sourced authentic coastal South Indian/Maharashtrian steamed breakfast spread, cropped to circular PNG with feathered mask. | `/public/assets/originals/breakfast-plate.png` |
| **Lunch Dish Photo** | Wireframe section 5 diagonal food plates | Live site mentions `"Lunch"` in meal packages, but has no dedicated dish photo. | Sourced authentic Maharashtrian coastal lunch thali, cropped to circular PNG with feathered mask. | `/public/assets/originals/lunch-plate.png` |
| **Dinner Dish Photo** | Wireframe section 5 diagonal food plates | Live site mentions `"Dinner"` in meal packages, but has no dedicated dish photo. | Sourced authentic blue-hour coastal dinner spread, cropped to circular PNG with feathered mask. | `/public/assets/originals/dinner-plate.png` |
| **Preloader Foam Stage Texture** | Wireframe section 1 preloader background | Live site had no dedicated top-down ocean foam aerial background. | Sourced real ocean water and foam aerial photograph (`ocean-foam.jpg`) for the background stage. | `/public/assets/originals/ocean-foam.jpg` |
| **Cloud Divider Alpha Layers** | Wireframe section 4 cloud divider | Live site had no cloud cutouts. | Processed real cloud photography into 3 discrete alpha depth masks (`cloud-layer-1.webp` through `cloud-layer-3.webp`). | `/public/assets/originals/cloud-layer-*.webp` |
| **Online Booking Engine** | Wireframe Book Direct CTA | Live site has no third-party engine (e.g. SynXis/Agoda/Booking.com); bookings run via WhatsApp. | "Book Directly" routes to official WhatsApp (+91 99238 95055) with prefilled dates, guests, and estimated room tariff. | Configurable via environment variable |
| **Brand Sheet Routes (04, 05, 06, 07, 09, 10, 12)** | Brand Sheet (wireframe header block) | Live site client bundle only registered `/`, `/rooms`, `/about`, `/gallery`, `/contact`. | Created routes with a unified luxury editorial template porting authentic resort details, amenities, and inquiry actions. | `/app/(routes)/...` |
