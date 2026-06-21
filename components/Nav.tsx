"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { social } from "@/lib/content";
import EmailLink from "./EmailLink";
import { Home, Work, About, Mail, Linkedin, Github, FileText, Zap, Send } from "./icons";

const socialIcon: Record<string, (p: any) => JSX.Element> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  resume: FileText,
};

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="nav" aria-label="Primary">
      <Link href="/" className={`nav-item ${path === "/" ? "active" : ""}`} aria-label="Home">
        <Home />
        <span className="tip">Home</span>
      </Link>
      <Link href="/work" className={`nav-item ${path === "/work" || path.startsWith("/work/") ? "active" : ""}`} aria-label="Work">
        <Work />
        <span className="tip">Work</span>
      </Link>
      <Link href="/solutions" className={`nav-item ${path === "/solutions" || path.startsWith("/solutions/") ? "active" : ""}`} aria-label="Solutions">
        <Zap />
        <span className="tip">Solutions</span>
      </Link>
      <Link href="/about" className={`nav-item ${path === "/about" ? "active" : ""}`} aria-label="About">
        <About />
        <span className="tip">About</span>
      </Link>
      <Link
        href="/contact"
        className={`nav-item ${path === "/contact" ? "active" : ""}`}
        aria-label="Contact"
      >
        <Send />
        <span className="tip">Contact</span>
      </Link>

      <div className="nav-sep" />

      {social.map((s) => {
        const Icon = socialIcon[s.icon] ?? Mail;
        if (s.icon === "mail") {
          return (
            <EmailLink
              key={s.label}
              className="nav-item"
              label={s.label}
              showTip
            >
              <Icon />
            </EmailLink>
          );
        }
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
            aria-label={s.label}
          >
            <Icon />
            <span className="tip">{s.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
