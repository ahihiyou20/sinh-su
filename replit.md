# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### `lich-su-10` — Ôn tập Lịch sử & Sinh học 10 (`/lichsu`, `/sinhhoc`)

Single React+Vite study app that hosts both subjects under one artifact.

- **Routing**: `wouter` (`/` → redirects to `/lichsu`; routes `/lichsu`, `/sinhhoc`).
- **Subjects** are configured in `src/subjects/` (`lich-su.ts`, `sinh-hoc.ts`, shared `types.ts`). The `SubjectConfig` carries identity, branding, theory renderer, quiz pool, filters, and tag colors. `SubjectPage` is generic and is parameterised by the config.
- **Storage** (`src/lib/storage.ts`): per-subject namespaced `localStorage` under `revision-app:{kind}:{subject}:v1` for:
  - `history` — list of `QuizAttempt` (filter, score, total, timestamp), capped at 30.
  - `bookmarks` — set of question IDs (the question text), backed by a `useSyncExternalStore` store.
  - `quiz-progress` — single in-progress quiz snapshot per subject (filter, question IDs, current index, score, answers). Saved on every answer; cleared on completion or when filter/pool changes.
- **Resume**: `Header` shows a “↻ Tiếp tục bài đang làm” button when a saved quiz exists for the subject; the button hydrates `QuizMode` with the snapshot if the question set still matches.
- **Score chart**: `ScoreChart` (recharts `LineChart`) renders per-subject progression with avg/best/last stats and a reference line at the running average.
- **Theory renderers**: per-subject (`components/lich-su/`, `components/sinh-hoc/`). The Sinh học `SectionCard` supports the full block schema from the original biology data (`formulas`, `table`, `table2col`, `list`, `tips`, `nutrition`, `compare`, `steps`, `tip-box`).
- **Subject switcher**: `SubjectSwitcher` is a `wouter` `Link`-based pill in the header; switching navigates to the other route, which loads its own state.

