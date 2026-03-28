import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Cursive Name Tracing Generator — Printable Cursive Handwriting Worksheets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #f5f3ff 100%)",
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
            gap: "6px",
            marginBottom: "32px",
          }}
        >
          {["E", "m", "m", "a"].map((letter, i) => (
            <div
              key={i}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "14px",
                background: "#f3e8ff",
                border: "3px dashed #c084fc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: 700,
                color: "#9333ea",
                fontStyle: "italic",
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
          Cursive Name Tracing
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#64748b",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Free Printable Cursive Handwriting Worksheets
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Free Download", "Any Name", "Print-Ready PDF"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#9333ea",
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
