import Link from "next/link";
import { services, person, engagementProcess, solutionsFaq } from "@/lib/content";
import { ArrowLeft, ArrowRight, MessageSquare, BookOpen, Zap, SearchIcon, LockIcon, BarChart2 } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `AI Solutions for Business — ${person.name}`,
  description: "AI agents, knowledge assistants, and workflow automation that reduce manual work and help businesses run smarter.",
};

const serviceIcon: Record<string, (p: any) => JSX.Element> = {
  message: MessageSquare,
  book: BookOpen,
  zap: Zap,
  search: SearchIcon,
  lock: LockIcon,
  chart: BarChart2,
};

export default function SolutionsPage() {
  return (
    <main className="shell">
      <Link href="/" className="back">
        <ArrowLeft /> Back to home
      </Link>

      <div className="page-hero">
        <p className="detail-cat" style={{ color: "#3dd7b8" }}>For Businesses</p>
        <h1 className="page-hero-title">What I Can Build For You</h1>
        <p className="page-hero-sub">
          If your team spends hours searching documents, answering the same questions twice,
          or monitoring things that could watch themselves — that&rsquo;s the work I automate.
          These are AI solutions with real engineering behind them, not just demos.
        </p>
        <div className="sol-industry-row">
          <span className="sol-industry-label">Particularly well-suited for</span>
          {["E-commerce brands", "SaaS companies", "Law firms & consultancies", "Agencies", "Finance teams"].map((ind) => (
            <span key={ind} className="sol-industry-tag">{ind}</span>
          ))}
        </div>
      </div>

      <div className="sol-grid">
        {services.map((s) => {
          const Icon = serviceIcon[s.icon] ?? Zap;
          return (
            <Link
              key={s.title}
              href={`/solutions/${s.slug}`}
              className="sol-card"
              style={{ "--sol-accent": s.accent } as React.CSSProperties}
            >
              <div className="sol-card-top">
                <div className="sol-icon-box" style={{ background: `${s.accent}22`, color: s.accent }}>
                  <Icon />
                </div>
                <span className="sol-project-tag">{s.project}</span>
              </div>
              <h3 className="sol-title">{s.title}</h3>
              <p className="sol-body">{s.body}</p>
              <div className="sol-footer">
                {s.priceFrom && (
                  <span className="sol-price">Starting from {s.priceFrom}</span>
                )}
                <span className="sol-cta">
                  See how this works <ArrowRight />
                </span>
              </div>
              <div className="sol-glow" style={{ background: `radial-gradient(circle at 0% 100%, ${s.accent}18, transparent 65%)` }} />
            </Link>
          );
        })}
      </div>

      {/* ── How Working Together Works ─────────────────────── */}
      <div className="process-wrap">
        <p className="process-label">The Process</p>
        <h2 className="process-heading">How Working Together Works</h2>
        <div className="process-steps">
          {engagementProcess.map((step) => (
            <div className="process-step" key={step.step}>
              <span
                className="process-num"
                style={{
                  background: `${step.accent}20`,
                  color: step.accent,
                }}
              >
                {step.step}
              </span>
              <div className="process-step-title">{step.title}</div>
              <div className="process-step-subtitle">{step.subtitle}</div>
              <p className="process-step-body">{step.body}</p>
              {"calendlyUrl" in step && (step as any).calendlyUrl && (
                <a
                  href={(step as any).calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sol-contact-pill"
                  style={{ marginTop: 16, fontSize: 13, padding: "9px 18px" }}
                >
                  Book a 30-minute call <ArrowRight />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <div className="faq-wrap">
        <p className="process-label">Common Questions</p>
        <h2 className="process-heading">What to Know Before We Talk</h2>
        <div className="faq-list">
          {solutionsFaq.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-q">{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="faq-fallback">
          Still have a question?{" "}
          <Link href="/contact" className="faq-fallback-link">
            Just ask <ArrowRight />
          </Link>
        </p>
      </div>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <div className="sol-cta-block">
        <p>Have a workflow you&rsquo;d like to automate?</p>
        <Link href="/contact" className="sol-contact-pill">
          Let&rsquo;s talk <ArrowRight />
        </Link>
      </div>

      <footer className="foot" style={{ marginTop: 64 }}>
        <Link href="/">← Back to home</Link>
        <div className="foot-links">
          <a href="https://github.com/ammarkhan081" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ammarkhan-tech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
