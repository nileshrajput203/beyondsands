import React from "react";

export function WaveOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-[200%] h-[160%] absolute -left-[50%] -top-[30%] pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="foamFringe" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Crest Layer 3 (Back: ~60% opacity) */}
        <path
          className="wave-crest-back"
          d="M0,0 L1440,0 L1440,750 C1280,780 1120,720 960,750 C800,780 640,720 480,750 C320,780 160,720 0,750 Z"
          fill="#FFFFFF"
          fillOpacity="0.6"
        />

        {/* Crest Layer 2 (Mid: ~85% opacity) */}
        <path
          className="wave-crest-mid"
          d="M0,0 L1440,0 L1440,770 C1300,740 1150,800 1000,760 C850,720 700,780 550,750 C400,720 250,770 0,760 Z"
          fill="#FFFFFF"
          fillOpacity="0.85"
        />

        {/* Crest Layer 1 (Front: 100% pure white body) */}
        <path
          className="wave-crest-front"
          d="M0,0 L1440,0 L1440,800 C1320,770 1200,820 1080,790 C960,760 840,810 720,785 C600,760 480,805 360,780 C240,755 120,795 0,780 Z"
          fill="url(#foamFringe)"
        />
      </svg>

      <style jsx>{`
        .wave-crest-back {
          animation: waveBack 8s ease-in-out infinite alternate;
        }
        .wave-crest-mid {
          animation: waveMid 6s ease-in-out infinite alternate-reverse;
        }
        .wave-crest-front {
          animation: waveFront 4.5s ease-in-out infinite alternate;
        }

        @keyframes waveBack {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(40px); }
        }
        @keyframes waveMid {
          0% { transform: translateX(35px); }
          100% { transform: translateX(-35px); }
        }
        @keyframes waveFront {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(25px); }
        }
      `}</style>
    </div>
  );
}
