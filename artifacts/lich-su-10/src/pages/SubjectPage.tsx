import { useEffect, useMemo, useState } from "react";
import { BookmarkedPanel } from "@/components/BookmarkedPanel";
import { CustomQuestionsPanel } from "@/components/CustomQuestionsPanel";
import { Header } from "@/components/Header";
import { HistoryPanel } from "@/components/HistoryPanel";
import { QuickRefTable } from "@/components/QuickRefTable";
import { QuizMode } from "@/components/QuizMode";
import { ScoreChart } from "@/components/ScoreChart";
import { SubjectSwitcher } from "@/components/SubjectSwitcher";
import {
  useBookmarks,
  useCustomQuestions,
  useHistory,
  useLastWrongIds,
  useSavedQuizProgress,
  type SavedQuizProgress,
} from "@/lib/storage";
import type {
  SubjectConfig,
  SubjectFilter,
  SubjectQuestion,
} from "@/subjects/types";

const CUSTOM_TAG = "Tự thêm";
const CUSTOM_TAG_COLOR = "#1A8B7A";

interface SubjectPageProps {
  readonly subject: SubjectConfig;
}

type Mode =
  | { readonly view: "study" }
  | {
      readonly view: "quiz";
      readonly initialFilter: SubjectFilter;
      readonly resumeFrom: SavedQuizProgress | null;
    };

