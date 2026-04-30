import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

export type SubjectId = "lichsu" | "sinhhoc";

const APP_NS = "revision-app";
const HISTORY_MAX = 30;

function ns(kind: string, subject: SubjectId): string {
  return `${APP_NS}:${kind}:${subject}:v1`;
}

// ---------------------------------------------------------------------------
// Quiz attempt history
// ---------------------------------------------------------------------------

export interface QuizAttempt {
  readonly id: string;
  readonly timestamp: number;
  readonly filter: string;
  readonly score: number;
  readonly total: number;
}

function isAttempt(value: unknown): value is QuizAttempt {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.timestamp === "number" &&
    typeof v.filter === "string" &&
    typeof v.score === "number" &&
    typeof v.total === "number"
  );
}

function readHistory(subject: SubjectId): readonly QuizAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ns("history", subject));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isAttempt);
  } catch {
    return [];
  }
}

function writeHistory(
  subject: SubjectId,
  entries: readonly QuizAttempt[],
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ns("history", subject), JSON.stringify(entries));
  } catch {
    // ignore – history is best-effort
  }
}

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export interface UseHistoryResult {
  readonly history: readonly QuizAttempt[];
  readonly addAttempt: (attempt: Omit<QuizAttempt, "id" | "timestamp">) => void;
  readonly clearHistory: () => void;
}

export function useHistory(subject: SubjectId): UseHistoryResult {
  const [history, setHistory] = useState<readonly QuizAttempt[]>(() =>
    readHistory(subject),
  );

  // Re-read when the subject changes
  useEffect(() => {
    setHistory(readHistory(subject));
  }, [subject]);

  useEffect(() => {
    writeHistory(subject, history);
  }, [subject, history]);

  const addAttempt = useCallback(
    (attempt: Omit<QuizAttempt, "id" | "timestamp">) => {
      setHistory((prev) => {
        const entry: QuizAttempt = {
          id: makeId(),
          timestamp: Date.now(),
          ...attempt,
        };
        return [entry, ...prev].slice(0, HISTORY_MAX);
      });
    },
    [],
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, addAttempt, clearHistory };
}

// ---------------------------------------------------------------------------
// Bookmarks (per-subject, sync-external-store so updates propagate)
// ---------------------------------------------------------------------------

interface BookmarkStoreEntry {
  current: ReadonlySet<string>;
  listeners: Set<() => void>;
}

const bookmarkStores: Record<SubjectId, BookmarkStoreEntry> = {
  lichsu: { current: new Set(), listeners: new Set() },
  sinhhoc: { current: new Set(), listeners: new Set() },
};

function readBookmarks(subject: SubjectId): ReadonlySet<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(ns("bookmarks", subject));
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((v): v is string => typeof v === "string"));
  } catch {
    return new Set();
  }
}

function writeBookmarks(
  subject: SubjectId,
  ids: ReadonlySet<string>,
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      ns("bookmarks", subject),
      JSON.stringify([...ids]),
    );
  } catch {
    // ignore
  }
}

// initialise stores once per subject on the client
if (typeof window !== "undefined") {
  bookmarkStores.lichsu.current = readBookmarks("lichsu");
  bookmarkStores.sinhhoc.current = readBookmarks("sinhhoc");
  window.addEventListener("storage", (event) => {
    if (!event.key) return;
    for (const subject of ["lichsu", "sinhhoc"] as const) {
      if (event.key === ns("bookmarks", subject)) {
        bookmarkStores[subject].current = readBookmarks(subject);
        for (const l of bookmarkStores[subject].listeners) l();
      }
    }
  });
}

function setBookmarks(subject: SubjectId, next: ReadonlySet<string>): void {
  const store = bookmarkStores[subject];
  store.current = next;
  writeBookmarks(subject, next);
  for (const l of store.listeners) l();
}

export interface UseBookmarksResult {
  readonly bookmarks: ReadonlySet<string>;
  readonly isBookmarked: (id: string) => boolean;
  readonly toggleBookmark: (id: string) => void;
}

export function useBookmarks(subject: SubjectId): UseBookmarksResult {
  const subscribe = useCallback(
    (listener: () => void) => {
      const store = bookmarkStores[subject];
      store.listeners.add(listener);
      return () => {
        store.listeners.delete(listener);
      };
    },
    [subject],
  );
  const getSnapshot = useCallback(
    () => bookmarkStores[subject].current,
    [subject],
  );

  const bookmarks = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const isBookmarked = useCallback(
    (id: string) => bookmarks.has(id),
    [bookmarks],
  );

  const toggleBookmark = useCallback(
    (id: string) => {
      const next = new Set(bookmarkStores[subject].current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      setBookmarks(subject, next);
    },
    [subject],
  );

  return { bookmarks, isBookmarked, toggleBookmark };
}

// ---------------------------------------------------------------------------
// In-progress quiz cache  (per-subject, single concurrent quiz)
// ---------------------------------------------------------------------------

export interface SavedAnswer {
  readonly selected: number;
  readonly correct: boolean;
}

export interface SavedQuizProgress {
  readonly filter: string;
  readonly questionIds: readonly string[];
  readonly currentQ: number;
  readonly score: number;
  readonly answers: readonly SavedAnswer[];
  readonly updatedAt: number;
}

function isSavedAnswer(v: unknown): v is SavedAnswer {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  return typeof o.selected === "number" && typeof o.correct === "boolean";
}

function isSavedProgress(v: unknown): v is SavedQuizProgress {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.filter === "string" &&
    Array.isArray(o.questionIds) &&
    o.questionIds.every((x) => typeof x === "string") &&
    typeof o.currentQ === "number" &&
    typeof o.score === "number" &&
    Array.isArray(o.answers) &&
    o.answers.every(isSavedAnswer) &&
    typeof o.updatedAt === "number"
  );
}

export function loadQuizProgress(
  subject: SubjectId,
): SavedQuizProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ns("quiz-progress", subject));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isSavedProgress(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveQuizProgress(
  subject: SubjectId,
  progress: SavedQuizProgress,
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      ns("quiz-progress", subject),
      JSON.stringify(progress),
    );
  } catch {
    // ignore
  }
}

export function clearQuizProgress(subject: SubjectId): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(ns("quiz-progress", subject));
  } catch {
    // ignore
  }
}

// Reactive hook to watch saved progress for a subject (refreshes on mount and
// when the user clears/starts a quiz).
export function useSavedQuizProgress(subject: SubjectId): {
  readonly progress: SavedQuizProgress | null;
  readonly refresh: () => void;
  readonly clear: () => void;
} {
  const [progress, setProgress] = useState<SavedQuizProgress | null>(() =>
    loadQuizProgress(subject),
  );

  useEffect(() => {
    setProgress(loadQuizProgress(subject));
  }, [subject]);

  // Listen for storage events so progress saved in another tab is reflected
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (event: StorageEvent) => {
      if (event.key === ns("quiz-progress", subject)) {
        setProgress(loadQuizProgress(subject));
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [subject]);

  const refresh = useCallback(() => {
    setProgress(loadQuizProgress(subject));
  }, [subject]);

  const clear = useCallback(() => {
    clearQuizProgress(subject);
    setProgress(null);
  }, [subject]);

  return { progress, refresh, clear };
}
