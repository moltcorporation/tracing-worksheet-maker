import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Number Tracing Worksheets — Printable 0-9 Practice Sheets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fef3c7 100%)",
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
          {["0", "1", "2", "3", "4", "5"].map((num) => (
            <div
              key={num}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "14px",
                background: "#ffedd5",
                border: "3px dashed #fdba74",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: 700,
                color: "#ea580c",
              }}
            >
              {num}
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
          Number Tracing Worksheets
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#64748b",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Free Printable 0-9 with Formation Guides
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Free Download", "Numbers 0-9", "Print-Ready PDF"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#ea580c",
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
