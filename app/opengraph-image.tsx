import { ImageResponse } from "next/og";

// `force-static` is required for the GH_PAGES export build to collect this route
// (see next.config.ts / ADR 0169).
export const dynamic = "force-static";

export const alt = "Bar Moshe, for Laguna Health";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Laguna brand: deep-navy field, magenta->purple gradient, Satori's default font
// (Latin only), echoing their "less busywork, more human work" slogan.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#000040",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* glow orb */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(230,36,198,0.55), rgba(0,0,64,0))",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #e624c6, #783bf2)",
            }}
          />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
            <span>Bar Moshe</span>
            <span style={{ color: "#c4a9ff", marginLeft: 10 }}>
              for Laguna Health
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#c3c4ec" }}>
            Bar Moshe
          </div>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.05,
              marginTop: 6,
              backgroundImage: "linear-gradient(119deg, #e624c6, #a98bff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Builder & Full-Stack Engineer
          </div>
          <div style={{ fontSize: 27, color: "#c3c4ec", marginTop: 22 }}>
            For the Product-Minded Engineer role at Laguna Health.
          </div>
        </div>

        <div
          style={{
            height: 10,
            width: 260,
            borderRadius: 6,
            background: "linear-gradient(90deg, #e624c6, #783bf2)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
