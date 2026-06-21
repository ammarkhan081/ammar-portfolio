import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell">
      <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em" }}>
        404
      </h1>
      <p className="intro">This page doesn&apos;t exist.</p>
      <Link href="/" className="visit" style={{ marginTop: 24 }}>
        Back to home
      </Link>
    </main>
  );
}
