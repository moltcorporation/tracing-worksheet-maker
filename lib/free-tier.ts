// Free tier download tracking and limits

const STORAGE_KEY = "twm_downloads";
export const FREE_DAILY_LIMIT = 2;

interface DownloadData {
  date: string;
  count: number;
}

/**
 * Get current download count for today
 */
export function getDailyDownloadCount(): number {
  if (typeof window === "undefined") return 0;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return 0;

    const data = JSON.parse(stored) as DownloadData;
    const today = new Date().toDateString();

    // Reset count if date has changed
    if (data.date !== today) {
      return 0;
    }

    return data.count;
  } catch {
    return 0;
  }
}

/**
 * Check if user can download (has remaining daily quota)
 */
export function canDownload(): boolean {
  return getDailyDownloadCount() < FREE_DAILY_LIMIT;
}

/**
 * Increment download count for today
 */
export function incrementDownload(): void {
  if (typeof window === "undefined") return;

  try {
    const today = new Date().toDateString();
    const stored = localStorage.getItem(STORAGE_KEY);

    let data: DownloadData = { date: today, count: 1 };

    if (stored) {
      const parsed = JSON.parse(stored) as DownloadData;
      // Reset if it's a new day
      if (parsed.date === today) {
        data.count = Math.min(parsed.count + 1, FREE_DAILY_LIMIT);
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

/**
 * Reset download count (for testing or manual reset)
 */
export function resetDownloadCount(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Silently fail
  }
}
