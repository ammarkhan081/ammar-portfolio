// =============================================================
//  PORTFOLIO CONTENT  —  edit everything from this single file
// =============================================================

import { MAILTO_HREF } from "./email";

export const person = {
  name: "Ammar Ayaz",
  role: "AI Engineer & Automation Specialist",
  tagline:
    "I build AI systems that are meant to run in production — not just in demos.",
  location: "Peshawar, Pakistan",
  // Hero availability pill. Color: "#3dd7b8"=available · "#f0913f"=limited · "#ef4d6a"=unavailable
  availabilityPill: "Open to AI Engineer roles · Available immediately",
  availabilityPillColor: "#3dd7b8",
  intro:
    "I design and build **AI agents**, **RAG pipelines**, and **workflow automations** that are production-ready from day one — with tracing, evaluation, and audit logging built in, not bolted on after the fact. For engineering teams: **LangGraph** orchestration, hybrid retrieval validated with **RAGAS**, FastAPI backends, and end-to-end **OpenTelemetry** observability. For businesses: automating the repetitive document work, customer support, and internal research that quietly drains your team's hours every week.",
  availability:
    "Open to full-time **AI Engineer** roles (remote or on-site) and select **automation projects** for businesses — agentic systems, RAG pipelines, and on-prem AI deployments.",
};

export const social = [
  {
    label: "Email",
    href: MAILTO_HREF,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ammarkhan-tech",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/ammarkhan081", icon: "github" },
  { label: "Resume", href: "/resume.pdf", icon: "resume" },
];

// ---------------------------------------------------------------
//  WHO I HELP — dual-audience split shown right under the hero
// ---------------------------------------------------------------

export const fork = [
  {
    eyebrow: "Hiring?",
    title: "Looking for an AI Engineer",
    body: "Production AI systems built and shipped from architecture to deployment — 6 agentic and RAG systems with real observability, evaluation, and containerized infrastructure.",
    cta: "See my engineering work",
    href: "/work",
    color: "#8b5cf6",
    icon: "building",
  },
  {
    eyebrow: "Running a Business?",
    title: "Want to automate your operations?",
    body: "If your team spends time searching documents, answering repeated questions, or monitoring things manually — that's the work I automate.",
    cta: "See what I can automate for you",
    href: "/solutions",
    color: "#3dd7b8",
    icon: "sparkles",
  },
];

// ---------------------------------------------------------------
//  DIFFERENTIATORS — what separates this work from the crowd
// ---------------------------------------------------------------

export const differentiators = [
  {
    icon: "shield",
    title: "Production by default",
    body: "Every system ships with OpenTelemetry tracing, RAGAS-based evaluation, and full audit logging from day one — not added after deployment because someone asked for it.",
    accent: "#8b5cf6",
  },
  {
    icon: "layers",
    title: "Retrieval that's actually tuned",
    body: "Not just embedding search. Every RAG pipeline uses BM25 + dense retrieval, Reciprocal Rank Fusion, and cross-encoder reranking — validated against baselines, not assumed to be good.",
    accent: "#3dd7b8",
  },
  {
    icon: "alert",
    title: "Systems that know when to stop",
    body: "Self-RAG groundedness checks, hallucination self-check layers, and human-in-the-loop gates for risky decisions. A system that admits it doesn't know is more reliable than one that always answers.",
    accent: "#5b9dff",
  },
  {
    icon: "server",
    title: "Full-stack, not just the model",
    body: "Backend API, vector database, containerized deployment, observability layer — I own the whole stack on every project, not just the LLM call in the middle.",
    accent: "#f0913f",
  },
];

// ---------------------------------------------------------------
//  CLIENT ENGAGEMENT PROCESS — 3-step flow for business clients
// ---------------------------------------------------------------

export const engagementProcess = [
  {
    step: "01",
    title: "Discovery Call",
    subtitle: "Free · 30 minutes",
    body: "We talk about your specific workflow, what's eating your team's time, and whether automation is actually the right answer. No commitment, no pitch — if it's not the right fit after we talk, I'll tell you directly. The call is always free.",
    accent: "#3dd7b8",
    calendlyUrl: "https://cal.com/ammar-khan-gaql3w/30min",
  },
  {
    step: "02",
    title: "Written Proposal",
    subtitle: "Fixed price · No surprises",
    body: "You receive a clear written scope: what gets built, timeline, deliverables, and a fixed price. Most automation projects run $1,500–$8,000 depending on complexity. No hourly billing, no hidden scope, and no obligation until you're satisfied with the plan.",
    accent: "#5b9dff",
  },
  {
    step: "03",
    title: "Build, Test & Hand Off",
    subtitle: "Delivered end-to-end · 30-day support",
    body: "I build, test, and deploy to your environment. You receive the working system, full source code, documentation, and a walkthrough. Every project includes a 30-day support window after handoff — if something breaks due to my work, I fix it at no charge.",
    accent: "#8b5cf6",
  },
];

// ---------------------------------------------------------------
//  BUSINESS SOLUTIONS — outcome-first translations of the projects
// ---------------------------------------------------------------

