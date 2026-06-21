// Architecture diagrams for project detail pages.
// Pure inline SVG, themed via CSS variables so each diagram inherits the
// site's dark palette and the project's per-page --accent2.

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  accent?: boolean;
  dashed?: boolean;
};

function Box({ x, y, w, h, title, lines = [], accent, dashed }: BoxProps) {
  const total = 1 + lines.length;
  const startY = y + h / 2 - ((total - 1) * 13) / 2 + 4;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="var(--surface-2)"
        stroke={accent ? "var(--accent2)" : "var(--border-strong)"}
        strokeWidth={accent ? 1.6 : 1}
        strokeDasharray={dashed ? "5 5" : undefined}
      />
      <text
        x={x + w / 2}
        y={startY}
        textAnchor="middle"
        fontSize="12.5"
        fontWeight={700}
        fill="var(--text)"
      >
        {title}
      </text>
      {lines.map((l, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={startY + 14 * (i + 1)}
          textAnchor="middle"
          fontSize="10"
          fill="var(--text-muted)"
        >
          {l}
        </text>
      ))}
    </g>
  );
}

function Arrow({
  d,
  dashed,
  label,
  lx,
  ly,
}: {
  d: string;
  dashed?: boolean;
  label?: string;
  lx?: number;
  ly?: number;
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="var(--text-faint)"
        strokeWidth={1.4}
        strokeDasharray={dashed ? "4 4" : undefined}
        markerEnd="url(#arrow)"
      />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" fontSize="10" fill="var(--text-faint)">
          {label}
        </text>
      )}
    </g>
  );
}

function Container({
  x,
  y,
  w,
  h,
  label,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        fill="none"
        stroke="var(--border)"
        strokeWidth={1}
        strokeDasharray="5 5"
      />
      <text x={x + 14} y={y - 10} fontSize="10.5" fontWeight={700} fill="var(--text-faint)">
        {label}
      </text>
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--text-faint)" />
      </marker>
    </defs>
  );
}

// ---------------------------------------------------------------
// ASHIA — agentic AIOps loop
// ---------------------------------------------------------------
export function AshiaDiagram() {
  return (
    <svg viewBox="0 0 880 380" className="arch-diagram" role="img" aria-label="ASHIA agentic AIOps architecture">
      <Defs />
      <Box x={30} y={30} w={150} h={64} title="Monitor" lines={["Z-score anomaly", "detection on metrics"]} />
      <Box x={240} y={30} w={150} h={64} title="Root-Cause Agent" lines={["LLM analysis +", "Loki / Jaeger context"]} />
      <Box x={450} y={30} w={150} h={64} title="Remediation Agent" lines={["Risk-tiered fix", "proposals"]} />
      <Box x={660} y={30} w={150} h={64} title="Approval Gate" lines={["Human-in-the-loop", "for medium/high risk"]} accent />
      <Box x={660} y={190} w={150} h={64} title="Verify Agent" lines={["Re-check metrics", "after the fix"]} />
      <Box x={450} y={190} w={150} h={64} title="Learning Agent" lines={["Postmortem", "summary"]} />
      <Box x={240} y={190} w={150} h={64} title="ChromaDB Memory" lines={["Incident history", "+ past fixes"]} dashed />

      <Arrow d="M180 62 L240 62" />
      <Arrow d="M390 62 L450 62" />
      <Arrow d="M600 62 L660 62" />
      <Arrow d="M735 94 L735 190" />
      <Arrow d="M660 222 L600 222" />
      <Arrow d="M450 222 L390 222" />
      <Arrow d="M315 190 L315 94" dashed label="informs next root-cause pass" lx={420} ly={143} />
    </svg>
  );
}

// ---------------------------------------------------------------
// AI Evaluation & Reliability Platform
// ---------------------------------------------------------------
export function EvalPlatformDiagram() {
  return (
    <svg viewBox="0 0 880 450" className="arch-diagram" role="img" aria-label="AI evaluation and reliability platform architecture">
      <Defs />
      <Box x={30} y={30} w={150} h={60} title="Instrumented LLM Call" lines={["app / agent code"]} />
      <Box x={220} y={30} w={150} h={60} title="OpenTelemetry" lines={["collector"]} />
      <Box x={410} y={30} w={150} h={60} title="TimescaleDB" lines={["trace + span store"]} />

      <Container x={30} y={160} w={520} h={170} label="HALLUCINATION CASCADE — CHEAP → EXPENSIVE" />
      <Box x={50} y={210} w={150} h={64} title="Retrieval Overlap" lines={["fast heuristic", "check"]} />
      <Box x={230} y={210} w={150} h={64} title="SelfCheckGPT" lines={["sampling-based", "consistency"]} />
      <Box x={410} y={210} w={130} h={64} title="LLM-as-Judge" lines={["escalation", "only"]} accent />

      <Box x={590} y={160} w={170} h={170} title="RAGAS + Cost" lines={["faithfulness, relevancy,", "token cost — async,", "runs in parallel"]} />

      <Box x={280} y={370} w={240} h={56} title="Dashboard" lines={["traces · scores · cost · alerts"]} accent />

      <Arrow d="M180 60 L220 60" />
      <Arrow d="M370 60 L410 60" />
      <Arrow d="M485 90 L485 160" />
      <Arrow d="M560 60 L675 60 L675 160" />
      <Arrow d="M200 242 L230 242" />
      <Arrow d="M380 242 L410 242" />
      <Arrow d="M290 330 L290 352 L400 352 L400 370" />
      <Arrow d="M675 330 L675 352 L520 352 L520 370" />
    </svg>
  );
}