export function SubjectPage({ subject }: SubjectPageProps) {
  // Reset mode whenever the subject changes (defensive — different routes mount
  // separate instances, but this guards against any accidental reuse).
  const [mode, setMode] = useState<Mode>({ view: "study" });
  useEffect(() => {
    setMode({ view: "study" });
  }, [subject.id]);

  const { history, addAttempt, clearHistory } = useHistory(subject.id);
  const { bookmarks, toggleBookmark } = useBookmarks(subject.id);
  const { progress, refresh: refreshProgress } = useSavedQuizProgress(
    subject.id,
  );
  const { wrongIds, refresh: refreshWrong } = useLastWrongIds(subject.id);
  const { items: customItems } = useCustomQuestions(subject.id);

  // Merge built-in + extras (already merged in subject.questions) with user's
  // custom questions. Custom questions get a stable id based on their storage id.
  const allQuestions = useMemo<readonly SubjectQuestion[]>(() => {
    const customAsSubject: readonly SubjectQuestion[] = customItems.map((c) => ({
      id: c.id,
      q: c.q,
      opts: c.opts,
      ans: c.ans,
      explain: c.explain,
      tag: c.tag,
    }));
    return [...subject.questions, ...customAsSubject];
  }, [subject.questions, customItems]);

  // Effective tag colors include the "Tự thêm" tag so any custom question
  // tagged with it shows up with a distinct pill color.
  const effectiveTagColors = useMemo<Record<string, string>>(
    () => ({ [CUSTOM_TAG]: CUSTOM_TAG_COLOR, ...subject.tagColors }),
    [subject.tagColors],
  );

  // Build the filter list dynamically:
  //   - subject defaults
  //   - + "🔁 Câu sai (N)" if there are wrong IDs from the last quiz
  //   - + "Câu tự thêm" if there are user custom questions
  const dynamicFilters = useMemo<readonly SubjectFilter[]>(() => {
    const result: SubjectFilter[] = [...subject.filters];
    // Insert difficulty filters after bookmark filter (at position 2)
    result.splice(
      2,
      0,
      { label: "Dễ", kind: { type: "difficulty", level: "easy" } },
      { label: "Vừa", kind: { type: "difficulty", level: "medium" } },
      { label: "Khó", kind: { type: "difficulty", level: "hard" } },
    );
    if (wrongIds.length > 0) {
      result.splice(5, 0, {
        label: `🔁 Câu sai (${wrongIds.length})`,
        kind: { type: "wrong" },
      });
    }
    if (customItems.length > 0) {
      result.push({
        label: "Câu tự thêm",
        kind: { type: "topic", topic: CUSTOM_TAG },
      });
    }
    return result;
  }, [subject.filters, wrongIds.length, customItems.length]);

  // When we leave/enter study mode, refresh the saved-progress + wrong-ids
  // snapshots so the home buttons reflect the latest cache.
  useEffect(() => {
    if (mode.view === "study") {
      refreshProgress();
      refreshWrong();
    }
  }, [mode.view, refreshProgress, refreshWrong]);

  const startFreshQuiz = () => {
    setMode({
      view: "quiz",
      initialFilter: subject.defaultFilter,
      resumeFrom: null,
    });
  };

  const startBookmarkQuiz = () => {
    setMode({
      view: "quiz",
      initialFilter: subject.bookmarkFilter,
      resumeFrom: null,
    });
  };

  const startReviewWrongQuiz = () => {
    setMode({
      view: "quiz",
      initialFilter: {
        label: `🔁 Câu sai (${wrongIds.length})`,
        kind: { type: "wrong" },
      },
      resumeFrom: null,
    });
  };

  const resumeQuiz = () => {
    if (!progress) return;
    const matching =
      dynamicFilters.find((f) => f.label === progress.filter) ??
      subject.defaultFilter;
    setMode({ view: "quiz", initialFilter: matching, resumeFrom: progress });
  };

  const exitQuiz = () => {
    setMode({ view: "study" });
  };

  const handleSaveResult = (result: {
    readonly filter: string;
    readonly score: number;
    readonly total: number;
    readonly durationSecs: number;
  }) => {
    addAttempt(result);
  };

  const stats = useMemo(() => {
    const difficultyCounts = { easy: 0, medium: 0, hard: 0 };
    const tagCounts = new Map<string, number>();
    for (const q of allQuestions) {
      if (q.difficulty) difficultyCounts[q.difficulty] += 1;
      tagCounts.set(q.tag, (tagCounts.get(q.tag) ?? 0) + 1);
    }
    return { difficultyCounts, tagCounts };
  }, [allQuestions]);

  const removeBookmark = (id: string) => {
    toggleBookmark(id);
  };

  const headerExtras = useMemo(
    () => <SubjectSwitcher currentId={subject.id} />,
    [subject.id],
  );

  if (mode.view === "quiz") {
    return (
      <QuizMode
        key={`${subject.id}:${mode.resumeFrom ? "resume" : "fresh"}:${mode.initialFilter.label}`}
        subjectId={subject.id}
        allQuestions={allQuestions}
        filters={dynamicFilters}
        initialFilter={mode.initialFilter}
        tagColors={effectiveTagColors}
        resumeFrom={mode.resumeFrom}
        onBack={exitQuiz}
        onSaveResult={handleSaveResult}
      />
    );
  }

  return (
    <div className="min-h-screen bg-bg font-serif text-text">
      <Header
        badge={subject.badge}
        title={subject.title}
        subtitle={subject.subtitle}
        headerGradient={subject.headerGradient}
        questionCount={allQuestions.length}
        onStartQuiz={startFreshQuiz}
        hasResume={!!progress}
        onResume={resumeQuiz}
      >
        {headerExtras}
        {wrongIds.length > 0 && (
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              onClick={startReviewWrongQuiz}
              className="cursor-pointer rounded-full border border-wrong/60 bg-bg/70 px-5 py-2 font-display text-[13px] font-bold tracking-wide text-wrong backdrop-blur-sm transition-colors duration-200 hover:bg-surface-2"
            >
              🔁 Ôn lại {wrongIds.length} câu sai gần nhất
            </button>
          </div>
        )}
      </Header>

      <main className="mx-auto max-w-[820px] px-4 py-6 sm:px-6">
        {subject.quickRef && <QuickRefTable data={subject.quickRef} />}

        <ScoreChart history={history} accentHex={subject.accentHex} />

        <HistoryPanel history={history} onClear={clearHistory} />

        <BookmarkedPanel
          bookmarks={bookmarks}
          questions={allQuestions}
          tagColors={effectiveTagColors}
          onRemove={removeBookmark}
          onStartQuiz={startBookmarkQuiz}
        />

        <CustomQuestionsPanel
          subjectId={subject.id}
          availableTags={Object.keys(subject.tagColors)}
          tagColors={subject.tagColors}
        />

        <section
          aria-labelledby="theory-heading"
          className="mt-2 rounded-2xl border border-border-earth bg-surface p-5"
        >
          <h2
            id="theory-heading"
            className="mt-0 mb-4 font-display text-xl font-bold text-gold"
          >
            {subject.theoryHeading}
          </h2>
          <subject.TheoryView />
        </section>

        <p className="mx-auto mt-8 mb-4 max-w-[640px] text-center text-[12px] text-text-dim">
          {subject.footer}
        </p>
      </main>
    </div>
  );
}
