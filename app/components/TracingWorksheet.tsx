"use client";

import { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { jsPDF } from "jspdf";
import ProUpgradeModal from "./ProUpgradeModal";

type Mode = "name" | "letters" | "numbers";
type HandwritingStyle = "print" | "cursive" | "dnealian";
type LineStyle = "standard" | "wide-ruled" | "narrow-ruled" | "blank";

interface WorksheetSettings {
  mode: Mode;
  nameText: string;
  letterSize: number;
  rowsPerPage: number;
  lineSpacing: number;
  showGuideLines: boolean;
  selectedLetters: string[];
  selectedNumbers: string[];
  handwritingStyle: HandwritingStyle;
  lineStyle: LineStyle;
  customWords: string;
  bulkNames: string;
}

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const DIGITS = "0123456789".split("");

function getFontFamily(style: HandwritingStyle): string {
  return style === "cursive"
    ? "'Dancing Script', cursive"
    : "'Comic Sans MS', 'Comic Sans', cursive";
}

// Fetch font file and convert to base64 data URL for SVG embedding
let cachedFontDataUrl: string | null = null;
async function getCursiveFontDataUrl(): Promise<string> {
  if (cachedFontDataUrl) return cachedFontDataUrl;
  const resp = await fetch("/fonts/DancingScript-Regular.ttf");
  const buf = await resp.arrayBuffer();
  const base64 = btoa(
    new Uint8Array(buf).reduce((s, b) => s + String.fromCharCode(b), "")
  );
  cachedFontDataUrl = `data:font/truetype;base64,${base64}`;
  return cachedFontDataUrl;
}

const DEFAULT_SETTINGS: WorksheetSettings = {
  mode: "name",
  nameText: "",
  letterSize: 64,
  rowsPerPage: 6,
  lineSpacing: 1.5,
  showGuideLines: true,
  selectedLetters: [...UPPERCASE],
  selectedNumbers: [...DIGITS],
  handwritingStyle: "print",
  lineStyle: "standard",
  customWords: "",
  bulkNames: "",
};

// Pro feature lock badge
function ProBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full hover:bg-blue-100 transition-colors"
    >
      <svg
        className="w-3 h-3"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
      PRO
    </button>
  );
}

// Writing lines component for a single row
function WritingLines({
  y,
  width,
  height,
}: {
  y: number;
  width: number;
  height: number;
}) {
  const baseline = y + height;
  const midline = y + height * 0.5;
  const topline = y;

  return (
    <g>
      {/* Top line - dotted */}
      <line
        x1={0}
        y1={topline}
        x2={width}
        y2={topline}
        stroke="#ccc"
        strokeWidth={0.5}
        strokeDasharray="2,4"
      />
      {/* Midline - dashed */}
      <line
        x1={0}
        y1={midline}
        x2={width}
        y2={midline}
        stroke="#aaa"
        strokeWidth={0.5}
        strokeDasharray="6,4"
      />
      {/* Baseline - solid */}
      <line
        x1={0}
        y1={baseline}
        x2={width}
        y2={baseline}
        stroke="#666"
        strokeWidth={1}
      />
    </g>
  );
}

// Single traced character rendered as dotted text
function TracedCharacter({
  char,
  x,
  y,
  size,
  opacity,
  handwritingStyle = "print",
}: {
  char: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  handwritingStyle?: HandwritingStyle;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontFamily={getFontFamily(handwritingStyle)}
      fill="none"
      stroke="#999"
      strokeWidth={1.2}
      strokeDasharray="3,3"
      opacity={opacity}
      textAnchor="middle"
      dominantBaseline="alphabetic"
    >
      {char}
    </text>
  );
}

// Arrow guide for stroke direction (simplified)
function StrokeGuide({
  char,
  x,
  y,
  size,
  handwritingStyle = "print",
}: {
  char: string;
  x: number;
  y: number;
  size: number;
  handwritingStyle?: HandwritingStyle;
}) {
  // Show a small number indicating stroke start position
  const isNumber = /[0-9]/.test(char);
  const guideY = y - size * 0.85;
  const guideX = x - size * 0.15;

  return (
    <g>
      {/* Solid guide letter */}
      <text
        x={x}
        y={y}
        fontSize={size * 0.35}
        fontFamily={getFontFamily(handwritingStyle)}
        fill="#ddd"
        textAnchor="middle"
        dominantBaseline="alphabetic"
      >
        {char}
      </text>
      {/* Start dot */}
      <circle
        cx={guideX}
        cy={guideY}
        r={2.5}
        fill={isNumber ? "#e74c3c" : "#3498db"}
      />
      <text
        x={guideX}
        y={guideY + 1.5}
        fontSize={3.5}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial"
        fontWeight="bold"
      >
        1
      </text>
    </g>
  );
}