export const services = [
  // ── AI / RAG services (backed by existing engineering projects) ──
  {
    slug: "ai-customer-support",
    priceFrom: "$1,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "AI Customer Support",
    body: "Customers get instant, cited answers from your actual documentation — not generic responses. If the system isn't confident, it says so instead of guessing.",
    href: "/work/ai-research-analyst",
    accent: "#2fd6a6",
    icon: "message",
    project: "AI Research Analyst",
    projectSlug: "ai-research-analyst",
    problem:
      "Customers expect instant, accurate answers — but support teams spend hours digging through help docs, policies, and old tickets to re-answer questions that have already been answered before. Every delayed response is a frustrated customer.",
    solution:
      "I build AI assistants that read your existing documentation and give customers instant answers with sources attached — so they can trust the answer instead of guessing whether it's right. The system routes between your knowledge base and live web search when needed, and returns an honest 'I don't have enough information' rather than making something up.",
    result:
      "Customers get answered immediately, day or night, and your support team only steps in for the questions that genuinely need a human — not for the ones that have been answered a hundred times before.",
    ctaLabel: "Talk to me about your support volume",
    deepLinkLabel:
      "See the engineering breakdown of how the retrieval and citation system works",
    approach: undefined,
  },
  {
    slug: "ai-knowledge-assistants",
    priceFrom: "$1,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "AI Knowledge Assistants",
    body: "Your team asks a question and gets a direct, cited answer — pointing to exactly where it came from. No more folder searches or asking a colleague who might not remember.",
    href: "/work/ai-research-analyst",
    accent: "#2fd6a6",
    icon: "book",
    project: "AI Research Analyst",
    projectSlug: "ai-research-analyst",
    problem:
      "Your team's knowledge is scattered across policies, reports, and old documents — finding the right answer usually means opening several files, searching three folders, or asking a coworker who might give a different answer to the same question depending on the day.",
    solution:
      "I build an internal AI assistant that searches your company's own documents and returns a direct, cited answer — pointing back to exactly where it found it. The system grades its own evidence quality before responding, and tells your team when it doesn't have enough information rather than guessing.",
    result:
      "Hours of internal searching compress into a single typed question, answered with a source attached. New team members stop being a drain on experienced ones for information that already exists in your documents.",
    ctaLabel: "Tell me what your team struggles to find",
    deepLinkLabel: "See how the retrieval and self-checking system works",
    approach: undefined,
  },
  {
    slug: "workflow-automation",
    priceFrom: "$3,000", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "Workflow & Operations Automation",
    body: "Routine incidents get caught and resolved automatically. Risky changes escalate to a human before anything happens. No more late-night alerts for problems that could have been caught hours earlier.",
    href: "/work/ashia",
    accent: "#3dd7b8",
    icon: "zap",
    project: "ASHIA",
    projectSlug: "ashia",
    problem:
      "When something breaks in your systems, someone has to notice, figure out why, and fix it — usually at the worst possible time, and usually by hand. The same kind of incident happens again two weeks later because there was no time to write a proper postmortem.",
    solution:
      "I build monitoring systems that watch your infrastructure continuously, correlate multiple data sources to work out what's actually wrong, and either resolve routine issues automatically or escalate risky ones to a human for approval before anything changes. Every incident gets a postmortem written automatically so the system gets smarter over time.",
    result:
      "Routine problems get caught and resolved without anyone getting paged at 3am. Risky changes still go through a person before they happen. Your team spends less time on reactive firefighting and more time on work that moves things forward.",
    ctaLabel: "Tell me about your current monitoring setup",
    deepLinkLabel: "See the full incident-response architecture",
    approach: undefined,
  },
  {
    slug: "research-automation",
    priceFrom: "$1,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "Research Automation",
    body: "Ask a direct question about a long video or document and get an instant, sourced answer — pointing to the exact timestamp or section it came from.",
    href: "/work/youtube-video-intelligence",
    accent: "#ef4d6a",
    icon: "search",
    project: "YouTube Video Intelligence",
    projectSlug: "youtube-video-intelligence",
    problem:
      "Long videos and lengthy documents hide the one answer you actually need somewhere in the middle — finding it means watching the whole thing or reading every page, often more than once.",
    solution:
      "I build tools that let you ask a direct question about a video or document and get an instant answer pointing to the exact timestamp or section it came from. The system searches your content semantically, not just by keyword, so it finds answers even when you phrase the question differently from how they were written.",
    result:
      "What used to take an hour of watching or reading takes one typed question. Your team can search hours of recorded meetings, product demos, or training content in seconds.",
    ctaLabel: "Tell me what content your team spends time researching",
    deepLinkLabel: "See how the transcript and retrieval pipeline works",
    approach: undefined,
  },
  {
    slug: "secure-on-prem-ai",
    priceFrom: "$5,000", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "Secure, On-Prem AI",
    body: "AI that runs entirely on your own servers. No data sent to external APIs, no compliance risk, no vendor dependency. Your data stays exactly where it belongs.",
    href: "/work/finance-sovereign-assistant",
    accent: "#f0913f",
    icon: "lock",
    project: "Finance Sovereign Assistant",
    projectSlug: "finance-sovereign-assistant",
    problem:
      "Your team wants to use AI on sensitive financial or client data, but sending that data to an external API is a compliance risk you can't take — and telling your team they can't use AI while competitors do is a different kind of cost.",
    solution:
      "I build AI assistants that run entirely on your own servers — no external API calls at runtime, no data leaving your machines. The model is fine-tuned for your domain and served locally, with compliance guardrails aligned to your regulatory requirements — PII redaction, audit logging, and human oversight gates built in.",
    result:
      "Your team gets the efficiency of an AI assistant for sensitive data without a single byte leaving your infrastructure — and without the compliance headache that comes with cloud AI tools.",
    ctaLabel: "Tell me about your compliance requirements",
    deepLinkLabel:
      "See how the on-prem retrieval and fine-tuning pipeline works",
    approach: undefined,
  },
  {
    slug: "ai-quality-reliability",
    priceFrom: "$2,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "AI Quality & Reliability",
    body: "Every AI call in your product gets traced, evaluated for accuracy, and cost-tracked — automatically. Problems surface before your users see them.",
    href: "/work/ai-evaluation-reliability-platform",
    accent: "#8b5cf6",
    icon: "chart",
    project: "AI Evaluation & Reliability Platform",
    projectSlug: "ai-evaluation-reliability-platform",
    problem:
      "If you're already using AI in your product, you might not know when it's quietly giving wrong answers, when costs are drifting upward, or when a pipeline is failing silently — until a user complains or your bill arrives.",
    solution:
      "I build observability layers for AI systems that capture every LLM call as a trace, score it for faithfulness and accuracy using a 3-stage hallucination detection cascade, and flag cost spikes and failure patterns before they reach your users — all in one dashboard.",
    result:
      "Problems that used to surface as user complaints get caught automatically, with a full trace showing exactly what went wrong, why it went wrong, and what it cost.",
    ctaLabel: "Tell me what AI features you're already running",
    deepLinkLabel: "See the tracing and hallucination-detection architecture",
    approach: undefined,
  },

  // ── Automation projects ──────────────────────────────────────
  {
    slug: "whatsapp-ai-agent",
    priceFrom: "$1,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "WhatsApp AI Business Agent",
    body: "An AI agent that lives in your WhatsApp business account — handles customer questions day or night, in text or voice, without adding headcount.",
    href: "/solutions/whatsapp-ai-agent",
    accent: "#25d366",
    icon: "message",
    project: "Automation",
    projectSlug: null,
    problem:
      "Customers message your WhatsApp number expecting quick responses — but your team can't be on WhatsApp around the clock, and the same questions come in repeatedly, pulling time away from work that actually needs a human.",
    solution:
      "I build AI agents that live inside your WhatsApp Business account, understand customer questions in text or voice, and respond accurately from your product documentation and FAQs. The agent remembers conversation history, handles natural follow-up questions, and hands off to a human when a request genuinely needs one — escalations, bookings, complaints — with the full conversation context attached.",
    result:
      "Your WhatsApp line answers common questions automatically, any hour of the day, without your team needing to be available around the clock.",
    ctaLabel: "Tell me about your WhatsApp support volume",
    deepLinkLabel: null,
    approach:
      "Built on the WhatsApp Business API with a LangGraph conversation agent trained on your product documentation and FAQs. Handles follow-up questions naturally, retains conversation context across a session, and routes genuinely complex cases — bookings, complaints, or edge cases outside its knowledge — to a human agent with full conversation history attached. Deployed on your own server or cloud infrastructure with a webhook handler and an admin view of conversation logs.",
  },
  {
    slug: "ecommerce-ai-widget",
    priceFrom: "$1,800", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "AI Sales & Support Widget",
    body: "An AI chat assistant for your online store that helps shoppers find what they need, answers product questions, and reduces abandoned purchases.",
    href: "/solutions/ecommerce-ai-widget",
    accent: "#ef4d6a",
    icon: "zap",
    project: "Automation",
    projectSlug: null,
    problem:
      "Shoppers who can't find a product or have a quick question about sizing, stock, or shipping usually leave instead of waiting for a reply — and every unanswered question is a potential lost sale that never shows up in your analytics.",
    solution:
      "I build AI chat widgets that sit directly on your store, help shoppers find the right product, answer questions about availability, sizing, shipping, and returns, and guide them toward completing their purchase — all connected to your live product catalog so the answers are always accurate.",
    result:
      "Fewer shoppers leave unanswered, and the ones who get an immediate, accurate answer are more likely to complete their purchase.",
    ctaLabel: "Tell me about your store and your shoppers' most common questions",
    deepLinkLabel: null,
    approach:
      "A lightweight JavaScript snippet embedded on your store that connects to a FastAPI backend running a RAG pipeline over your product catalog, policies, and FAQs. Answers are pulled from your live product data — pricing, stock status, variants — so they're always current. Compatible with Shopify, WooCommerce, or any storefront with a product API. Setup requires embedding one script tag and pointing the backend at your product data source.",
  },
  {
    slug: "lead-generation-automation",
    priceFrom: "$1,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "Business Lead Generation",
    body: "Automated pipelines that pull qualified prospects from multiple sources and deliver them ready to contact — no manual searching or spreadsheet copying.",
    href: "/solutions/lead-generation-automation",
    accent: "#5b9dff",
    icon: "search",
    project: "Automation",
    projectSlug: null,
    problem:
      "Sales teams spend hours manually hunting for prospects across different platforms, copying contact information into spreadsheets, and trying to figure out which leads are actually worth pursuing — time that should be spent on conversations, not research.",
    solution:
      "I build automated pipelines that pull potential leads from your specified sources — LinkedIn, Apollo, industry directories, or custom targets — run LLM-based qualification filtering against your ideal customer profile, enrich leads with contact details and company context, and deliver a clean prioritized list to your CRM or inbox on a schedule.",
    result:
      "Your sales team spends their time on conversations with qualified prospects — not on hours of manual searching and data entry to find them.",
    ctaLabel: "Tell me about your target customer and current prospecting process",
    deepLinkLabel: null,
    approach:
      "Automated pipelines that pull prospects from your specified sources, filter by your ideal customer profile using LLM-based qualification, enrich leads with contact and company details, and deliver a clean prioritized output to your CRM or as a CSV — on a daily, weekly, or on-demand schedule. No manual searching, no spreadsheet copying, no duplicate leads.",
  },
  {
    slug: "video-content-automation",
    priceFrom: "$1,800", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "Video Content Automation",
    body: "Automated pipelines that extract the best moments from long recordings, generate titles and descriptions, and publish them — without a video editor touching them.",
    href: "/solutions/video-content-automation",
    accent: "#f0913f",
    icon: "chart",
    project: "Automation",
    projectSlug: null,
    problem:
      "Long recordings — webinars, interviews, product demos, podcasts — contain valuable moments worth sharing, but editing them into short clips and writing publish-ready titles and descriptions takes hours of work per video that most teams simply don't have.",
    solution:
      "I build automated pipelines that process your recordings, identify the strongest moments based on what's being said, cut clean highlight clips with precise timestamps, generate titles and descriptions tuned for your platform, and publish to YouTube or your channel of choice — without any manual editing.",
    result:
      "Every long recording automatically becomes a set of published highlights, without adding any editing work to your team's schedule.",
    ctaLabel: "Tell me about your current video content and publishing workflow",
    deepLinkLabel: null,
    approach:
      "An automated pipeline that ingests your recordings via upload or direct link, uses transcript extraction and LLM analysis to identify the strongest moments, cuts clean clips using precise timestamps, generates platform-ready titles and descriptions, and publishes on your schedule — weekly batch, on-demand, or triggered automatically by new uploads. Processing runs without any manual editing step.",
  },
  {
    slug: "competitive-intelligence",
    priceFrom: "$1,500", // starting estimate within the $1,500–$8,000 range stated in engagementProcess — adjust to your real cost basis and scope assumptions
    title: "Competitor Monitoring & Intelligence",
    body: "Automated tracking of what competitors are publishing and how it's performing — delivered as a clear summary, not a manual research project.",
    href: "/solutions/competitive-intelligence",
    accent: "#8b5cf6",
    icon: "book",
    project: "Automation",
    projectSlug: null,
    problem:
      "Keeping track of competitors' content, messaging, and positioning takes hours of manual checking that most teams never actually do consistently — so important shifts get missed, or someone spends their afternoon scrolling instead of building.",
    solution:
      "I build monitoring systems that collect competitor activity across the platforms that matter to your business, run LLM summarization to surface what's gaining traction and what's not, and deliver a structured digest to your inbox or Slack on a schedule you set.",
    result:
      "Your team sees what's working in your market in minutes, not hours — and can respond to shifts before they become trends everyone else has already noticed.",
    ctaLabel: "Tell me which competitors and platforms you want to monitor",
    deepLinkLabel: null,
    approach:
      "A monitoring system that crawls competitor websites, blog feeds, social accounts, and job boards on your specified schedule — runs LLM summarization to surface what's getting traction and what's not — and delivers a structured digest to your inbox or Slack. You specify the competitors and platforms; the system handles the daily watching so your team doesn't have to.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}



// ---------------------------------------------------------------
//  ENGINEERING HIGHLIGHTS — quick-scan strip above the project grid
// ---------------------------------------------------------------

export const highlights = [
  "6 End-to-End AI Systems Built",
  "AI Engineer Intern @ MorpheLabs · Jan 2026 – Present",
  "B.S. Computer Science — UET Peshawar · CGPA 3.4 / 4.0",
];

export const skills: { group: string; color: string; items: string[] }[] = [
  {
    group: "AI & Agent Engineering",
    color: "#8b5cf6",
    items: [
      "LangGraph",
      "LangChain",
      "RAG",
      "OpenAI API",
      "GPT-4o",
      "Embeddings & Semantic Search",
      "Function Calling",
      "Prompt Engineering & Evaluation",
      "Retrieval Tuning",
      "RL Post-Training (GRPO)",
    ],
  },
  {
    group: "Backend",
    color: "#5b9dff",
    items: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "REST & WebSockets",
      "ChromaDB",
      "FAISS",
      "Pinecone",
    ],
  },
  {
    group: "Production & Reliability Tooling",
    color: "#3dd7b8",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "OpenTelemetry",
      "Prometheus",
      "Loki",
      "Jaeger",
      "Grafana",
    ],
  },
  {
    group: "ML / Data",
    color: "#f0913f",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "TRL / Unsloth",
      "scikit-learn",
      "pandas / NumPy",
      "NLP",
      "Deep Learning",
    ],
  },
  {
    group: "Frontend",
    color: "#ef4d6a",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Streamlit",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer Intern — Agentic Systems & Automation",
    org: "MorpheLabs",
    period: "Jan 2026 – Present",
    location: "Remote",
    points: [
      "Design and deploy AI automation workflows with GPT-4o, LangGraph and FastAPI — orchestrating multi-step operational processes with tool use, function calling and async execution across enterprise business pipelines.",
      "Integrate AI agents with PostgreSQL, Redis and external APIs; instrument workflows end-to-end with OpenTelemetry, capturing every step from request to tool call for debugging and reliability monitoring in production.",
      "Improve agent reliability through systematic prompt evaluation, retrieval tuning and orchestration redesign — identifying and resolving failure modes in multi-step automation pipelines before they reach production.",
    ],
  },
  {
    role: "AI Engineering Research & Development",
    org: "Personal Projects",
    period: "May 2025 – Dec 2025",
    location: "Remote",
    points: [
      "Built 6 end-to-end AI systems from scratch — spanning agentic orchestration, production RAG, LLM fine-tuning, on-prem deployment, and RL post-training — each with a real FastAPI backend, containerized infrastructure, and an evaluation pipeline. These were not demo notebooks; they were built as if they would run in production.",
      "Applied production engineering discipline across every build: OpenTelemetry distributed tracing, RAGAS-based retrieval evaluation (faithfulness, relevancy, context precision), human-in-the-loop approval gates, PII redaction guardrails, and JSONL audit logging — treating personal projects as the kind of systems a real team would have to maintain.",
      "Focused deliberately on the hardest problems in applied AI: hybrid retrieval tuning (BM25 + dense + RRF + cross-encoder reranking validated against single-method baselines), hallucination self-checking with a 3-stage cascade, agent reliability under multi-step orchestration, and LLM systems designed to fail gracefully — not just produce output.",
    ],
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "UET Peshawar",
  period: "Oct 2022 – Oct 2026",
  detail: "CGPA 3.4 / 4.0 · Focus: Artificial Intelligence",
};

