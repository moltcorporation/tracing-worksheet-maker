import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Letter Tracing Worksheets — Printable A-Z for Preschool & Kindergarten";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "32px",
          }}
        >
          {["A", "B", "C", "D", "E", "F"].map((letter) => (
            <div
              key={letter}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "14px",
                background: "#dcfce7",
                border: "3px dashed #86efac",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: 700,
                color: "#16a34a",
              }}
            >
              {letter}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#1e3a5f",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Letter Tracing Worksheets
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#64748b",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Free Printable A-Z with Stroke Guides
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Free Download", "A-Z Letters", "Print-Ready PDF"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#16a34a",
                color: "white",
                padding: "8px 20px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
