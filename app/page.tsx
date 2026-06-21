import Link from "next/link";
import { Fragment } from "react";
import {
  person,
  social,
  fork,
  projects,
  skills,
  experience,
  education,
  certifications,
  differentiators,
  testimonials,
} from "@/lib/content";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProjectCard from "@/components/ProjectCard";
import EmailLink from "@/components/EmailLink";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ArrowRight,
  Building2,
  Sparkles,
  ShieldCheck,
  Layers,
  AlertCircle,
  ServerIcon,
} from "@/components/icons";

const socialIcon: Record<string, (p: any) => JSX.Element> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  resume: FileText,
};

const forkIcon: Record<string, (p: any) => JSX.Element> = {
  building: Building2,
  sparkles: Sparkles,
};

const diffIcon: Record<string, (p: any) => JSX.Element> = {
  shield: ShieldCheck,
  layers: Layers,
  alert: AlertCircle,
  server: ServerIcon,
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function Page() {
  return (
    <main className="shell">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-top">
          <ProfileAvatar src="/profile.jpg" alt={person.name} />
          <div className="hero-titles">
            <h1>{person.name}</h1>
            <p className="role">{person.role}</p>
            <p className="hero-tagline">{person.tagline}</p>
            {person.availabilityPill && (
              <span
                className="avail-pill"
                style={{
                  background: `${person.availabilityPillColor}18`,
                  color: person.availabilityPillColor,
                  border: `1px solid ${person.availabilityPillColor}40`,
                } as React.CSSProperties}
              >
                <span
                  className="avail-dot"
                  style={{ background: person.availabilityPillColor } as React.CSSProperties}
                />
                {person.availabilityPill}
              </span>
            )}
          </div>
        </div>
        <p className="intro"><RichText text={person.intro} /></p>
        <p className="intro"><RichText text={person.availability} /></p>
        <div className="meta-row">
          {social.map((s) => {
            const Icon = socialIcon[s.icon] ?? Mail;
            if (s.icon === "mail") {
              return (
                <EmailLink key={s.label} className="pill" label={s.label}>
                  <Icon />
                </EmailLink>
              );
            }
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="pill">
                <Icon />
                {s.label}
              </a>
            );
          })}
        </div>
      </header>

      {/* ── Who I Help ────────────────────────────────────────── */}
      <section className="section" id="who-i-help">
        <h2 className="section-title">Who I Help</h2>
        <div className="fork">
          {fork.map((f) => {
            const Icon = forkIcon[f.icon] ?? Building2;
            return (
              <Link
                key={f.title}
                href={f.href}
                className="fork-card"
                style={{ "--fork-accent": f.color } as React.CSSProperties}
              >
                <div className="fork-icon-box" style={{ background: `${f.color}22`, color: f.color }}>
                  <Icon />
                </div>
                <span className="fork-eyebrow" style={{ color: f.color }}>{f.eyebrow}</span>
                <h3 className="fork-title">{f.title}</h3>
                <p className="fork-body">{f.body}</p>
                <span className="fork-cta">
                  {f.cta} <ArrowRight />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── What Sets Me Apart ────────────────────────────────── */}
      <section className="section">
        <h2 className="section-title">What Sets Me Apart</h2>
        <div className="diff-grid">
          {differentiators.map((d) => {
            const Icon = diffIcon[d.icon] ?? ShieldCheck;
            return (
              <div
                key={d.title}
                className="diff-card"
                style={{ "--diff-accent": d.accent } as React.CSSProperties}
              >
                <div
                  className="diff-icon-box"
                  style={{ background: `${d.accent}20`, color: d.accent }}
                >
                  <Icon />
                </div>
                <div className="diff-title">{d.title}</div>
                <p className="diff-body">{d.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Selected Work ──────────────────────────────────────── */}
      {(() => {
        const FEATURED = ["ashia", "finance-sovereign-assistant", "ai-research-analyst", "ai-evaluation-reliability-platform"];
        const featured = FEATURED.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as typeof projects;
        return (
          <section className="section" id="work">
            <h2 className="section-title">Selected Work</h2>
            <div className="cards">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/work" className="back" style={{ marginBottom: 0 }}>
                See all 6 projects <ArrowRight />
              </Link>
            </div>
          </section>
        );
      })()}

      {/* ── Testimonials (renders only when array is populated) ── */}
      {testimonials.length > 0 && (
        <section className="section">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <footer className="testimonial-author">
                  <span className="testimonial-name">{t.author}</span>
                  <span className="testimonial-role">
                    {t.role} &middot; {t.company}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* ── Experience ────────────────────────────────────────── */}
      <section className="section" id="about">
        <h2 className="section-title">Experience</h2>
        <div className="exp-stack">
          {experience.map((e) => (
            <div className="exp-card" key={e.role}>
              <div className="exp-card-head">
                <div className="exp-card-left">
                  <div className="exp-card-role">{e.role}</div>
                  <div className="exp-card-org">
                    <span className="exp-org-badge">{e.org}</span>
                    <span className="exp-dot-sep">·</span>
                    {e.location}
                  </div>
                </div>
                <span className="exp-card-period">{e.period}</span>
              </div>
              <ul className="exp-card-list">
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {skills.map((s) => (
            <div
              className="skill-card"
              key={s.group}
              style={{ "--skill-accent": s.color } as React.CSSProperties}
            >
              <div className="skill-card-header">
                <span className="skill-dot" style={{ background: s.color }} />
                <h4>{s.group}</h4>
              </div>
              <div className="tags">
                {s.items.map((it) => (
                  <span className="tag" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education & Certifications ────────────────────────── */}
      <section className="section">
        <h2 className="section-title">Education &amp; Certifications</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-icon-row">
              <span className="edu-badge">B.S.</span>
            </div>
            <div className="edu-degree">{education.degree}</div>
            <div className="edu-school">{education.school}</div>
            <div className="edu-period">{education.period}</div>
            <div className="edu-detail">{education.detail}</div>
          </div>
          <div className="edu-card">
            <div className="edu-icon-row">
              <span className="edu-badge cert-badge">Certs</span>
            </div>
            <div className="edu-degree">Professional Certifications</div>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Get In Touch ──────────────────────────────────────── */}
      <section className="section">
        <div className="sol-cta-block">
          <p>Ready to build something together?</p>
          <Link href="/contact" className="sol-contact-pill">
            Get in touch <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="foot">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <div className="foot-links">
          {social.map((s) => (
            <Fragment key={s.label}>
              {s.icon === "mail" ? (
                <EmailLink label={s.label} />
              ) : (
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              )}
            </Fragment>
          ))}
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