// A single worksheet row
function WorksheetRow({
  chars,
  y,
  rowHeight,
  width,
  letterSize,
  showGuideLines,
  showStrokeGuides,
  handwritingStyle = "print",
}: {
  chars: string[];
  y: number;
  rowHeight: number;
  width: number;
  letterSize: number;
  showGuideLines: boolean;
  showStrokeGuides?: boolean;
  handwritingStyle?: HandwritingStyle;
}) {
  const padding = 20;
  const usableWidth = width - padding * 2;
  const charSpacing = Math.min(
    letterSize * 1.2,
    usableWidth / Math.max(chars.length, 1)
  );

  return (
    <g>
      {showGuideLines && (
        <WritingLines y={y} width={width} height={rowHeight} />
      )}
      {chars.map((char, i) => {
        const cx = padding + i * charSpacing + charSpacing / 2;
        const cy = y + rowHeight * 0.88;

        return (
          <g key={`${char}-${i}`}>
            {showStrokeGuides && (
              <StrokeGuide char={char} x={cx} y={cy} size={letterSize} handwritingStyle={handwritingStyle} />
            )}
            <TracedCharacter
              char={char}
              x={cx}
              y={cy}
              size={letterSize}
              opacity={0.7}
              handwritingStyle={handwritingStyle}
            />
          </g>
        );
      })}
    </g>
  );
}

// Generate rows for worksheet based on mode
function generateRows(settings: WorksheetSettings): string[][] {
  const { mode, nameText, selectedLetters, selectedNumbers, rowsPerPage } =
    settings;

  switch (mode) {
    case "name": {
      if (!nameText.trim()) return [];
      const text = nameText.toUpperCase().trim();
      const rows: string[][] = [];
      // First row: the name with guides
      rows.push(text.split(""));
      // Remaining rows: repeated for practice
      for (let i = 1; i < rowsPerPage; i++) {
        rows.push(text.split(""));
      }
      return rows;
    }
    case "letters": {
      const letters = selectedLetters.length > 0 ? selectedLetters : UPPERCASE;
      const rows: string[][] = [];
      // Each letter gets repeated across a row for practice
      const lettersPerRow = Math.min(8, letters.length);
      for (let i = 0; i < Math.min(rowsPerPage, letters.length); i++) {
        const row: string[] = [];
        for (let j = 0; j < lettersPerRow; j++) {
          row.push(letters[i % letters.length]);
        }
        rows.push(row);
      }
      return rows;
    }
    case "numbers": {
      const numbers = selectedNumbers.length > 0 ? selectedNumbers : DIGITS;
      const rows: string[][] = [];
      const numbersPerRow = Math.min(8, numbers.length);
      for (let i = 0; i < Math.min(rowsPerPage, numbers.length); i++) {
        const row: string[] = [];
        for (let j = 0; j < numbersPerRow; j++) {
          row.push(numbers[i % numbers.length]);
        }
        rows.push(row);
      }
      return rows;
    }
  }
}

