"use client";

import React, { useState, useEffect, useRef } from "react";
import { VolumeIcon, VolumeXIcon } from "@/components/icons";

export function AudioAtmosphere() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isPlayingRef = useRef(false);

  const startOceanAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise generator for ocean waves
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Lowpass filter to simulate muffled water wash
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      // Periodic wave swells (LFO)
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8 sec swell cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(260, ctx.currentTime);

      lfo.connect(filter.frequency);
      whiteNoise.connect(filter);
      filter.connect(masterGain);

      whiteNoise.start();
      lfo.start();

      setIsPlaying(true);
      isPlayingRef.current = true;
    } catch {
      // Audio autoplay restrictions
    }
  };

  const stopOceanAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 1);
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        gainNodeRef.current = null;
        setIsPlaying(false);
        isPlayingRef.current = false;
      }, 1000);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopOceanAudio();
    } else {
      startOceanAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Mute coastal soundscape" : "Play coastal soundscape"}
      className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-deep-navy/60 backdrop-blur-md text-warm-ivory hover:text-champagne-gold border border-warm-ivory/20 hover:border-champagne-gold transition-all duration-300 cursor-pointer shadow-lg group"
      title="Coastal Ambience (Gentle Surf)"
    >
      {isPlaying ? (
        <>
          <VolumeIcon size={14} className="text-champagne-gold animate-pulse" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-champagne-gold font-medium hidden md:inline">
            Sound On
          </span>
        </>
      ) : (
        <>
          <VolumeXIcon size={14} className="text-warm-ivory/70 group-hover:text-champagne-gold" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-warm-ivory/70 group-hover:text-champagne-gold font-medium hidden md:inline">
            Sound Off
          </span>
        </>
      )}
    </button>
  );
}
