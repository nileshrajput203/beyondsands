# Technical & Editorial Decisions Log

This document records every conflict, authority resolution, and judgment call made during the reconnaissance and build of Beyond Sands, strictly adhering to **Section 2: Authority Order**:
1. Hard rules (Section 3)
2. Wireframe (`1.png`): layout, order, behaviour
3. Brand sheet (top block of wireframe): fonts, colours, page list
4. Live site: all content, data, media
5. Craft judgment (always choosing the reading that keeps every drawn wireframe element visible)

---

## 1. Hero Media: Video vs. Live Site Static Slider
- **Conflict**: The live site at https://www.beyondsands.in/ uses a JavaScript image slider cycle (`bg1`, `bg2`, `bg3`), whereas the wireframe (`1.png`) explicitly requires `"HERO VIDEO" (reel icon)` with autoplay, loop, playsInline, and WCAG pause control.
- **Authority Resolution**: Wireframe (Rank 2) + Hard Rule 2 & 3.
- **Decision**: Implemented full-viewport hero video (`<video>` with MP4 + WebM sources), self-hosted in `/public/assets/hero/hero-video.mp4` and `hero-video.webm`, with poster frame pointing to live site's `hero-canopy-poster.jpg` (`bg1-OX6kOzUT.jpg`). A minimal 1px stroke WCAG pause/play toggle is provided. Any video placed in `/public/assets/originals/hero-video.mp4` automatically overrides this.

## 2. Dining / Food Section: Dedicated Dish Photographs
- **Conflict**: The wireframe features a diagonal 3-plate progression (`Breakfast`, `Lunch`, `Dinner`). The live site mentions meals in packages (`["Lunch", "Hi-Tea", "Dinner", "Breakfast"]`) but contains no isolated food photography in its client bundle.
- **Authority Resolution**: Hard Rule 2 ("If a slot has nothing usable, use a real free-licence photograph (Unsplash/Pexels), log its URL in /docs/image-credits.md and flag it. LOCAL ORIGINALS: any file I place in /public/assets/originals overrides").
- **Decision**: Downloaded and prepared authentic coastal Indian/Maharashtrian culinary plates (steamed breakfast idli spread, afternoon coastal thali, evening twilight curry dinner), cropped as circular PNGs with feathered borders in `/public/assets/dining/`. Logged in `/docs/image-credits.md` and added to Missing Content list.

## 3. Preloader Ocean Stage Background
- **Conflict**: Wireframe depicts `"KELVA'S BEST RESORT (in aesthetic font)"` over top-down coastal crashing ocean foam before the white wave descends. The live site has drone canopy and shoreline images, but no pure top-down crashing foam background.
- **Authority Resolution**: Wireframe + Hard Rule 2.
- **Decision**: Self-hosted high-resolution aerial ocean water and crashing foam texture in `/public/assets/sky/ocean-foam.jpg` for the preloader ocean stage.

## 4. Cloud Divider Asset
- **Conflict**: Wireframe specifies `"Cloud as section divider and transition from 1st section to next"` with multi-layer parallax cut-outs with alpha.
- **Authority Resolution**: Wireframe + Hard Rule 2 & Section 8.4 ("Never AI-generated, never flat vector blobs").
- **Decision**: Processed high-resolution real cloud photography into 3 discrete alpha depth masks (`cloud-layer-1.webp`, `cloud-layer-2.webp`, `cloud-layer-3.webp`) stored in `/public/assets/sky/`.

## 5. Room Categories & Pinned Rail Count
- **Analysis**: The live site defines 5 room categories:
  1. `Garden View Room` (₹5,000 / night, 380 sq ft, 4 guests, 2 units)
  2. `Pool View Room` (₹5,000 / night, 400 sq ft, 4 guests, 4 units)
  3. `Couple Room` (₹4,500 / night, 350 sq ft, 3 guests, romantic setup)
  4. `Family Dorm` (₹6,500 / night, 650 sq ft, 8 guests, 1 unit)
  5. `Garden View Family Room` (₹6,000 / night, 480 sq ft, 6 guests, 2 units)
- **Decision**: The pinned horizontal rail scrolls through all 5 authentic room categories with their exact live site photos, 5 vertical thumbnails, numerals `1.` through `5.`, collapsible specs card, date range selector, live price calculator, and scroll progress pill.

## 6. Live Booking Engine & Enquiry Submission
- **Analysis**: The live site does not use an external booking engine (e.g. Booking.com / Agoda); all booking CTAs trigger direct WhatsApp redirection to `+91 99238 95055` (`https://wa.me/919923895055?text=...`) with structured prefilled queries.
- **Decision**: "Book Directly" and calculator booking action route to WhatsApp with dynamically calculated check-in, check-out, room category, nights, and total estimated tariff. "Enquiry Now" opens a luxury slide-over panel with form inputs (Name, Phone, Dates, Guests, Message) that submits directly via WhatsApp to `+91 99238 95055`.

## 7. Flagged Images Under 1600px Destined for Full-Bleed / Hero
- `/assets/hero/hero-twilight.jpg`: 1500x1000 (Source: `bg3-4CcLfXbw.jpg`). Flagged under 1600px.
- `/assets/location/location-drone-shitlamata.jpg`: 1280x720 (Source: `shitladevi -Dj3KqYeD.jpg`). Flagged under 1600px.
- `/assets/hero/hero-video.mp4` / `.webm`: 1280x720. Flagged under 1600px.
- *Resolution*: Retained exact live site aspect ratio and applied CSS `object-fit: cover` with custom focal points.