// ---------------------------------------------------------------
// YouTube Video Intelligence
// ---------------------------------------------------------------
export function YoutubeDiagram() {
  return (
    <svg viewBox="0 0 880 470" className="arch-diagram" role="img" aria-label="YouTube video intelligence architecture">
      <Defs />
      <Box x={30} y={30} w={140} h={60} title="YouTube Video" />
      <Box x={210} y={30} w={150} h={60} title="yt-dlp" lines={["transcript extraction"]} />
      <Box x={400} y={30} w={150} h={60} title="Gemini" lines={["translate + clean"]} />
      <Box x={590} y={30} w={170} h={60} title="Chunk + Embed" lines={["Gemini, 768-dim"]} />

      <Box x={350} y={170} w={200} h={70} title="Pinecone Index" lines={["cosine similarity"]} accent />

      <Box x={30} y={310} w={170} h={60} title="User Question" lines={["Chrome extension"]} />
      <Box x={240} y={310} w={150} h={60} title="Embed Query" lines={["Gemini"]} />
      <Box x={590} y={310} w={170} h={60} title="Groq Llama-3.3-70B" lines={["generate answer"]} />

      <Box x={350} y={410} w={240} h={48} title="SSE Stream" lines={["answer + timestamp citations"]} accent />

      <Arrow d="M170 60 L210 60" />
      <Arrow d="M360 60 L400 60" />
      <Arrow d="M550 60 L590 60" />
      <Arrow d="M675 90 L675 130 L550 130 L550 170" />
      <Arrow d="M200 340 L240 340" />
      <Arrow d="M315 310 L315 240 L450 240" label="MMR retrieve" lx={380} ly={230} />
      <Arrow d="M550 240 L550 280 L675 280 L675 310" />
      <Arrow d="M675 370 L675 390 L470 390 L470 410" />
    </svg>
  );
}

// ---------------------------------------------------------------
// AI Research Analyst — agentic RAG with CRAG + Self-RAG
// ---------------------------------------------------------------
export function ResearchAnalystDiagram() {
  return (
    <svg viewBox="0 0 940 460" className="arch-diagram" role="img" aria-label="AI research analyst agentic RAG architecture">
      <Defs />
      <Box x={20} y={190} w={120} h={60} title="User Query" />
      <Box x={180} y={190} w={130} h={60} title="Router" lines={["direct / retrieve / web"]} accent />
      <Box x={360} y={50} w={190} h={60} title="Hybrid Retrieval" lines={["BM25 + dense → RRF → rerank"]} />
      <Box x={360} y={330} w={190} h={60} title="Web Search" lines={["Tavily, via MCP"]} />
      <Box x={600} y={50} w={160} h={60} title="CRAG Grading" lines={["good → generate", "weak → rewrite/web"]} />
      <Box x={600} y={190} w={160} h={60} title="Generate" lines={["draft answer"]} />
      <Box x={600} y={330} w={160} h={60} title="Self-RAG Check" lines={["groundedness"]} />
      <Box x={800} y={190} w={120} h={60} title="Cited Answer" accent />
      <Container x={345} y={315} w={225} h={95} label="EXPOSED AS MCP TOOL" />

      <Arrow d="M140 220 L180 220" />
      <Arrow d="M310 200 L335 200 L335 80 L360 80" label="local docs" lx={335} ly={140} />
      <Arrow d="M310 240 L335 240 L335 360 L360 360" label="web" lx={335} ly={300} />
      <Arrow d="M310 220 L600 220" label="direct" lx={450} ly={210} />
      <Arrow d="M550 80 L600 80" />
      <Arrow d="M680 110 L680 190" label="good evidence" lx={760} ly={155} />
      <Arrow d="M615 110 L520 200 L520 280 L450 330" dashed label="weak → fallback" lx={460} ly={250} />
      <Arrow d="M550 360 L680 360 L680 250" />
      <Arrow d="M680 250 L680 330" />
      <Arrow d="M760 350 L850 350 L850 250" label="grounded" lx={870} ly={300} />
      <Arrow d="M600 345 L560 345 L560 220 L600 220" dashed label="regenerate if hallucinated" lx={555} ly={140} />
    </svg>
  );
}

