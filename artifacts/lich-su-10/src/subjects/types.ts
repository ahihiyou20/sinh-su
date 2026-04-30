import type { ComponentType } from "react";
import type { SubjectId } from "@/lib/storage";

export type { SubjectId };

export interface SubjectQuestion {
  readonly q: string;
  readonly opts: readonly string[];
  readonly ans: number;
  readonly explain: string;
  readonly tag: string;
}

export type FilterKind =
  | { readonly type: "all" }
  | { readonly type: "bookmarks" }
  | { readonly type: "topic"; readonly topic: string };

export interface SubjectFilter {
  readonly label: string;
  readonly kind: FilterKind;
}

export interface QuickRefRow {
  readonly cells: readonly string[];
  readonly nameColor?: string;
}

export interface QuickRef {
  readonly heading: string;
  readonly headers: readonly string[];
  readonly rows: readonly QuickRefRow[];
}

export interface SubjectConfig {
  readonly id: SubjectId;
  readonly path: string;

  // Visual identity
  readonly badge: string;          // small uppercase label above title
  readonly title: string;          // main h1
  readonly subtitle: string;       // sub heading
  readonly emoji: string;          // small emoji for buttons / switcher
  readonly headerGradient: string; // CSS background for header
  readonly accent: string;         // CSS variable name (e.g. "var(--color-gold)")
  readonly accentHex: string;      // hex code for the chart line

  // Switch button → other subject
  readonly otherId: SubjectId;
  readonly otherPath: string;
  readonly otherShortName: string;
  readonly otherEmoji: string;

  // Topic colours used inside the quiz pill
  readonly tagColors: Record<string, string>;

  // Optional quick reference table at top of page
  readonly quickRef?: QuickRef;

  // Theory section renderer (per-subject)
  readonly TheoryView: ComponentType;

  // Theory heading shown above TheoryView
  readonly theoryHeading: string;

  // Quiz data + filters
  readonly questions: readonly SubjectQuestion[];
  readonly filters: readonly SubjectFilter[];
  readonly defaultFilter: SubjectFilter;
  readonly bookmarkFilter: SubjectFilter;

  // Footer line
  readonly footer: string;
}

export function questionId(q: SubjectQuestion): string {
  return q.q;
}
