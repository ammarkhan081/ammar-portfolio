"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "@/components/icons";

export type GallerySlide = {
  src: string;
  caption: string;
};

export default function ProjectGallery({
  slides,
  accent,
}: {
  slides: GallerySlide[];
  accent: string;
}) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [slides.length]
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [slides.length]
  );

  if (!slides || slides.length === 0) return null;

  return (
    <div className="gallery">
      {/* ── Viewport ────────────────── */}
      <div className="gallery-viewport">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`gallery-slide ${i === current ? "gallery-slide-active" : ""}`}
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="gallery-img"
              draggable={false}
            />
          </div>
        ))}

        {/* Arrows */}
        {slides.length > 1 && (
          <>
            <button
              className="gallery-arrow gallery-arrow-prev"
              onClick={prev}
              aria-label="Previous screenshot"
            >
              <ChevronLeft />
            </button>
            <button
              className="gallery-arrow gallery-arrow-next"
              onClick={next}
              aria-label="Next screenshot"
            >
              <ChevronRight />
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="gallery-counter">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* ── Caption ─────────────────── */}
      <p className="gallery-caption">{slides[current].caption}</p>

      {/* ── Dot indicators ──────────── */}
      {slides.length > 1 && (
        <div className="gallery-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === current ? "gallery-dot-active" : ""}`}
              style={i === current ? { background: accent, borderColor: accent } : {}}
              onClick={() => setCurrent(i)}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
