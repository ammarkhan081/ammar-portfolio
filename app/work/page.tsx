import Link from "next/link";
import { projects, person, highlights } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Engineering Projects — ${person.name}`,
  description:
    "Production AI systems with architecture diagrams, technical write-ups, and source code — 6 projects across agents, RAG, LLM observability, and RL post-training.",
};

export default function WorkPage() {
  const complete = projects.filter((p) => !p.inProgress);
  const inProgress = projects.filter((p) => p.inProgress);

  return (
    <main className="shell">
      <Link href="/" className="back">
        <ArrowLeft /> Back to home
      </Link>

      <div className="page-hero">
        <p className="detail-cat">Engineering Work</p>
        <h1 className="page-hero-title">Projects</h1>
        <p className="page-hero-sub">
          Production AI systems — each built end-to-end with a real backend, containerised
          infrastructure, and an evaluation pipeline. Architecture diagrams, technical
          write-ups, and source code for every project.
        </p>
      </div>

      <div className="eng-highlights">
        {highlights.map((h) => (
          <span className="pill" key={h}>{h}</span>
        ))}
      </div>

      {/* ── Completed Projects ──────────────────────────────── */}
      <div className="cards">
        {complete.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {/* ── Research & In-Progress ──────────────────────────── */}
      {inProgress.length > 0 && (
        <>
          <div style={{ marginTop: 52, marginBottom: 20 }}>
            <h2 className="section-title" style={{ marginBottom: 6 }}>
              Research &amp; In Progress
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 580, lineHeight: 1.6 }}>
              Active research projects — architecture and reward design complete,
              evaluation results pending. Shared transparently as work-in-progress.
            </p>
          </div>
          <div className="cards">
            {inProgress.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </>
      )}

      <footer className="foot" style={{ marginTop: 64 }}>
        <Link href="/">← Back to home</Link>
        <div className="foot-links">
          <a href="https://github.com/ammarkhan081" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ammarkhan-tech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
