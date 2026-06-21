import { ImageResponse } from "next/og";
import { person } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#050507",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top gradient accent bar */}
        <div
          style={{
            height: "5px",
            background:
              "linear-gradient(90deg, #8b5cf6 0%, #5b9dff 50%, #3dd7b8 100%)",
            flexShrink: 0,
          }}
        />

        {/* Main content row */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            backgroundImage:
              "radial-gradient(circle at 85% 15%, rgba(139,92,246,0.22), transparent 50%), radial-gradient(circle at 5% 90%, rgba(61,215,184,0.18), transparent 50%)",
          }}
        >
          {/* Left — primary content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "58px 72px",
              justifyContent: "space-between",
            }}
          >
            {/* Name + role block */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 13,
                  color: "#6c6d78",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginBottom: 30,
                }}
              >
                AI Engineer · Portfolio
              </div>

              <div
                style={{
                  fontSize: 70,
                  fontWeight: 700,
                  color: "#f3f4f6",
                  lineHeight: 1.08,
                  letterSpacing: -2,
                  marginBottom: 22,
                }}
              >
                {person.name}
              </div>

              <div
                style={{
                  fontSize: 26,
                  color: "#9a9ba6",
                  lineHeight: 1.35,
                  marginBottom: 18,
                }}
              >
                {person.role}
              </div>

              <div
                style={{
                  fontSize: 18,
                  color: "#6c6d78",
                  lineHeight: 1.55,
                  maxWidth: 520,
                }}
              >
                Production AI agents, RAG pipelines, and workflow automation —
                built with real observability, evaluation, and compliance
                thinking.
              </div>
            </div>

            {/* Bottom badge row */}
            <div style={{ display: "flex", gap: 12 }}>
              <div
                style={{
                  padding: "9px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(139,92,246,0.45)",
                  background: "rgba(139,92,246,0.13)",
                  color: "#b197fc",
                  fontSize: 14,
                }}
              >
                LangGraph · RAG · FastAPI
              </div>
              <div
                style={{
                  padding: "9px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(61,215,184,0.45)",
                  background: "rgba(61,215,184,0.13)",
                  color: "#3dd7b8",
                  fontSize: 14,
                }}
              >
                6 Production AI Systems
              </div>
              <div
                style={{
                  padding: "9px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#6c6d78",
                  fontSize: 14,
                }}
              >
                Available Oct 2026
              </div>
            </div>
          </div>

          {/* Right — tech stack panel */}
          <div
            style={{
              width: 248,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderLeft: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.018)",
              padding: "0 24px",
            }}
          >
            {[
              { label: "LangGraph", color: "rgba(139,92,246,0.35)" },
              { label: "OpenTelemetry", color: "rgba(61,215,184,0.35)" },
              { label: "FastAPI", color: "rgba(91,157,255,0.35)" },
              { label: "Docker", color: "rgba(91,157,255,0.25)" },
              { label: "RAGAS · HITL", color: "rgba(240,145,63,0.35)" },
              { label: "QLoRA · Mistral", color: "rgba(139,92,246,0.25)" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  width: "100%",
                  padding: "9px 16px",
                  borderRadius: 10,
                  border: `1px solid ${item.color}`,
                  background: "rgba(255,255,255,0.03)",
                  color: "#9a9ba6",
                  fontSize: 13,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 72px 0 72px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.012)",
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: 13, color: "#6c6d78" }}>
            {person.location}
          </div>
          <div style={{ fontSize: 13, color: "#6c6d78" }}>
            MorpheLabs Intern · UET Peshawar · CGPA 3.4 / 4.0
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
