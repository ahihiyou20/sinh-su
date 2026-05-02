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

### `lich-su-10` — Ôn tập Lịch sử, Sinh học, Tiếng Trung & Vật lý 10

Single React+Vite study app that hosts all four subjects under one artifact.

- **Routing**: `wouter` (`/` → redirects to `/lichsu`; routes `/lichsu`, `/sinhhoc`, `/tiengtrung`, `/vatly`).
- **Subjects** are configured in `src/subjects/` (`lich-su.ts`, `sinh-hoc.ts`, shared `types.ts`). The `SubjectConfig` carries identity, branding, theory renderer, quiz pool, filters, and tag colors. `SubjectPage` is generic and is parameterised by the config.
- **Storage** (`src/lib/storage.ts`): per-subject namespaced `localStorage` under `revision-app:{kind}:{subject}:v1` for:
  - `history` — list of `QuizAttempt` (filter, score, total, timestamp), capped at 30.
  - `bookmarks` — set of question IDs (the question text), backed by a `useSyncExternalStore` store.
  - `quiz-progress` — single in-progress quiz snapshot per subject (filter, question IDs, current index, score, answers). Saved on every answer; cleared on completion or when filter/pool changes.
- **Resume**: `Header` shows a “↻ Tiếp tục bài đang làm” button when a saved quiz exists for the subject; the button hydrates `QuizMode` with the snapshot if the question set still matches.
- **Score chart**: `ScoreChart` (recharts `LineChart`) renders per-subject progression with avg/best/last stats and a reference line at the running average.
- **Theory renderers**: per-subject (`components/lich-su/`, `components/sinh-hoc/`). The Sinh học `SectionCard` supports the full block schema from the original biology data (`formulas`, `table`, `table2col`, `list`, `tips`, `nutrition`, `compare`, `steps`, `tip-box`).
- **Subject switcher**: `SubjectSwitcher` is a `wouter` `Link`-based pill in the header; switching navigates to the other route, which loads its own state.
- **Review wrong answers**: every quiz finish saves the IDs of missed questions to `revision-app:wrong-ids:{subject}:v1`. A "🔁 Ôn lại N câu sai gần nhất" CTA appears in the header (and on the result screen) whenever this list is non-empty. The pill `🔁 Câu sai (N)` is also injected into the quiz toolbar so the user can switch to it mid-quiz.
- **User custom questions** (`CustomQuestionsPanel`): users can add their own questions on a per-device basis, stored in `revision-app:custom-questions:{subject}:v1`. Custom questions are merged into the quiz pool in `SubjectPage` and tagged either with the special `Tự thêm` topic or with one of the subject's built-in topic tags (chosen from a dropdown in the form). When at least one custom question exists, a "Câu tự thêm" filter pill appears in the quiz toolbar.
- **Admin-editable extra questions**: each subject has a dedicated file you (the admin) can edit directly from the Replit source tree to add new questions without touching code or restarting anything else:
  - History: `artifacts/lich-su-10/src/data/lich-su/extra.ts` — append entries of type `QuizQuestion` (fields `q`, `opts`, `ans`, `explain`, `tag`).
  - Biology: `artifacts/lich-su-10/src/data/sinh-hoc/extra.ts` — append entries of type `ExtraQuiz` (fields `q`, `options`, `answer`, `explain`, `tag`).
  Each file ships with a commented-out template you can copy/paste. Extras are merged into `subject.questions` in `src/subjects/{lich-su,sinh-hoc}.ts` and pick up stable IDs of the form `{subject}-extra:{index}` so bookmarks/wrong-id tracking remain stable across reloads.
- **Shuffle**: `selectQuestions()` runs Fisher-Yates shuffle on every fresh quiz start (all, topic, bookmarks) and filter change. Resume restores saved order from `questionIds` in `SavedQuizProgress`.
- **Quiz timer**: `⏱ MM:SS` clock shown in the quiz progress row. Tracked via `quizStartTimeRef` (persisted in `SavedQuizProgress.startedAt`). On finish, `durationSecs` is stored in `QuizAttempt`, shown on result screen, history list, and chart tooltip.
- **Short-answer mode** (✍️ Tự điền toggle): teal pill in toolbar. Questions whose correct answer ≤ 10 chars auto-convert to `ShortAnswerInput` (free-text, case-insensitive+trimmed comparison). Shows MC options + explanation after submission. Falls back to MC for longer answers.
- **User counter**: `src/lib/api.ts` fires `POST /api-server/api/ping` with a per-device UUID on the first quiz answer per session. API server (`artifacts/api-server/src/routes/stats.ts`) logs unique device count at INFO level in the Replit console. `GET /api-server/api/stats` returns JSON stats.

