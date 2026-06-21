"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { EMAIL } from "@/lib/email";

type Props = {
  className?: string;
  label?: string;
  children?: ReactNode;
  showTip?: boolean;
};

export default function EmailLink({
  className,
  label = "Email",
  children,
  showTip = false,
}: Props) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label="Copy email address"
    >
      {children}
      {showTip ? (
        <span className="tip">{copied ? "Copied!" : label}</span>
      ) : (
        <span>{copied ? "Copied!" : label}</span>
      )}
    </button>
  );
}