export const certifications = [
  "DeepLearning.AI — LangChain for LLM Development",
  "DeepLearning.AI — ChatGPT API Systems",
  "DeepLearning.AI — RAG for Production",
  "Coursera — Machine Learning Specialization",
];

// ---------------------------------------------------------------
//  PROJECTS
// ---------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  gradient: string;
  accent: string;
  stack: string[];
  link?: { label: string; href: string };
  videoUrl?: string;          // empty string = placeholder shown; omit to hide video section
  buildTime?: string;         // e.g. "~3 weeks" — empty string hides the badge; fill in with the real duration
  inProgress?: boolean;       // true = show "In Progress" badge on card
  screenshots?: { src: string; caption: string }[];  // LinkedIn-style image gallery
  postmortemUrl?: string;     // downloadable PDF postmortem
  overview: string;
  sections: { title: string; subtitle: string; body: string }[];
  features: string[];
  takeaway: string;
};

export const projects: Project[] = [
  {
    slug: "ashia",
    title: "ASHIA",
    category: "Agentic AIOps",
    summary:
      "A 6-agent closed-loop platform that detects anomalies across 12 live metrics in under 60 seconds, auto-resolves low-risk incidents without paging, and escalates risky changes for human sign-off — across 11 containerised services.",
    gradient:
      "linear-gradient(135deg, #0b1f3a 0%, #123a52 35%, #1f8a70 55%, #0d2a3f 80%)",
    accent: "#3dd7b8",
    stack: ["LangGraph", "FastAPI", "React", "Docker", "PostgreSQL", "Redis", "Prometheus", "Loki", "Jaeger", "ChromaDB", "Groq / OpenAI"],
    link: { label: "View on GitHub", href: "https://github.com/ammarkhan081/Agentic-AIOps-Platform-Self-Healing-Infrastructure-Agent" },
    buildTime: "~4 weeks",
    screenshots: [
      {
        src: "/screenshots/ashia/ashia-01-command-surface.jpg",
        caption: "Autonomous AIOps Command Surface — live control plane showing incident queue, pipeline status, and real-time operational metrics across all services",
      },
      {
        src: "/screenshots/ashia/ashia-02-fault-lab.jpg",
        caption: "Fault Laboratory — inject memory leaks, CPU spikes, and network faults to observe the full detection-to-remediation pipeline in real time",
      },
      {
        src: "/screenshots/ashia/ashia-03-incident-archive.jpg",
        caption: "Incident Archive — persisted incident records with severity classification, status tracking, retry counts, and autonomous recovery times",
      },
      {
        src: "/screenshots/ashia/ashia-04-incident-detail.jpg",
        caption: "Incident b4657e51 — full RCA breakdown with ranked hypotheses, confidence scores, execution timeline, and autonomous fix options with estimated recovery",
      },
    ],
    postmortemUrl: "/downloads/ashia-incident-postmortem.pdf",
    overview:
      "ASHIA is a closed-loop AIOps platform that autonomously detects, diagnoses, and remediates infrastructure incidents in real time across 11 containerized services. It combines Z-score anomaly detection over 12 live Prometheus metrics with LLM-driven root-cause analysis and a risk-tiered remediation engine — low-risk fixes auto-execute, medium and high-risk changes require human sign-off via a dashboard or Slack. The key design decision was not automating everything: the human-in-the-loop gate is where this system earns its place in production rather than a demo.",
    sections: [
      {
        title: "A six-agent pipeline from detection to resolution",
        subtitle: "Monitor → Root-Cause → Remediate → Approve → Verify → Learn",
        body: "A LangGraph state machine runs six specialized agents in sequence. The Monitor agent performs Z-score anomaly detection over 12 Prometheus metrics every 30 seconds. The Root-Cause agent has an LLM correlate Loki logs, Jaeger traces, and ChromaDB incident memory into ranked hypotheses with confidence scores. The Remediation agent proposes risk-ranked fix options — low-risk actions auto-execute, medium and high-risk ones route to the Human-in-the-Loop supervisor for approval via dashboard or Slack notification.",
      },
      {
        title: "Verify first, then learn for next time",
        subtitle: "Post-fix verification + continual-learning incident memory",
        body: "After a fix is applied, the Verifier agent waits and re-checks the affected metrics to confirm recovery before closing the incident. The Learning agent then writes a structured postmortem into ChromaDB so future incidents of the same type get diagnosed faster — the system improves with each incident rather than starting from zero every time. Full audit trail, JWT auth, and RBAC are implemented throughout.",
      },
    ],
    features: [
      "Anomaly detection: Z-score across 12 live Prometheus metrics on 30-second polling cycles — flags incidents within 2 intervals (≤60s) on simulated spike scenarios",
      "Root-cause analysis: LLM correlates Loki logs + Jaeger traces + ChromaDB incident memory into ranked hypotheses with confidence scores",
      "Risk-tiered remediation: low-risk fixes auto-execute in under 3 minutes end-to-end; medium/high-risk changes hold for human approval before anything changes",
      "Verifier loop: re-checks affected metrics post-fix before closing the incident — no false 'resolved' signals",
      "Continual learning: structured postmortem written to ChromaDB after each incident — future occurrences diagnosed faster",
      "Full audit trail · JWT authentication · RBAC — built for teams that need to explain every automated action",
    ],
    takeaway:
      "Reliable autonomy comes from structure, not a bigger model. Clear agent roles, explicit risk tiers, a verification step, and a postmortem loop matter more than raw LLM capability. The hardest engineering decision was what not to automate — and that's exactly where the HITL gate earns its place. Building 11 services to talk to each other cleanly was the infrastructure work that made everything else possible.",
  },
  {
    slug: "ai-evaluation-reliability-platform",
    title: "AI Evaluation & Reliability Platform",
    category: "LLM Observability",
    summary:
      "One place to trace, evaluate, and debug LLM calls — 3-stage hallucination cascade handles the majority of evaluations before invoking an LLM judge, keeping evaluation cost minimal at scale.",
    gradient:
      "linear-gradient(135deg, #14082b 0%, #2b1466 40%, #5b2bd6 60%, #1a0c3a 85%)",
    accent: "#8b5cf6",
    stack: ["FastAPI", "TimescaleDB", "OpenTelemetry", "RAGAS", "Celery", "Redis", "sentence-transformers", "Next.js", "React Flow", "Docker", "Kubernetes"],
    link: { label: "View on GitHub", href: "https://github.com/ammarkhan081/ai-evaluation-reliability-platform" },
    videoUrl: "https://www.youtube.com/embed/39-UfSzR8jY",
    buildTime: "~3 weeks",
    overview:
      "An open LLM observability platform that unifies tracing, evaluation, hallucination detection, and cost intelligence in one pipeline — closing the gap left by tools like LangSmith, Arize, and Helicone, which each solve one slice of the problem. Every LLM call becomes a traceable, scored, and costed span. For teams shipping AI features into production, this is the observability layer that turns silent failures and cost spikes into something you can actually debug.",
    sections: [
      {
        title: "Every LLM call becomes a traceable span",
        subtitle: "OpenTelemetry → TimescaleDB → async evaluation",
        body: "Each LLM call is captured as an OpenTelemetry span over OTLP and stored in TimescaleDB through a Collector. A Celery async pipeline then runs evaluation in the background: RAGAS scoring for faithfulness, relevance, precision and recall; DAG-based detection of agent loops and failure patterns; and full cost intelligence per call and per pipeline. Nothing blocks the user-facing request path.",
      },
      {
        title: "A 3-stage hallucination detection cascade",
        subtitle: "Cheap heuristics first — LLM judge only when necessary",
        body: "Hallucination detection runs as a cascade: retrieval overlap check first, then SelfCheckGPT, then an LLM judge — so most cases resolve with cheap heuristics before invoking an expensive model call. This keeps evaluation cost sane at scale while maintaining accuracy where it matters. A Next.js dashboard surfaces traces, evaluation scores, cost breakdowns, and failure patterns. Deployed with Docker and Kubernetes; load-tested under concurrent request volumes.",
      },
    ],
    features: [
      "Every LLM call captured as an OpenTelemetry span into TimescaleDB — traceable, scored, and costed at the individual call level",
      "3-stage hallucination cascade: retrieval overlap check → SelfCheckGPT → LLM judge — heuristic stage handles the majority of evaluations, LLM judge invoked only when needed",
      "RAGAS scoring (faithfulness, relevance, precision, recall) runs asynchronously via Celery — zero impact on production request latency",
      "Cost intelligence: per-call and per-pipeline cost tracking — cost spikes surface before the monthly bill arrives",
      "DAG-based detection of agent loops and silent failure patterns — catches what request-level logging misses",
      "Next.js dashboard · Docker + Kubernetes · load-tested under concurrent request volumes",
    ],
    takeaway:
      "Observability for LLMs only works if evaluation is cheap by default. Cascading from heuristics up to an LLM judge keeps cost sane at scale — and treating every LLM call as a first-class traced span made scoring, cost tracking, and debugging fall out naturally from the same data. The hardest part was the cascade design: getting the threshold right between 'fast and cheap' and 'accurate but expensive'.",
  },
  {
    slug: "ai-research-analyst",
    title: "AI Research Analyst",
    category: "Agentic RAG",
    summary:
      "Cited, RAGAS-evaluated answers from private document corpora — routes ~10–15% of queries to an honest 'insufficient evidence' response rather than generating from low-quality context.",
    gradient:
      "linear-gradient(135deg, #06231f 0%, #0c4038 38%, #1f9c7e 58%, #082b26 85%)",
    accent: "#2fd6a6",
    stack: ["LangGraph", "langchain-core", "BAAI/bge-base-en", "rank_bm25", "bge-reranker-v2-m3", "ChromaDB", "Tavily", "fastmcp (MCP)", "FastAPI", "Streamlit", "RAGAS", "Docker"],
    link: { label: "View on GitHub", href: "https://github.com/ammarkhan081/ai-research-analyst" },
    videoUrl: "https://www.youtube.com/embed/33JGi2ozYIM",
    buildTime: "~2 weeks",
    overview:
      "An agentic RAG assistant that answers complex questions over a private document corpus. It routes between local hybrid retrieval and live web search, grades its own evidence quality before generating, self-checks its own answers for groundedness after generating, and cites every claim. If retrieved evidence falls below the relevance threshold, it returns an honest 'insufficient evidence' response rather than guessing. Domain-configurable for medical, legal, or finance use.",
    sections: [
      {
        title: "An 8-node reasoning graph",
        subtitle: "Route → Retrieve → Grade → Rewrite → Web-Search → Generate → Self-Check → Respond",
        body: "A LangGraph state machine with 8 nodes first routes a query: answer directly from parametric knowledge, retrieve locally, or search the web. Local retrieval is hybrid — BM25 plus dense vectors fused with Reciprocal Rank Fusion, then re-ranked by a cross-encoder. A Corrective-RAG grading step scores each retrieved document for relevance; documents below threshold trigger query rewriting and web-search fallback rather than being fed to the generator with low-quality context.",
      },
      {
        title: "Self-RAG and MCP tool exposure",
        subtitle: "Groundedness check + reusable tool interface",
        body: "After generation, a Self-RAG step checks whether the answer is actually grounded in the retrieved context and triggers regeneration if it isn't. The system's tools — web search, a safe calculator — are exposed through an MCP server so other clients and agents can call them directly. Every run produces a redacted JSON trace for auditability.",
      },
    ],
    features: [
      "8-node CRAG state machine: route → retrieve → grade → rewrite → web-search → generate → self-check → respond",
      "Hybrid retrieval: BM25 + dense BGE embeddings fused with RRF → cross-encoder reranking — measurably outperforms dense-only baseline on domain-specific recall",
      "Corrective-RAG grading: ~10–15% of queries trigger query rewriting + web-search fallback rather than generating from weak context",
      "Self-RAG groundedness check: regenerates if answer is not grounded in retrieved context — zero hallucination pressure at the response boundary",
      "MCP server: web search + safe calculator tools exposed for any agent or client to call — not just this app",
      "RAGAS-evaluated per run · redacted JSON audit traces persisted · domain-configurable for medical, legal, or finance",
    ],
    takeaway:
      "Citations and self-checking are what make a RAG assistant trustworthy, not just accurate. Building the grading and Self-RAG loops forced the system to admit when it didn't know — which is harder to implement than it sounds because you have to decide what 'good enough evidence' means before you generate. Exposing the tools over MCP turned a single-purpose app into reusable infrastructure that other agents can call.",
  },
  {
    slug: "finance-sovereign-assistant",
    title: "Finance Sovereign Assistant",
    category: "On-Prem RAG",
    summary:
      "Finance Q&A that runs 100% on-premise — zero cloud calls at runtime, QLoRA fine-tuned Mistral 7B with measurably improved domain faithfulness vs base model, and EU AI Act compliance guardrails mapped to specific regulatory requirements.",
    gradient:
      "linear-gradient(135deg, #2a0f06 0%, #5e2a0c 35%, #d97a2b 58%, #2a1206 85%)",
    accent: "#f0913f",
    stack: ["Ollama + Mistral 7B (QLoRA)", "BAAI/bge-base-en", "rank-bm25", "RRF + bge-reranker", "FAISS", "LangGraph", "FastAPI", "Streamlit", "RAGAS", "Docker"],
    link: { label: "View on GitHub", href: "https://github.com/ammarkhan081/Finance-Sovereign-Assistant" },
    videoUrl: "https://www.youtube.com/embed/sSLKSseYnO8",
    buildTime: "~3 weeks",
    overview:
      "A privacy-first AI assistant for finance that runs entirely on the local machine — no external API calls at runtime, so confidential data never leaves the host. Built around a QLoRA fine-tuned Mistral 7B served via Ollama, with a 4-stage local retrieval pipeline that outperforms single-method baselines on financial Q&A. Compliance guardrails are mapped explicitly to EU AI Act requirements. For finance and legal teams that can't send sensitive documents to cloud AI tools, this is how you use AI without compliance risk.",
    sections: [
      {
        title: "Everything local — model, retrieval, and inference",
        subtitle: "4-stage hybrid retrieval + fine-tuned Mistral 7B served on-device",
        body: "A local hybrid retrieval pipeline (BM25 → dense BGE embeddings → Reciprocal Rank Fusion → cross-encoder reranking, all on-device) feeds a locally served, QLoRA fine-tuned Mistral 7B. The fine-tune shapes domain behavior — how the model reasons about financial data — not factual knowledge, which always comes from retrieval. A LangGraph agent layer handles multi-step tasks with a planner, HITL approval gate, safe AST-based calculator tool, and retrieval router.",
      },
      {
        title: "Compliance built into the architecture",
        subtitle: "Guardrails mapped to EU AI Act requirements",
        body: "Guardrails include PII redaction, a topic scope check, a not-financial-advice disclaimer, a hallucination self-check, and a JSONL audit log — each mapped to specific EU AI Act requirements around logging, transparency, and human oversight. An evaluation harness compares base Mistral 7B against the fine-tuned version across a held-out set of financial Q&A pairs.",
      },
    ],
    features: [
      "100% on-prem: zero external API calls at runtime — confidential data never leaves the host machine",
      "QLoRA fine-tuned Mistral 7B: domain-specific faithfulness improvement on held-out financial Q&A vs base Mistral 7B — evaluation harness included for independent verification",
      "4-stage local retrieval: BM25 → dense BGE embeddings → RRF → cross-encoder reranking — context precision improvement over BM25-only baseline measured in evaluation harness",
      "LangGraph agent: planner node, sufficiency-checking router, HITL approval gate, safe AST-based calculator — all local, all auditable",
      "Guardrails mapped explicitly to EU AI Act: PII redaction, topic scope check, hallucination self-check, JSONL audit log — each mapped to specific regulatory requirements",
      "Evaluation harness: automated comparison of base Mistral 7B vs fine-tuned version across held-out financial Q&A pairs",
    ],
    takeaway:
      "The honest claim matters: this is competitive with a cloud model on a narrow financial domain at a fraction of the cost and with zero data leaving the machine — not a GPT-4 killer on general tasks. Fine-tuning for behavior while keeping facts in retrieval is what keeps it both private and accurate. Compliance isn't a checkbox — every guardrail maps to a specific regulatory requirement so you can point to the paper trail.",
  },
  {
    slug: "youtube-video-intelligence",
    title: "YouTube Video Intelligence",
    category: "RAG Chrome Extension",
    summary:
      "Streamed, timestamp-cited answers about any YouTube video — answers begin arriving under 1 second via Groq + SSE, across 12+ languages, without leaving the watch page.",
    gradient:
      "linear-gradient(135deg, #2a060b 0%, #5c0f1c 35%, #c2304a 58%, #1f0810 85%)",
    accent: "#ef4d6a",
    stack: ["FastAPI", "Chrome Extension (MV3)", "Pinecone", "Groq (Llama-3.3-70B)", "Google Gemini", "yt-dlp", "RAGAS", "LangSmith"],
    link: { label: "View on GitHub", href: "https://github.com/ammarkhan081/yt-video-qa-enhanced" },
    videoUrl: "https://www.youtube.com/embed/gjV_0rnmIgQ",
    buildTime: "~2 weeks",
    overview:
      "A production RAG system for real-time Q&A over YouTube videos, delivered as a FastAPI backend paired with a Manifest V3 Chrome extension. Ask a question while watching and get a streamed answer with timestamp citations — across 12+ languages. For anyone drowning in long video content — recorded meetings, webinars, product demos, research interviews — this turns hours of footage into instant, cited answers at the moment you need them.",
    sections: [
      {
        title: "From video to searchable vector store",
        subtitle: "yt-dlp → Gemini translation → Pinecone embedding",
        body: "yt-dlp extracts the transcript, Gemini translates it when needed, and the text is semantically chunked and embedded into 768-dim Gemini vectors stored in Pinecone with cosine similarity. Chunks retain timestamp metadata so every retrieved passage can be traced back to a precise moment in the video.",
      },
      {
        title: "Streamed answers with timestamp citations",
        subtitle: "MMR retrieval + Groq Llama-3.3-70B over Server-Sent Events",
        body: "A query is embedded and searched in Pinecone using MMR for diverse, non-redundant retrieval. Groq's Llama-3.3-70B then generates a token-streamed answer over Server-Sent Events with timestamp citations embedded inline — the answer starts arriving in under a second. Retrieval quality is instrumented end-to-end with RAGAS scoring and LangSmith tracing.",
      },
    ],
    features: [
      "Manifest V3 Chrome extension + FastAPI backend — live in browser, no tab switching",
      "12+ languages: yt-dlp transcript extraction + Gemini translation pipeline handles multilingual content",
      "768-dim Gemini embeddings in Pinecone with cosine similarity — timestamp metadata preserved on every chunk",
      "MMR retrieval: non-redundant diverse context selection — eliminates the duplicate-chunk problem common in naive cosine search on long transcripts",
      "Answers stream in under 1 second via Groq Llama-3.3-70B over Server-Sent Events with inline timestamp citations",
      "RAGAS-evaluated retrieval quality + LangSmith tracing instrumented end-to-end",
    ],
    takeaway:
      "Streaming and citations are what make a RAG product feel real to a user — the answer needs to arrive fast and point back to the exact moment in the video. Wiring RAGAS and LangSmith in from the start meant retrieval quality was measurable at every change, not guessed. MMR retrieval turned out to matter more than expected: without it, long videos would return the same passage from multiple overlapping chunks.",
  },
  {
    slug: "grpo-reasoning-model",
    title: "GRPO Reasoning Model",
    category: "RL Post-Training",
    summary:
      "Applying reinforcement learning to teach a small open model to reason step-by-step — the same method behind DeepSeek-R1, running on a free Colab T4.",
    gradient:
      "linear-gradient(135deg, #06122e 0%, #0f2a63 36%, #2f7df0 56%, #0a1c44 84%)",
    accent: "#5b9dff",
    stack: ["GRPO (TRL GRPOTrainer)", "Unsloth", "Qwen2.5-1.5B-Instruct", "QLoRA (4-bit)", "GSM8K", "transformers", "peft / datasets", "vLLM", "GGUF → Ollama", "Colab T4"],
    inProgress: true,
    videoUrl: "",
    overview:
      "Status: in progress — training pipeline and reward design complete, base-vs-trained evaluation pending. A reinforcement learning project that trains a small open model (Qwen2.5-1.5B) to produce step-by-step reasoning and correct answers on a verifiable task, using GRPO — the algorithm behind DeepSeek-R1. Instead of supervised fine-tuning, which teaches a model what to say, GRPO teaches it how to reason by rewarding outputs that follow a reasoning format and reach a checkable answer.",
    sections: [
      {
        title: "Reinforcement learning, not imitation",
        subtitle: "Why GRPO instead of supervised fine-tuning",
        body: "Supervised fine-tuning shows the model ideal answers to copy; GRPO lets the model generate several attempts, scores each with a reward function, and nudges it toward higher-scoring behavior — so it discovers good reasoning rather than imitating it. GRPO specifically drops the learned critic that classic PPO needs: it compares a group of sampled completions against each other (group-relative advantage) and keeps only the policy plus a frozen reference, anchored by a KL penalty. That makes it feasible on a single free Colab T4.",
      },
      {
        title: "Reward design is the real engineering",
        subtitle: "Multiple reward signals with correctness dominating",
        body: "The reward function is a sum of three signals: a large correctness reward when the extracted final answer matches GSM8K ground truth, a format reward when the output follows the required reasoning structure, and a numeric-validity reward. Correctness is weighted to dominate so the model can't win on format alone — the core defense against reward hacking. Success is measured as pass@1 on a held-out test split, base vs. trained, alongside qualitative traces of emergent step-by-step reasoning.",
      },
    ],
    features: [
      "GRPO (Group Relative Policy Optimization) — the same algorithm behind DeepSeek-R1, implemented from first principles",
      "Qwen2.5-1.5B + QLoRA (4-bit): trainable on a single free Colab T4 — no proprietary compute required",
      "Reward design: correctness weighted 3× over format reward — primary defence against reward hacking; numeric validity as a third signal",
      "Group-relative advantage: samples a group of completions and ranks them against each other — no separate critic model, no actor-critic instability",
      "KL divergence anchor to frozen reference policy — prevents reward collapse and preserves language quality",
      "Evaluation harness: pass@1 on held-out GSM8K split, base vs. trained — results to be published once evaluation completes",
    ],
    takeaway:
      "RL post-training and custom reward design are the rarest skills in the applied AI stack. The real difficulty is honesty: if reward climbs but accuracy doesn't, the reward is being gamed. The goal is a specific, measured result — exactly how much GRPO lifted GSM8K pass@1 on a 1.5B model trained on one free GPU — not a vague claim of improvement. Demonstrating the method on a verifiable task with checkable results is the point.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// ---------------------------------------------------------------
//  TESTIMONIALS
//  Add entries here as you collect them — the section on the home
//  page only renders when this array has at least one item, so it
//  stays invisible until you have real feedback to show.
// ---------------------------------------------------------------

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // This section only renders on the homepage when this array has at least one
  // entry — so it stays invisible until you have real feedback to show, which is
  // exactly what you want. Do NOT add placeholder entries with fake names; a
  // visible "— Replace with real name —" quote is worse than an empty section.
  //
  // Add real testimonials here when you have them. Suggested sources:
  //   - Your MorpheLabs manager or a senior colleague
  //   - A UET professor who reviewed your final-year or course project
  //   - A peer who collaborated with you on ASHIA or another project
  //   - A reworded LinkedIn recommendation (with permission)
  //
  // Example of the shape to use once you have a real quote:
  // {
  //   quote: "Ammar shipped production-quality work from day one...",
  //   author: "Jane Smith",
  //   role: "Senior Engineer",
  //   company: "MorpheLabs",
  // },
  // ─────────────────────────────────────────────────────────────────────────────
];

// ---------------------------------------------------------------
//  SOLUTIONS FAQ — shown at the bottom of the /solutions page
//  Edit answers here to match your actual policies.
// ---------------------------------------------------------------

export const solutionsFaq = [
  {
    q: "Do I own the code and systems you build?",
    a: "Yes — fully. You receive complete source code, deployment configuration, documentation, and credentials at handoff. Once delivered, you own everything with no ongoing license fees or dependency on me to keep it running.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most automation projects (WhatsApp agent, knowledge assistant, workflow automation) are delivered in 2–4 weeks from kickoff. Larger RAG or on-prem AI systems typically run 4–8 weeks. Your written proposal includes a fixed timeline you can hold me to.",
  },
  {
    q: "What if something breaks after you deliver it?",
    a: "Every project includes a 30-day support period after handoff. If something breaks due to my work, I fix it at no charge. I also write documentation thorough enough for a non-technical team to maintain the system independently.",
  },
  {
    q: "Does my data leave my servers?",
    a: "It depends on the architecture. For on-prem deployments, nothing leaves your infrastructure by design. For cloud-based systems, I document exactly which data each API processes before we start — and we design to minimise what leaves your control.",
  },
  {
    q: "Do I need an in-house technical team?",
    a: "No. I own architecture, build, testing, and deployment end-to-end. You receive a working system with documentation simple enough for a non-technical team to maintain. You don't need an in-house engineer to work with me.",
  },
  {
    q: "What does this typically cost?",
    a: "Most automation and AI projects run between $1,500 and $8,000 depending on complexity and scope. You receive a fixed price in the written proposal before any work begins — no hourly billing, no surprise invoices.",
  },
];