// ---------------------------------------------------------------
// GRPO Reasoning Model — RL post-training loop
// ---------------------------------------------------------------
export function GrpoDiagram() {
  return (
    <svg viewBox="0 0 940 520" className="arch-diagram" role="img" aria-label="GRPO reinforcement learning post-training loop">
      <Defs />
      <Box x={20} y={30} w={140} h={60} title="GSM8K Prompt" lines={["math word problem"]} />
      <Box x={200} y={30} w={190} h={60} title="Policy Model" lines={["Qwen2.5-1.5B + QLoRA (4-bit)"]} accent />
      <Box x={430} y={30} w={190} h={60} title="Group of Completions" lines={["k sampled reasoning traces"]} />
      <Box x={720} y={30} w={190} h={60} title="Frozen Reference" lines={["KL anchor"]} dashed />

      <Container x={200} y={140} w={420} h={150} label="REWARD FUNCTIONS — SUMMED" />
      <Box x={220} y={185} w={130} h={60} title="Correctness" lines={["matches GSM8K", "ground truth"]} accent />
      <Box x={370} y={185} w={120} h={60} title="Format" lines={["reasoning structure", "followed"]} />
      <Box x={510} y={185} w={100} h={60} title="Numeric Validity" lines={["valid number", "extracted"]} />

      <Box x={200} y={330} w={230} h={60} title="Group-Relative Advantage" lines={["compare completions", "within the group"]} />
      <Box x={470} y={330} w={190} h={60} title="GRPO Update" lines={["policy gradient step"]} accent />

      <Box x={300} y={410} w={300} h={44} title="Held-Out Evaluation" lines={["pass@1, base vs trained"]} accent />

      <Arrow d="M160 60 L200 60" />
      <Arrow d="M390 60 L430 60" />
      <Arrow d="M525 90 L525 115 L410 115 L410 140" />
      <Arrow d="M410 290 L410 310 L315 310 L315 330" />
      <Arrow d="M430 360 L470 360" />
      <Arrow d="M815 90 L815 145 L470 145 L470 330" dashed label="KL penalty vs frozen reference" lx={640} ly={137} />
      <Arrow d="M565 390 L565 410" label="periodic eval" lx={680} ly={405} />
      <Arrow d="M565 390 L565 490 L10 490 L10 90 L295 90" dashed label="updated policy → next sampling round" lx={290} ly={503} />
    </svg>
  );
}
// ---------------------------------------------------------------
// Finance Sovereign Assistant — fully on-prem RAG + agent
// ---------------------------------------------------------------
export function FinanceSovereignDiagram() {
  return (
    <svg viewBox="0 0 700 460" className="arch-diagram" role="img" aria-label="Finance sovereign assistant on-prem architecture">
      <Defs />
      <Container x={15} y={25} w={580} h={390} label="100% ON-PREM — NO RUNTIME EXTERNAL API CALLS" />

      <Box x={40} y={55} w={160} h={56} title="User Query" />
      <Box x={40} y={145} w={160} h={56} title="LangGraph Planner" lines={["+ HITL gate"]} accent />
      <Box x={320} y={55} w={240} h={56} title="Local Hybrid Retrieval" lines={["BM25 + dense → RRF → rerank (FAISS)"]} />
      <Box x={320} y={145} w={240} h={56} title="Mistral-7B (QLoRA)" lines={["served via Ollama"]} />
      <Box x={40} y={250} w={520} h={70} title="Guardrails" lines={["PII redaction · scope check ·", "hallucination check · audit log"]} />
      <Box x={40} y={355} w={520} h={50} title="Financial Q&A Answer" lines={["+ not-financial-advice disclaimer"]} accent />

      <Arrow d="M120 111 L120 145" />
      <Arrow d="M200 165 L320 165" label="retrieve context" lx={260} ly={155} />
      <Arrow d="M200 185 L320 185" />
      <Arrow d="M440 111 L440 145" />
      <Arrow d="M440 201 L440 250" />
      <Arrow d="M300 285 L300 355" />
      <Arrow d="M40 285 L25 285 L25 173 L40 173" dashed label="HITL approval for medium/high-risk actions" lx={170} ly={250} />
    </svg>
  );
}
