import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Tracing Worksheet Maker — Free Printable Name, Letter & Number Tracing Worksheets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)",
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
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {["A", "B", "C"].map((letter) => (
            <div
              key={letter}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "16px",
                background: "#dbeafe",
                border: "3px dashed #93c5fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: 700,
                color: "#3b82f6",
              }}
            >
              {letter}
            </div>
          ))}
          {["1", "2", "3"].map((num) => (
            <div
              key={num}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "16px",
                background: "#fef3c7",
                border: "3px dashed #fbbf24",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: 700,
                color: "#d97706",
              }}
            >
              {num}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#1e3a5f",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Tracing Worksheet Maker
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#64748b",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Free Printable Worksheets for Names, Letters & Numbers
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["100% Free", "Instant PDF", "No Sign-up"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#3b82f6",
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
