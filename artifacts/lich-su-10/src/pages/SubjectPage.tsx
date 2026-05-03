import { useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
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
const CUSTOM_TAG_COLOR = "#6366F1";

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
  const [mode, setMode] = useState<Mode>({ view: "study" });
  useEffect(() => {
    setMode({ view: "study" });
  }, [subject.id]);

  const { history, addAttempt, clearHistory } = useHistory(subject.id);
  const { bookmarks, toggleBookmark } = useBookmarks(subject.id);
  const { progress, refresh: refreshProgress } = useSavedQuizProgress(subject.id);
  const { wrongIds, refresh: refreshWrong } = useLastWrongIds(subject.id);
  const { items: customItems } = useCustomQuestions(subject.id);

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

  const effectiveTagColors = useMemo<Record<string, string>>(
    () => ({ [CUSTOM_TAG]: CUSTOM_TAG_COLOR, ...subject.tagColors }),
    [subject.tagColors],
  );

  const dynamicFilters = useMemo<readonly SubjectFilter[]>(() => {
    const result: SubjectFilter[] = [
      { label: "Dễ", kind: { type: "difficulty", level: "easy" } },
      { label: "Vừa", kind: { type: "difficulty", level: "medium" } },
      { label: "Khó", kind: { type: "difficulty", level: "hard" } },
      ...subject.filters,
    ];
    if (wrongIds.length > 0) {
      result.push({
        label: `Câu sai (${wrongIds.length})`,
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

  useEffect(() => {
    if (mode.view === "study") {
      refreshProgress();
      refreshWrong();
    }
  }, [mode.view, refreshProgress, refreshWrong]);

  const startFreshQuiz = () => {
    setMode({ view: "quiz", initialFilter: subject.defaultFilter, resumeFrom: null });
  };

  const startBookmarkQuiz = () => {
    setMode({ view: "quiz", initialFilter: subject.bookmarkFilter, resumeFrom: null });
  };

  const startReviewWrongQuiz = () => {
    setMode({
      view: "quiz",
      initialFilter: {
        label: `Câu sai (${wrongIds.length})`,
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
    <div className="min-h-screen bg-bg text-text">
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
      </Header>

      <main className="mx-auto max-w-[1100px] px-4 pb-12 sm:px-6">
        {wrongIds.length > 0 && (
          <div className="mb-5">
            <button
              type="button"
              onClick={startReviewWrongQuiz}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-wrong/40 bg-wrong/[0.08] px-5 py-2 text-sm font-medium text-wrong hover:bg-wrong/15 transition-colors duration-200"
            >
              <RotateCcw size={14} />
              Ôn lại {wrongIds.length} câu sai gần nhất
            </button>
          </div>
        )}

        {subject.quickRef && <QuickRefTable data={subject.quickRef} />}

        {/* Two-column layout on large screens */}
        <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
          <ScoreChart history={history} accentHex="#6366F1" />
          <HistoryPanel history={history} onClear={clearHistory} />
        </div>

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
          className="mt-4 rounded-2xl border border-border-earth bg-surface p-5"
        >
          <h2
            id="theory-heading"
            className="mt-0 mb-4 text-xl font-bold text-gold"
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
