import Link from "next/link";
import { person, education } from "@/lib/content";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About — ${person.name}`,
  description:
    "AI Engineer building production-grade agents, RAG systems, and workflow automations that hold up under real-world constraints — not just in demos.",
};

const principles = [
  {
    label: "Reliability over impressiveness",
    body: "Systems that admit uncertainty are more useful than ones that always generate an answer. Every project I build has a path to 'I don't know' that's just as deliberate as the happy path.",
    accent: "#8b5cf6",
  },
  {
    label: "Full-stack ownership",
    body: "Backend, retrieval, evaluation pipeline, containerised deployment — I own the entire stack on every project, not just the LLM call in the middle.",
    accent: "#3dd7b8",
  },
  {
    label: "Production-first engineering",
    body: "Observability, evaluation, and audit logging are built in from day one. If a system can't explain what it did and why, it isn't ready for production.",
    accent: "#5b9dff",
  },
];

export default function AboutPage() {
  return (
    <main className="shell">
      <Link href="/" className="back">
        <ArrowLeft /> Back to home
      </Link>

      <div className="about-layout">
        {/* ── Left column ─────────────────────────────────── */}
        <div className="about-left">
          <img
            src="/profile.jpg"
            alt={person.name}
            className="about-avatar"
          />
          <h1 className="about-name">{person.name}</h1>
          <p className="about-role">{person.role}</p>
          <p className="about-location">📍 {person.location}</p>

          <div className="about-quick-links">
            <Link href="/work" className="sol-contact-pill" style={{ fontSize: 13, padding: "9px 18px" }}>
              See my projects <ArrowRight />
            </Link>
            <Link href="/contact" className="about-ghost-pill">
              Get in touch <ArrowRight />
            </Link>
          </div>

          {/* Education card */}
          <div className="about-edu-card">
            <span className="about-edu-eyebrow">Education</span>
            <p className="about-edu-degree">{education.degree}</p>
            <p className="about-edu-school">{education.school}</p>
            <p className="about-edu-detail">{education.detail}</p>
            <p className="about-edu-detail" style={{ marginTop: 2 }}>Graduating Oct 2026</p>
          </div>
        </div>

        {/* ── Right column ─────────────────────────────────── */}
        <div className="about-right">
          <p className="about-eyebrow">About</p>
          <h2 className="about-heading">Why I build what I build</h2>

          <div className="about-bio">
            <p>
              I build AI systems because I&rsquo;m drawn to problems where being wrong actually matters — infrastructure that has to fix itself before anyone gets paged, or a finance assistant that needs to be precise, not just articulate.
            </p>
            <p>
              The thread running through my work is reliability under real-world constraints: agents that handle uncertainty honestly, retrieval pipelines that know when they don&rsquo;t have an answer, and systems built to survive production, not just impress in a demo.
            </p>
            <p>
              I care equally about the engineering depth — multi-agent orchestration, fine-tuning, hybrid retrieval — and what it actually unlocks: less manual work, faster decisions, AI people can trust with things that matter. That&rsquo;s the standard I hold every project to.
            </p>
          </div>

          {/* Principles */}
          <div className="about-principles-label">How I work</div>
          <div className="about-principles">
            {principles.map((p) => (
              <div
                key={p.label}
                className="about-principle"
                style={{ "--principle-accent": p.accent } as React.CSSProperties}
              >
                <div
                  className="about-principle-dot"
                  style={{ background: p.accent }}
                />
                <div>
                  <div className="about-principle-label">{p.label}</div>
                  <p className="about-principle-body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA band */}
          <div className="about-cta-band">
            <div>
              <p className="about-cta-heading">Currently available</p>
              <p className="about-cta-sub">Open to AI Engineer roles and select automation projects for businesses.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/work" className="sol-contact-pill" style={{ fontSize: 13, padding: "9px 18px", whiteSpace: "nowrap" }}>
                See the work <ArrowRight />
              </Link>
              <Link href="/contact" className="about-ghost-pill">
                Contact me <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="foot" style={{ marginTop: 64 }}>
        <span>© {new Date().getFullYear()} {person.name}</span>
        <div className="foot-links">
          <Link href="/work">Work</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
