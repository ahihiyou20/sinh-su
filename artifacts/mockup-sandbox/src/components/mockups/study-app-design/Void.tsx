import React from "react";
import { 
  BookOpen, 
  Zap, 
  Target, 
  ChevronRight, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  Trophy, 
  Atom, 
  FlaskConical, 
  Book, 
  Languages,
  Command
} from "lucide-react";

export function Void() {
  return (
    <div className="min-h-screen bg-[#080B11] text-[#F8FAFC] font-sans selection:bg-indigo-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080B11]/80 backdrop-blur-md">
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_16px_rgba(99,102,241,0.6)] transition-shadow">
              <Zap className="w-3.5 h-3.5 text-white" fill="currentColor" />
            </div>
            <span className="font-semibold text-sm tracking-wide">StudyAI</span>
          </div>
          
          <nav className="flex items-center gap-1 bg-[#0D1117] p-1 rounded-full border border-white/[0.07]">
            <button className="px-4 py-1.5 rounded-full bg-indigo-500 text-white text-xs font-medium transition-colors flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              Lịch sử
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5" />
              Sinh học
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5" />
              Tiếng Trung
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors flex items-center gap-1.5">
              <Atom className="w-3.5 h-3.5" />
              Vật lý
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1100px] mx-auto px-6 pt-16 pb-24">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent w-fit">
            Lịch sử 10
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mb-8 leading-relaxed">
            Hệ thống hóa kiến thức lịch sử thế giới và Việt Nam. Ôn tập qua các câu hỏi trắc nghiệm bám sát chương trình chuẩn.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg">
              <Book className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium">47 câu hỏi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-lg">
              <Target className="w-4 h-4 text-[#94A3B8]" />
              <span className="text-sm text-[#94A3B8]">Ôn tập 15/47</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-lg">
              <Trophy className="w-4 h-4 text-[#94A3B8]" />
              <span className="text-sm text-[#94A3B8]">Điểm cao: 8/10</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Theory Card - Spans 2 cols */}
          <div className="md:col-span-2 bg-[#0D1117] border border-white/[0.07] rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-[#0F1320] transition-all duration-300 group flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-xl font-semibold">Lý thuyết trọng tâm</h2>
              </div>
              <div className="text-sm text-[#475569]">3 chủ đề chính</div>
            </div>
            
            <div className="space-y-3 flex-1">
              {[
                { name: "Cách mạng tư sản Pháp", chapters: 4, progress: 100 },
                { name: "Chiến tranh thế giới thứ nhất", chapters: 5, progress: 60 },
                { name: "Cách mạng tháng Mười Nga", chapters: 3, progress: 0 }
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.1] cursor-pointer transition-colors group/item">
                  <div className="flex items-center gap-4">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-white/[0.05]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path className="text-indigo-500" strokeDasharray={`${topic.progress}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      </svg>
                      {topic.progress === 100 ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 absolute" />
                      ) : (
                        <span className="text-[10px] text-[#94A3B8] absolute">{topic.progress}%</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-[15px] group-hover/item:text-indigo-300 transition-colors">{topic.name}</h3>
                      <p className="text-xs text-[#475569] mt-0.5">{topic.chapters} bài học</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#475569] group-hover/item:text-indigo-400 group-hover/item:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Card */}
          <div className="bg-[#0D1117] border border-white/[0.07] rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-[#0F1320] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-full flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span className="font-medium text-sm">Luyện tập</span>
              </div>
              <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-md border border-green-500/20">
                8/10 ✓
              </div>
            </div>

            <div className="relative w-32 h-32 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-white/[0.05]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path className="text-indigo-500" strokeDasharray="32, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">15</span>
                <span className="text-[10px] text-[#475569] uppercase tracking-wider">/ 47 Câu</span>
              </div>
            </div>

            <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-medium rounded-lg px-4 py-2.5 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
              Bắt đầu ôn tập
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="mt-4 flex items-center gap-2 text-xs text-[#475569]">
              <Clock className="w-3.5 h-3.5" />
              <span>Lần cuối: 2 giờ trước</span>
            </div>
          </div>

          {/* Exam Strategy Card */}
          <div className="md:col-span-3 bg-[#0D1117] border border-white/[0.07] rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-[#0F1320] transition-all duration-300">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-lg font-semibold">Chiến lược làm bài</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Ghi nhớ mốc thời gian quan trọng",
                  "Đọc kỹ đề trước khi trả lời",
                  "Loại trừ đáp án sai"
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03]">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#94A3B8] leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#080B11]/50 backdrop-blur-sm fixed bottom-0 w-full">
        <div className="max-w-[1100px] mx-auto px-6 h-12 flex items-center justify-between text-xs text-[#475569]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Command className="w-3.5 h-3.5" /> K để tìm kiếm
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 border-l border-white/[0.07] pl-4">
              <kbd className="px-1.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.1] font-sans">1</kbd> Lịch sử
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-indigo-500/50" />
            Powered by AI
          </div>
        </div>
      </footer>
    </div>
  );
}
