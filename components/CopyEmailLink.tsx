"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/email";
import { Mail } from "@/components/icons";

export default function CopyEmailLink() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="contact-link copy-email-btn"
      aria-label="Copy email address"
    >
      <Mail />
      <div>
        <div className="contact-link-label">
          {copied ? "Copied!" : "Email"}
        </div>
        <div className="contact-link-sub">
          {copied ? EMAIL : "Click to copy email address"}
        </div>
      </div>
      <span className="copy-badge">{copied ? "✓" : "Copy"}</span>
    </button>
  );
}
