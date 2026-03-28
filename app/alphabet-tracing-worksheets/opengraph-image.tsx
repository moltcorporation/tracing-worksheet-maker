import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Alphabet Tracing Worksheets — Printable ABC Practice Sheets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #fdf2f8 100%)",
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
            gap: "10px",
            marginBottom: "32px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "600px",
          }}
        >
          {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
            <div
              key={letter}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                background: "#f3e8ff",
                border: "3px dashed #c084fc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                fontWeight: 700,
                color: "#9333ea",
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
          Alphabet Tracing Worksheets
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#64748b",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Free Printable ABC Practice for Preschool & Kindergarten
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Free Download", "Full Alphabet", "Print-Ready PDF"].map((tag) => (
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