// SVG Worksheet Preview
function WorksheetPreview({
  settings,
  svgRef,
  fontDataUrl,
}: {
  settings: WorksheetSettings;
  svgRef: React.RefObject<SVGSVGElement | null>;
  fontDataUrl?: string;
}) {
  const rows = generateRows(settings);
  // US Letter dimensions in mm, scaled for SVG viewBox
  const pageWidth = 612; // 8.5" at 72 DPI
  const pageHeight = 792; // 11" at 72 DPI
  const margin = 40;
  const headerHeight = 60;
  const usableHeight = pageHeight - margin * 2 - headerHeight;
  const rowHeight = usableHeight / settings.rowsPerPage;

  const title =
    settings.mode === "name"
      ? `Trace: ${settings.nameText || "..."}`
      : settings.mode === "letters"
        ? "Letter Tracing Worksheet"
        : "Number Tracing Worksheet";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${pageWidth} ${pageHeight}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "white" }}
      >
        {/* Embed cursive font for self-contained SVG (needed for PDF export) */}
        {settings.handwritingStyle === "cursive" && fontDataUrl && (
          <defs>
            <style>{`
              @font-face {
                font-family: 'Dancing Script';
                font-style: normal;
                font-weight: 400;
                src: url('${fontDataUrl}') format('truetype');
              }
            `}</style>
          </defs>
        )}

        {/* Page border */}
        <rect
          x={1}
          y={1}
          width={pageWidth - 2}
          height={pageHeight - 2}
          fill="white"
          stroke="#e0e0e0"
          strokeWidth={1}
        />

        {/* Header */}
        <text
          x={pageWidth / 2}
          y={margin + 24}
          fontSize={22}
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#333"
          textAnchor="middle"
        >
          {title}
        </text>

        {/* Instruction */}
        <text
          x={pageWidth / 2}
          y={margin + 44}
          fontSize={12}
          fontFamily="Arial, sans-serif"
          fill="#888"
          textAnchor="middle"
        >
          Trace the dotted {settings.mode === "numbers" ? "numbers" : "letters"}{" "}
          carefully. Follow the guides.
        </text>

        {/* Worksheet rows */}
        <g transform={`translate(${margin}, ${margin + headerHeight})`}>
          {rows.map((row, i) => (
            <WorksheetRow
              key={i}
              chars={row}
              y={i * rowHeight}
              rowHeight={rowHeight}
              width={pageWidth - margin * 2}
              letterSize={settings.letterSize}
              showGuideLines={settings.showGuideLines}
              showStrokeGuides={i === 0}
              handwritingStyle={settings.handwritingStyle}
            />
          ))}
        </g>

        {/* Footer */}
        <text
          x={pageWidth / 2}
          y={pageHeight - 15}
          fontSize={9}
          fontFamily="Arial, sans-serif"
          fill="#bbb"
          textAnchor="middle"
        >
          tracingworksheetmaker.com
        </text>
      </svg>
    </div>
  );
}

export default function TracingWorksheet() {
  return (
    <Suspense>
      <TracingWorksheetInner />
    </Suspense>
  );
}

