import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "lich-su-10:bookmarks:v1";

function readStoredBookmarks(): ReadonlySet<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((v): v is string => typeof v === "string"));
  } catch {
    return new Set();
  }
}

function writeStoredBookmarks(ids: ReadonlySet<string>): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    // ignore quota / serialization failures – bookmarks are best-effort
  }
}

export interface UseBookmarksResult {
  readonly bookmarks: ReadonlySet<string>;
  readonly isBookmarked: (id: string) => boolean;
  readonly toggleBookmark: (id: string) => void;
}

export function useBookmarks(): UseBookmarksResult {
  const [bookmarks, setBookmarks] = useState<ReadonlySet<string>>(() =>
    readStoredBookmarks(),
  );

  useEffect(() => {
    writeStoredBookmarks(bookmarks);
  }, [bookmarks]);

  const isBookmarked = useCallback(
    (id: string) => bookmarks.has(id),
    [bookmarks],
  );

  const toggleBookmark = useCallback((id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return { bookmarks, isBookmarked, toggleBookmark };
}
