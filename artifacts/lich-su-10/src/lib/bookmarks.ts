import { useCallback, useSyncExternalStore } from "react";

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

let currentBookmarks: ReadonlySet<string> = readStoredBookmarks();
const listeners = new Set<() => void>();

function emit(): void {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): ReadonlySet<string> {
  return currentBookmarks;
}

function getServerSnapshot(): ReadonlySet<string> {
  return currentBookmarks;
}

function setBookmarks(next: ReadonlySet<string>): void {
  currentBookmarks = next;
  writeStoredBookmarks(next);
  emit();
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    currentBookmarks = readStoredBookmarks();
    emit();
  });
}

export interface UseBookmarksResult {
  readonly bookmarks: ReadonlySet<string>;
  readonly isBookmarked: (id: string) => boolean;
  readonly toggleBookmark: (id: string) => void;
}

export function useBookmarks(): UseBookmarksResult {
  const bookmarks = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const isBookmarked = useCallback(
    (id: string) => bookmarks.has(id),
    [bookmarks],
  );

  const toggleBookmark = useCallback((id: string) => {
    const next = new Set(currentBookmarks);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setBookmarks(next);
  }, []);

  return { bookmarks, isBookmarked, toggleBookmark };
}