function TracingWorksheetInner() {
  const searchParams = useSearchParams();
  const [settings, setSettings] = useState<WorksheetSettings>(() => {
    const style = typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("style")
      : null;
    return {
      ...DEFAULT_SETTINGS,
      handwritingStyle: style === "cursive" ? "cursive" : "print",
    };
  });
  const [isExporting, setIsExporting] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [proFeatureName, setProFeatureName] = useState("");
  const [fontDataUrl, setFontDataUrl] = useState<string | undefined>();
  const [isPro, setIsPro] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Check for existing Pro access on mount
  useEffect(() => {
    const proEmail = localStorage.getItem("pro_email");
    if (proEmail) setIsPro(true);
  }, []);

  // Pre-load cursive font data for SVG embedding
  useEffect(() => {
    getCursiveFontDataUrl().then(setFontDataUrl);
  }, []);

  // Sync style from URL search params
  useEffect(() => {
    const style = searchParams.get("style");
    if (style === "cursive") {
      setSettings((prev) => ({ ...prev, handwritingStyle: "cursive" }));
    }
  }, [searchParams]);

  const updateSetting = useCallback(
    <K extends keyof WorksheetSettings>(
      key: K,
      value: WorksheetSettings[K]
    ) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const toggleLetter = useCallback((letter: string) => {
    setSettings((prev) => {
      const selected = prev.selectedLetters.includes(letter)
        ? prev.selectedLetters.filter((l) => l !== letter)
        : [...prev.selectedLetters, letter].sort();
      return { ...prev, selectedLetters: selected };
    });
  }, []);

  const toggleNumber = useCallback((num: string) => {
    setSettings((prev) => {
      const selected = prev.selectedNumbers.includes(num)
        ? prev.selectedNumbers.filter((n) => n !== num)
        : [...prev.selectedNumbers, num].sort();
      return { ...prev, selectedNumbers: selected };
    });
  }, []);

  const openProModal = useCallback((feature: string) => {
    if (isPro) return; // Pro users don't see the modal
    setProFeatureName(feature);
    setShowProModal(true);
  }, [isPro]);

  const handleProVerified = useCallback((email: string) => {
    localStorage.setItem("pro_email", email);
    setIsPro(true);
  }, []);

  const exportPDF = useCallback(async () => {
    if (!svgRef.current) return;
    setIsExporting(true);

    try {
      // If cursive, ensure font data is embedded before serialization
      if (settings.handwritingStyle === "cursive" && !fontDataUrl) {
        const url = await getCursiveFontDataUrl();
        setFontDataUrl(url);
      }

      const svgElement = svgRef.current;
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      // Create a canvas to render SVG at high DPI
      const canvas = document.createElement("canvas");
      const scale = 3; // 3x for ~216 DPI (good print quality)
      canvas.width = 612 * scale;
      canvas.height = 792 * scale;
      const ctx = canvas.getContext("2d");

      if (!ctx) throw new Error("Canvas context not available");

      const img = new Image();
      img.onload = () => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        const imgData = canvas.toDataURL("image/png", 1.0);

        // Create PDF at US Letter size
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "in",
          format: "letter",
        });

        pdf.addImage(imgData, "PNG", 0, 0, 8.5, 11);

        const filename =
          settings.mode === "name"
            ? `trace-${settings.nameText.toLowerCase().replace(/\s+/g, "-") || "worksheet"}.pdf`
            : `${settings.mode}-tracing-worksheet.pdf`;

        pdf.save(filename);
        setIsExporting(false);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        setIsExporting(false);
      };

      img.src = url;
    } catch {
      setIsExporting(false);
    }
  }, [settings.mode, settings.nameText, settings.handwritingStyle, fontDataUrl]);

  const rows = generateRows(settings);
  const hasContent =
    settings.mode !== "name" || settings.nameText.trim().length > 0;

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-1 space-y-4">
            {/* Mode Selector */}
            <div className="bg-white rounded-lg shadow p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Worksheet Type
              </label>
              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                {(["name", "letters", "numbers"] as Mode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => updateSetting("mode", mode)}
                    className={`flex-1 py-2 px-3 text-sm font-medium transition-colors ${
                      settings.mode === mode
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {mode === "name"
                      ? "Name"
                      : mode === "letters"
                        ? "Letters"
                        : "Numbers"}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode-specific controls */}
            <div className="bg-white rounded-lg shadow p-4 space-y-4">
              {settings.mode === "name" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name or Text
                  </label>
                  <input
                    type="text"
                    value={settings.nameText}
                    onChange={(e) =>
                      updateSetting(
                        "nameText",
                        e.target.value.slice(0, 20)
                      )
                    }
                    placeholder="Enter a name..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={20}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    {settings.nameText.length}/20 characters
                  </p>
                </div>
              )}

              {settings.mode === "letters" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Letters
                  </label>
                  <div className="grid grid-cols-7 gap-1">
                    {UPPERCASE.map((letter) => (
                      <button
                        key={letter}
                        onClick={() => toggleLetter(letter)}
                        className={`w-8 h-8 rounded text-xs font-bold transition-colors ${
                          settings.selectedLetters.includes(letter)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateSetting("selectedLetters", [...UPPERCASE])
                      }
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Select All
                    </button>
                    <button
                      onClick={() => updateSetting("selectedLetters", [])}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}

              {settings.mode === "numbers" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Numbers
                  </label>
                  <div className="grid grid-cols-5 gap-1">
                    {DIGITS.map((num) => (
                      <button
                        key={num}
                        onClick={() => toggleNumber(num)}
                        className={`w-10 h-10 rounded text-sm font-bold transition-colors ${
                          settings.selectedNumbers.includes(num)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateSetting("selectedNumbers", [...DIGITS])
                      }
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Select All
                    </button>
                    <button
                      onClick={() => updateSetting("selectedNumbers", [])}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Handwriting Style */}
            <div className="bg-white rounded-lg shadow p-4">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Handwriting Style
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="handwritingStyle"
                    checked={settings.handwritingStyle === "print"}
                    onChange={() => updateSetting("handwritingStyle", "print")}
                    className="text-blue-600"
                  />
                  Print (Standard)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="handwritingStyle"
                    checked={settings.handwritingStyle === "cursive"}
                    onChange={() => updateSetting("handwritingStyle", "cursive")}
                    className="text-blue-600"
                  />
                  Cursive
                </label>
                <label
                  className={`flex items-center gap-2 text-sm ${isPro ? "text-gray-700" : "text-gray-400 cursor-pointer"}`}
                  onClick={isPro ? undefined : () => openProModal("D'Nealian Style")}
                >
                  <input
                    type="radio"
                    name="handwritingStyle"
                    checked={settings.handwritingStyle === "dnealian"}
                    onChange={isPro ? () => updateSetting("handwritingStyle", "dnealian") : undefined}
                    disabled={!isPro}
                    className={isPro ? "text-blue-600" : "text-gray-300"}
                  />
                  D&apos;Nealian
                  {!isPro && (
                    <svg
                      className="w-3.5 h-3.5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </label>
              </div>
            </div>

            {/* Line Style - Pro Feature */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Line Style
                </label>
                {!isPro && <ProBadge onClick={() => openProModal("Line Styles")} />}
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="lineStyle"
                    checked={settings.lineStyle === "standard"}
                    onChange={() => updateSetting("lineStyle", "standard")}
                    className="text-blue-600"
                  />
                  Standard
                </label>
                {(["wide-ruled", "narrow-ruled", "blank"] as const).map(
                  (style) => (
                    <label
                      key={style}
                      className={`flex items-center gap-2 text-sm ${isPro ? "text-gray-700" : "text-gray-400 cursor-pointer"}`}
                      onClick={isPro ? undefined : () => openProModal("Line Styles")}
                    >
                      <input
                        type="radio"
                        name="lineStyle"
                        checked={settings.lineStyle === style}
                        onChange={isPro ? () => updateSetting("lineStyle", style) : undefined}
                        disabled={!isPro}
                        className={isPro ? "text-blue-600" : "text-gray-300"}
                      />
                      {style === "wide-ruled"
                        ? "Wide-Ruled"
                        : style === "narrow-ruled"
                          ? "Narrow-Ruled"
                          : "Blank (No Lines)"}
                      {!isPro && (
                        <svg
                          className="w-3.5 h-3.5 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Custom Words - Pro Feature */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Custom Words / Sight Words
                </label>
                {!isPro && <ProBadge onClick={() => openProModal("Custom Words")} />}
              </div>
              <textarea
                disabled={!isPro}
                placeholder="Enter sight words or vocabulary (one per line)..."
                className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none ${isPro ? "bg-white text-gray-700" : "bg-gray-50 text-gray-400 cursor-not-allowed"}`}
                rows={3}
                value={settings.customWords}
                onChange={isPro ? (e) => updateSetting("customWords", e.target.value) : undefined}
                onClick={isPro ? undefined : () => openProModal("Custom Words")}
              />
            </div>

            {/* Bulk Class Generation - Pro Feature */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Bulk Class Generation
                </label>
                {!isPro && (
                  <ProBadge
                    onClick={() => openProModal("Bulk Class Generation")}
                  />
                )}
              </div>
              <textarea
                disabled={!isPro}
                placeholder="Paste student names (one per line) to generate all worksheets at once..."
                className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none ${isPro ? "bg-white text-gray-700" : "bg-gray-50 text-gray-400 cursor-not-allowed"}`}
                rows={3}
                value={settings.bulkNames}
                onChange={isPro ? (e) => updateSetting("bulkNames", e.target.value) : undefined}
                onClick={isPro ? undefined : () => openProModal("Bulk Class Generation")}
              />
            </div>

            {/* Layout Settings */}
            <div className="bg-white rounded-lg shadow p-4 space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Layout</h3>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Letter Size: {settings.letterSize}px
                </label>
                <input
                  type="range"
                  min={32}
                  max={96}
                  value={settings.letterSize}
                  onChange={(e) =>
                    updateSetting("letterSize", Number(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Rows per page: {settings.rowsPerPage}
                </label>
                <input
                  type="range"
                  min={3}
                  max={10}
                  value={settings.rowsPerPage}
                  onChange={(e) =>
                    updateSetting("rowsPerPage", Number(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="guideLines"
                  checked={settings.showGuideLines}
                  onChange={(e) =>
                    updateSetting("showGuideLines", e.target.checked)
                  }
                  className="rounded"
                />
                <label htmlFor="guideLines" className="text-xs text-gray-600">
                  Show writing guide lines
                </label>
              </div>
            </div>

            {/* Save Worksheets - Pro Feature */}
            <button
              onClick={() => openProModal("Save & Organize Worksheets")}
              className="w-full bg-white border border-gray-200 rounded-lg shadow p-3 flex items-center justify-center gap-2 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              Save Worksheet
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                PRO
              </span>
            </button>

            {/* Export Button */}
            <button
              onClick={exportPDF}
              disabled={!hasContent || isExporting || rows.length === 0}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isExporting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </>
              )}
            </button>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="sticky top-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-2">
                Preview
              </h2>
              {hasContent && rows.length > 0 ? (
                <WorksheetPreview settings={settings} svgRef={svgRef} fontDataUrl={fontDataUrl} />
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center text-gray-400">
                  <svg
                    className="mx-auto h-16 w-16 mb-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-lg font-medium">
                    {settings.mode === "name"
                      ? "Enter a name to get started"
                      : "Select items to generate a worksheet"}
                  </p>
                  <p className="text-sm mt-1">
                    Your worksheet preview will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pro Upgrade Modal */}
      <ProUpgradeModal
        isOpen={showProModal}
        onClose={() => setShowProModal(false)}
        featureName={proFeatureName}
        onProVerified={handleProVerified}
      />
    </div>
  );
}
