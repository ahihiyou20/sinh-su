import { useState } from "react";
import { Header } from "@/components/Header";
import { QuickRefTable } from "@/components/QuickRefTable";
import { TheoryCard } from "@/components/TheoryCard";
import { QuizMode } from "@/components/QuizMode";
import { theoryData } from "@/data/theory";
import { quizData } from "@/data/quiz";

type Mode = "home" | "quiz";

function App() {
  const [mode, setMode] = useState<Mode>("home");

  if (mode === "quiz") {
    return <QuizMode onBack={() => setMode("home")} />;
  }

  return (
    <div className="min-h-screen bg-bg font-serif text-text">
      <Header
        questionCount={quizData.length}
        onStartQuiz={() => setMode("quiz")}
      />

      <main className="mx-auto max-w-[860px] px-4 py-7">
        <QuickRefTable />

        <h2 className="my-2 mb-4 border-l-4 border-gold pl-3.5 font-display text-lg font-bold text-gold">
          📚 Kiến thức trọng tâm
        </h2>

        {theoryData.map((section) => (
          <TheoryCard key={section.id} section={section} />
        ))}

        <footer className="mt-7 text-center text-xs tracking-wider text-gold-dim">
          Lịch Sử 10 – Kết nối tri thức • Học kì 2 – 2025/2026
        </footer>
      </main>
    </div>
  );
}

export default App;
