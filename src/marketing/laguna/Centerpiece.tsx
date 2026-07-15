// Centerpiece, the hero's signature graphic.
//
// Reframes Laguna's own motif, the conversation thread that turns talk into
// action (their "less busywork, more human work"), into Bar's operating model:
// a rough requirement flows down a winding thread, through an AI-leverage node
// (Cursor / Claude Code, "AI does the typing"), branches into the judgment work
// (architecture, product, review), and lands on a shipped feature. It is the
// visual of "less typing, more engineering judgment".
//
// Built from scratch: no Laguna assets. All coordinates are integers so the
// server and client strings match (no hydration mismatch). Decorative, so it is
// aria-hidden; the meaning lives in the surrounding copy. Motion is CSS and is
// neutralised under prefers-reduced-motion (marketing-base.css), landing on the
// fully-assembled final state.
export function Centerpiece() {
  return (
    <svg
      className="laguna-cp"
      viewBox="0 0 440 430"
      role="img"
      aria-hidden="true"
      style={{ width: "100%", height: "auto" }}
    >
      <defs>
        <linearGradient id="laguna-cp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e624c6" />
          <stop offset="1" stopColor="#783bf2" />
        </linearGradient>
        <linearGradient id="laguna-cp-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#783bf2" />
          <stop offset="1" stopColor="#00a3f5" />
        </linearGradient>
      </defs>

      {/* winding threads (drawn behind the nodes) */}
      <path className="cp-thread cp-t1" d="M72 86 C72 122 150 118 220 150" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="3" strokeLinecap="round" />
      <path className="cp-thread cp-t2" d="M220 222 C220 248 120 244 90 256" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="2" strokeLinecap="round" />
      <path className="cp-thread cp-t2" d="M220 222 L220 256" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="2" strokeLinecap="round" />
      <path className="cp-thread cp-t2" d="M220 222 C220 248 320 244 350 256" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="2" strokeLinecap="round" />
      <path className="cp-thread cp-t3" d="M90 292 C90 320 180 322 210 340" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="2" strokeLinecap="round" />
      <path className="cp-thread cp-t3" d="M220 292 L220 340" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="2" strokeLinecap="round" />
      <path className="cp-thread cp-t3" d="M350 292 C350 320 260 322 230 340" fill="none" stroke="url(#laguna-cp-grad)" strokeWidth="2" strokeLinecap="round" />

      {/* requirement bubble */}
      <g className="cp-node cp-d0">
        <rect x="16" y="18" width="250" height="66" rx="18" fill="url(#laguna-cp-blue)" />
        <path d="M60 84 L52 104 L80 84 Z" fill="url(#laguna-cp-blue)" />
        <text className="cp-label cp-lg" x="36" y="46" fill="#ffffff">&#8220;make onboarding</text>
        <text className="cp-label cp-lg" x="36" y="66" fill="#ffffff">less painful&#8221;</text>
      </g>

      {/* AI-leverage node */}
      <g className="cp-node cp-d1">
        <rect x="95" y="150" width="250" height="72" rx="16" fill="#0b0b52" stroke="url(#laguna-cp-grad)" strokeWidth="1.5" />
        <path className="cp-spark" d="M120 176c0.6 4.6 2.4 6.4 7 7-4.6 0.6-6.4 2.4-7 7-0.6-4.6-2.4-6.4-7-7 4.6-0.6 6.4-2.4 7-7Z" fill="#e624c6" />
        <text className="cp-label cp-lg" x="140" y="182" fill="#ffffff">Cursor &#183; Claude Code</text>
        <text className="cp-label cp-sm" x="140" y="202" fill="#c3c4ec">AI does the typing</text>
      </g>

      {/* judgment pills */}
      <g className="cp-node cp-d2">
        <rect x="35" y="258" width="110" height="34" rx="17" fill="#0b0b52" stroke="#783bf2" strokeWidth="1.5" />
        <text className="cp-label cp-md" x="90" y="280" fill="#ffffff" textAnchor="middle">Architecture</text>
      </g>
      <g className="cp-node cp-d2b">
        <rect x="181" y="258" width="78" height="34" rx="17" fill="#0b0b52" stroke="#783bf2" strokeWidth="1.5" />
        <text className="cp-label cp-md" x="220" y="280" fill="#ffffff" textAnchor="middle">Product</text>
      </g>
      <g className="cp-node cp-d2c">
        <rect x="300" y="258" width="95" height="34" rx="17" fill="#0b0b52" stroke="#783bf2" strokeWidth="1.5" />
        <text className="cp-label cp-md" x="347" y="280" fill="#ffffff" textAnchor="middle">Review</text>
      </g>

      {/* shipped feature */}
      <g className="cp-node cp-d3">
        <rect x="118" y="340" width="204" height="70" rx="16" fill="url(#laguna-cp-grad)" />
        <path d="M143 375 l7 7 l13 -15" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text className="cp-label cp-lg" x="172" y="371" fill="#ffffff">Shipped feature</text>
        <text className="cp-label cp-sm" x="172" y="391" fill="#f2dcff">the judgment stays mine</text>
      </g>
    </svg>
  );
}
