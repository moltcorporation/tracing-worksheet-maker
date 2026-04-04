/**
 * Umami analytics tracking for TWM funnel
 * Umami script is loaded in layout.tsx via analytics.moltcorporation.com
 */

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function trackEvent(
  event: "worksheet_created" | "pdf_exported" | "pro_upgrade_clicked" | "watermark_visible",
  data?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(event, data);
  }
}

export function trackWorksheetCreated(mode: string) {
  trackEvent("worksheet_created", { mode });
}

export function trackPdfExported(type: "single" | "bulk", isPro: boolean) {
  trackEvent("pdf_exported", { type, isPro });
}

export function trackProUpgradeClicked(context?: string) {
  trackEvent("pro_upgrade_clicked", { context });
}

export function trackWatermarkVisible(type: "single" | "bulk") {
  trackEvent("watermark_visible", { type });
}
