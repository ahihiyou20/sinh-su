import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "lich-su-10:history:v1";
const MAX_ENTRIES = 20;

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

function readStoredHistory(): readonly QuizAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isAttempt);
  } catch {
    return [];
  }
}

function writeStoredHistory(entries: readonly QuizAttempt[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // ignore quota / serialization failures – history is best-effort
  }
}

export interface UseHistoryResult {
  readonly history: readonly QuizAttempt[];
  readonly addAttempt: (attempt: Omit<QuizAttempt, "id" | "timestamp">) => void;
  readonly clearHistory: () => void;
}

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useHistory(): UseHistoryResult {
  const [history, setHistory] = useState<readonly QuizAttempt[]>(() =>
    readStoredHistory(),
  );

  useEffect(() => {
    writeStoredHistory(history);
  }, [history]);

  const addAttempt = useCallback(
    (attempt: Omit<QuizAttempt, "id" | "timestamp">) => {
      setHistory((prev) => {
        const entry: QuizAttempt = {
          id: makeId(),
          timestamp: Date.now(),
          ...attempt,
        };
        return [entry, ...prev].slice(0, MAX_ENTRIES);
      });
    },
    [],
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, addAttempt, clearHistory };
}
