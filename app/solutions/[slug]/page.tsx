import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService, person } from "@/lib/content";
import { ArrowLeft, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Not found" };
  return {
    title: `${service.title} — ${person.name}`,
    description: service.result,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <main
      className="shell detail"
      style={{ ["--accent2" as any]: service.accent }}
    >
      <Link href="/solutions" className="back">
        <ArrowLeft /> All solutions
      </Link>

      <p className="detail-cat" style={{ color: service.accent }}>
        Business Solution
      </p>
      <h1>{service.title}</h1>
      <p className="lead">{service.problem}</p>

      <section className="block">
        <div className="b-sub">How It Works</div>
        <h3>What I Build</h3>
        <p>{service.solution}</p>
      </section>

      <section className="block">
        <div className="b-sub">Outcome</div>
        <h3>What You Get</h3>
        <p>{service.result}</p>
      </section>

      {/* Technical approach — shown only for automation-only services */}
      {service.approach && (
        <section className="approach-block">
          <div className="b-sub">Under the Hood</div>
          <h3>How I Build This</h3>
          <p>{service.approach}</p>
        </section>
      )}

      {/* Secondary deep link — only when an engineering project page exists */}
      {service.deepLinkLabel && service.projectSlug && (
        <Link
          href={`/work/${service.projectSlug}`}
          className="back"
          style={{ marginTop: "24px", marginBottom: "4px" }}
        >
          {service.deepLinkLabel} →
        </Link>
      )}

      {/* ── Contact Band ───────────────────────────────────── */}
      <div className="contact-band">
        <div className="contact-band-text">
          <p>{service.ctaLabel}</p>
          <p>Free 30-minute discovery call — no commitment, no pitch. I&rsquo;ll tell you honestly if automation is the right answer for your situation.</p>
        </div>
        <Link href="/contact" className="contact-band-btn">
          Get in touch <ArrowRight />
        </Link>
      </div>

      <footer className="foot">
        <Link href="/solutions">← All solutions</Link>
        <div className="foot-links">
          <a
            href="https://github.com/ammarkhan081"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ammarkhan-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
