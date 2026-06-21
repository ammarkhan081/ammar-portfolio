"use client";

import { useEffect, useState } from "react";

type ProfileAvatarProps = {
  src: string;
  alt: string;
};

export default function ProfileAvatar({ src, alt }: ProfileAvatarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="avatar-btn"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt} photo`}
      >
        <img className="avatar" src={src} alt={alt} />
      </button>

      {open && (
        <div
          className="avatar-lightbox"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} photo`}
        >
          <button
            type="button"
            className="avatar-lightbox-close"
            onClick={() => setOpen(false)}
            aria-label="Close photo"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <img
            className="avatar-lightbox-img"
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
