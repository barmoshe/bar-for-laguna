"use client";

import { useReveal } from "@/src/lib/reveal";
import { buildMailtoHref, buildWhatsAppHref } from "@/src/lib/contact";
import { Centerpiece } from "./Centerpiece";

// bar-for-laguna, one-page application site in Laguna Health's own brand
// (deep-navy #000040, Source Serif 4 display, Poppins body, magenta->purple
// gradients, alternating pastel bands, sparkle + conversation motifs). Copy is
// first-person, plain, honest to jobs/cv.md; it never claims healthcare or
// HIPAA-scale LLM work Bar has not done, and never showcases the agent studio.

// cv-forge writes the brand CV to public/ root; keep `const CV` a plain string
// so the rewiring regex still matches, and prefix with the base path for the
// GH_PAGES mirror (ADR 0169).
const CV = "/Bar_Moshe_CV_LagunaHealth.pdf";
const CV_HREF = (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + CV;

const FOCUS = [
  {
    n: "01",
    title: "Product judgment",
    body: "I turn a rough ask into a scoped, sensible build, and I push back when a request does not hold up instead of just building it.",
  },
  {
    n: "02",
    title: "AI as leverage, not a crutch",
    body: "Cursor and Claude Code are how I ship. I point them at production-grade output and review everything that lands, so the judgment stays mine.",
  },
  {
    n: "03",
    title: "The whole lifecycle",
    body: "From capturing the requirement through design, build, ship, and iteration. I do not wait for a spec or a final design file to start.",
  },
  {
    n: "04",
    title: "Fast into new domains",
    body: "I pick up unfamiliar territory quickly, healthcare included. Curiosity is the default setting.",
  },
];

const STATS = [
  {
    lead: "npm",
    label:
      "Open-source tools I have published and maintain, including a compiler with its own MCP server and editor plugins.",
  },
  {
    lead: "Featured",
    label:
      "Work selected for Temporal's Code Exchange, an external stamp I did not ask for.",
  },
  {
    lead: "hours to days",
    label:
      "From a rough brief to a deployed, working MVP. The cycle time this role is built around.",
  },
];

const EXPERIENCE = [
  {
    when: "2026 - now",
    role: "Freelance AI Builder",
    where: "Independent",
    note: "An independent practice: I scope a brief, make the architecture and product calls, and ship MVPs from intake to deploy, with AI tooling as the primary leverage.",
  },
  {
    when: "2025 - now",
    role: "Software Developer",
    where: "Joomsy",
    note: "Primary engineer at a five-person early-stage SaaS startup. Full-stack product plus the DevOps that runs it, design to deploy.",
  },
  {
    when: "2021 - now",
    role: "Customer Support Engineer",
    where: "Wochit",
    note: "Front line for a cloud video editor at scale: reproduce and resolve real users' issues, and feed them back into the product with the dev teams.",
  },
  {
    when: "2020 - 2023",
    role: "B.Sc. Computer Science",
    where: "Afeka College of Engineering",
    note: "Plus a Wix DevOps workshop (EKS, Kubernetes, Terraform) and the Coding Academy full-stack bootcamp.",
  },
];

const WORK = [
  {
    title: "MDP",
    meta: "Docs and decks from Markdown · npm + MCP server",
    href: "https://barmoshe.github.io/mdp/",
  },
  {
    title: "Cross-language data processing with Temporal",
    meta: "Go · Python · TypeScript · Featured by Temporal",
    href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal",
  },
  {
    title: "DevX Is Dead. Long Live AgentX.",
    meta: "Essay on AI-native engineering",
    href: "https://medium.com/@barmoshe/devx-is-dead-long-live-agentx-bbcff45228fd",
  },
  {
    title: "entailer",
    meta: "Logic-validity toolkit · 6 packages on npm",
    href: "https://github.com/barmoshe/entailer",
  },
  {
    title: "MIDI GPT REST API",
    meta: "LLM generation pipeline · OpenAI, retries + validation",
    href: "https://github.com/barmoshe/AI_MIDI_API",
  },
  {
    title: "Biome Synth",
    meta: "Generative browser instrument · Web Audio",
    href: "https://biome-synth.lovable.app/",
  },
  {
    title: "apartment-hunter",
    meta: "Full-stack search app · Next.js on Vercel",
    href: "https://apartment-hunter-one.vercel.app",
  },
  {
    title: "Israelify",
    meta: "Full-stack music app · React + Node + MongoDB",
    href: "https://github.com/Gal-Or/IsraelifyApp",
  },
];

// A 4-point sparkle, their signature dark-band decoration. Positions are
// scattered by inline style at the call site.
function Spark({
  top,
  left,
  size = 16,
  delay = 0,
}: {
  top: string;
  left: string;
  size?: number;
  delay?: number;
}) {
  return (
    <span
      className="laguna-spark"
      style={{ top, left, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12Z" />
      </svg>
    </span>
  );
}

// The gradient ring glyph in the wordmark, echoing Laguna's logo mark.
function RingMark() {
  return (
    <svg className="laguna-ring" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="laguna-ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e624c6" />
          <stop offset="1" stopColor="#783bf2" />
        </linearGradient>
      </defs>
      <circle
        cx="16"
        cy="16"
        r="13"
        fill="none"
        stroke="url(#laguna-ring-grad)"
        strokeWidth="3"
      />
      <path d="M16 3a13 13 0 0 1 0 26Z" fill="url(#laguna-ring-grad)" />
    </svg>
  );
}

export function LagunaApp() {
  useReveal();

  const waHref = buildWhatsAppHref(
    "Hi Bar, I saw the page you built for Laguna Health. Let's talk.",
  );
  const mailHref = buildMailtoHref(
    "Bar Moshe, for the Product-Minded Engineer role at Laguna Health",
  );

  return (
    <div className="laguna-root">
      <a className="laguna-skip" href="#main">
        Skip to content
      </a>

      {/* ============ hero band (navy) ============ */}
      <section className="laguna-band laguna-band--navy laguna-hero-band">
        <div className="laguna-sparkles" aria-hidden="true">
          <Spark top="18%" left="54%" size={14} delay={0} />
          <Spark top="30%" left="88%" size={22} delay={0.6} />
          <Spark top="62%" left="49%" size={12} delay={1.2} />
          <Spark top="74%" left="82%" size={18} delay={0.3} />
          <Spark top="12%" left="72%" size={11} delay={1.8} />
        </div>

        <div className="laguna-wrap">
          <header>
            <nav className="laguna-nav" aria-label="Primary">
              <span className="laguna-wordmark">
                <RingMark />
                <b>Bar Moshe</b>{" "}
                <span className="laguna-for">for Laguna Health</span>
              </span>
              <a className="laguna-btn" href={waHref}>
                Let&apos;s talk
              </a>
            </nav>
          </header>

          <main id="main">
            <div className="laguna-hero" data-reveal>
              <div>
                <h1>
                  Less typing, more engineering judgment{" "}
                  <span className="laguna-heart">💜</span>
                </h1>
                <p className="laguna-lede">
                  Laguna gives care managers their time back by taking the
                  busywork off their plate. I do the same thing for myself as an
                  engineer: Cursor and Claude Code handle the typing, and I spend
                  the time saved on architecture, product calls, and review. This
                  page is that idea, built in your brand.
                </p>
                <div className="laguna-cta-row">
                  <a className="laguna-btn" href={waHref}>
                    WhatsApp
                  </a>
                  <a className="laguna-btn-ghost" href={mailHref}>
                    Email
                  </a>
                  <a className="laguna-btn-ghost" href={CV_HREF}>
                    Download CV
                  </a>
                </div>
              </div>
              <Centerpiece />
            </div>
          </main>
        </div>
      </section>

      {/* ============ focus areas (lavender) ============ */}
      <section className="laguna-band laguna-band--lav">
        <div className="laguna-wrap laguna-section" data-reveal>
          <p className="laguna-eyebrow">Where I&apos;d plug in</p>
          <h2 className="laguna-h2">Built to own the whole feature</h2>
          <div className="laguna-grid">
            {FOCUS.map((f) => (
              <article className="laguna-card" key={f.n}>
                <div className="laguna-card-num">{f.n}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ stat trio (navy) ============ */}
      <section className="laguna-band laguna-band--navy">
        <div className="laguna-wrap laguna-section" data-reveal>
          <p className="laguna-eyebrow">Proof, not adjectives</p>
          <h2 className="laguna-h2">What I have actually shipped</h2>
          <div className="laguna-stats">
            {STATS.map((s) => (
              <div className="laguna-stat" key={s.lead}>
                <div className="laguna-stat-lead">{s.lead}</div>
                <p className="laguna-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ experience + education (sky) ============ */}
      <section className="laguna-band laguna-band--sky">
        <div className="laguna-wrap laguna-section" data-reveal>
          <p className="laguna-eyebrow">Track record</p>
          <h2 className="laguna-h2">Experience and education</h2>
          <div className="laguna-exp">
            {EXPERIENCE.map((e) => (
              <div className="laguna-exp-item" key={e.role}>
                <div className="laguna-exp-when">{e.when}</div>
                <div>
                  <div className="laguna-exp-role">
                    {e.role} <span>· {e.where}</span>
                  </div>
                  <div className="laguna-exp-note">{e.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ selected work (lavender) ============ */}
      <section className="laguna-band laguna-band--lav">
        <div className="laguna-wrap laguna-section" data-reveal>
          <p className="laguna-eyebrow">Shipped and public</p>
          <h2 className="laguna-h2">Selected work</h2>
          <div className="laguna-work">
            {WORK.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="laguna-work-title">
                  {w.title}{" "}
                  <span className="laguna-work-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
                <span className="laguna-work-meta">{w.meta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ contact close (gradient) ============ */}
      <section className="laguna-band laguna-band--grad">
        <div className="laguna-wrap laguna-section" data-reveal>
          <h2 className="laguna-h2">Let&apos;s talk about the pod.</h2>
          <p className="laguna-lede">
            You are building small pods where one engineer owns the whole
            feature, with a designer and a product person alongside. That is the
            shape I want to work in. I would like to own one at Laguna Health.
          </p>
          <div className="laguna-cta-row">
            <a className="laguna-btn laguna-btn--solid" href={waHref}>
              WhatsApp
            </a>
            <a className="laguna-btn-ghost" href={mailHref}>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ============ footer (navy) ============ */}
      <footer className="laguna-band laguna-band--navy laguna-foot">
        <div className="laguna-wrap">
          <p>Built by Bar Moshe. Not affiliated with or endorsed by Laguna Health.</p>
          <p>
            Laguna&apos;s colors, typefaces, and slogan are referenced here under
            nominative fair use, for a job application.
          </p>
        </div>
      </footer>
    </div>
  );
}
