import Link from "next/link";
import type { Metadata } from "next";
import { person } from "@/lib/content";
import { EMAIL } from "@/lib/email";
import ContactForm from "@/components/ContactForm";
import CopyEmailLink from "@/components/CopyEmailLink";
import { ArrowLeft, Mail, Linkedin, Github, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: `Contact — ${person.name}`,
  description:
    "Get in touch about hiring, AI projects, or automation — I read every message and respond within 24 hours.",
};

const contactLinks = [
  {
    icon: "mail" as const,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    sub: "I respond within 24 hours",
  },
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: "+92 311 9903233",
    href: "https://wa.me/923119903233",
    sub: "Message me directly",
  },
];

const iconMap: Record<string, (p: any) => JSX.Element> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  whatsapp: WhatsApp,
};

export default function ContactPage() {
  return (
    <main className="shell">
      <Link href="/" className="back">
        <ArrowLeft /> Back to home
      </Link>

      <div className="contact-layout">
        {/* ── Left column: info ──────────────────────────── */}
        <div className="contact-info">
          <p className="contact-info-eyebrow">Get In Touch</p>
          <h1 className="contact-info-title">
            Let&rsquo;s build
            <br />
            something together.
          </h1>
          <p className="contact-info-body">
            Whether you&rsquo;re hiring for an AI engineering role, looking to automate
            a business workflow, or just want to talk through an idea — I read
            every message and always respond within 24 hours.
          </p>

          <div className="contact-info-note">
            <span className="contact-info-note-label">Prefer a call?</span>
            <a href="https://cal.com/ammar-khan-gaql3w/30min" target="_blank" rel="noopener noreferrer" className="contact-calendly-link">Book a free 30-minute discovery call →</a>
          </div>

          <div className="contact-links">
            <CopyEmailLink />
            {contactLinks.filter(cl => cl.icon !== "mail").map((cl) => {
              const Icon = iconMap[cl.icon];
              return (
                <a
                  key={cl.label}
                  href={cl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Icon />
                  <div>
                    <div className="contact-link-label">{cl.label}</div>
                    <div className="contact-link-sub">{cl.sub}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Right column: form ─────────────────────────── */}
        <ContactForm />
      </div>

      <footer className="foot" style={{ marginTop: 64 }}>
        <span>© {new Date().getFullYear()} {person.name}</span>
        <div className="foot-links">
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href="https://github.com/ammarkhan081" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ammarkhan-tech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
