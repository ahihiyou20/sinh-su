import { useEffect, useMemo, useState } from "react";
import { BookmarkedPanel } from "@/components/BookmarkedPanel";
import { Header } from "@/components/Header";
import { HistoryPanel } from "@/components/HistoryPanel";
import { QuickRefTable } from "@/components/QuickRefTable";
import { QuizMode } from "@/components/QuizMode";
import { ScoreChart } from "@/components/ScoreChart";
import { SubjectSwitcher } from "@/components/SubjectSwitcher";
import {
  useBookmarks,
  useHistory,
  useSavedQuizProgress,
  type SavedQuizProgress,
} from "@/lib/storage";
import type { SubjectConfig, SubjectFilter } from "@/subjects/types";

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

  // When we leave/enter study mode, refresh the saved-progress snapshot so
  // the resume button reflects the latest cache.
  useEffect(() => {
    if (mode.view === "study") refreshProgress();
  }, [mode.view, refreshProgress]);

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

  const resumeQuiz = () => {
    if (!progress) return;
    const matching =
      subject.filters.find((f) => f.label === progress.filter) ??
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
  }) => {
    addAttempt(result);
  };

  const removeBookmark = (id: string) => {
    toggleBookmark(id);
  };

  const currentShortName = subject.id === "lichsu" ? "Lịch sử" : "Sinh học";
  const headerExtras = useMemo(
    () => (
      <SubjectSwitcher
        currentShortName={currentShortName}
        currentEmoji={subject.emoji}
        otherShortName={subject.otherShortName}
        otherEmoji={subject.otherEmoji}
        otherPath={subject.otherPath}
      />
    ),
    [
      currentShortName,
      subject.emoji,
      subject.otherEmoji,
      subject.otherPath,
      subject.otherShortName,
    ],
  );

  if (mode.view === "quiz") {
    return (
      <QuizMode
        key={`${subject.id}:${mode.resumeFrom ? "resume" : "fresh"}:${mode.initialFilter.label}`}
        subjectId={subject.id}
        allQuestions={subject.questions}
        filters={subject.filters}
        initialFilter={mode.initialFilter}
        tagColors={subject.tagColors}
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
        questionCount={subject.questions.length}
        onStartQuiz={startFreshQuiz}
        hasResume={!!progress}
        onResume={resumeQuiz}
      >
        {headerExtras}
      </Header>

      <main className="mx-auto max-w-[820px] px-4 py-6 sm:px-6">
        {subject.quickRef && <QuickRefTable data={subject.quickRef} />}

        <ScoreChart history={history} accentHex={subject.accentHex} />

        <HistoryPanel history={history} onClear={clearHistory} />

        <BookmarkedPanel
          bookmarks={bookmarks}
          questions={subject.questions}
          tagColors={subject.tagColors}
          onRemove={removeBookmark}
          onStartQuiz={startBookmarkQuiz}
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
