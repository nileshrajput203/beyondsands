export function KineticMarquee() {
  const phrases = [
    "Kelva Beach",
    "100% Pure Vegetarian",
    "Sheetla Devi Temple",
    "Palghar Coast",
    "Family Sanctuary",
    "Blue Hour Calm",
  ];
  const loop = [...phrases, ...phrases];

  return (
    <div
      className="relative w-full overflow-hidden py-2 sm:py-2.5 border-y border-charcoal/10 bg-warm-ivory/40"
      aria-hidden="true"
    >
      <div className="animate-marquee-left flex items-center gap-6 sm:gap-8 px-4">
        {loop.map((phrase, i) => (
          <span key={`${phrase}-${i}`} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="font-display text-base sm:text-lg lg:text-xl italic text-deep-navy/80 tracking-tight whitespace-nowrap">
              {phrase}
            </span>
            <span className="w-1 h-1 rounded-full bg-champagne-gold shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
