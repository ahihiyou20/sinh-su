import React from "react";
import { BookOpen, Brain, Target, ChevronRight, CheckCircle, BarChart2, Trophy, Clock, Zap } from "lucide-react";

export function Slate() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0F1117]/80 border-b border-slate-800/60">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="p-1.5 bg-cyan-500/10 rounded-lg">
              <BookOpen className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="font-semibold tracking-wide text-sm">ÔN TẬP 10</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            <button className="px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 text-sm font-medium transition-colors">
              Lịch sử
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
              Sinh học
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
              Tiếng Trung
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
              Vật lý
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white" style={{ textShadow: '0 0 40px rgba(34, 211, 238, 0.15)' }}>
              Lịch sử 10
            </h1>
            <p className="text-lg text-slate-400">
              Ôn tập toàn diện chương trình lịch sử lớp 10
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm">
              <Target className="w-4 h-4 text-cyan-500" />
              <span>47 câu hỏi</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-teal-500" />
              <span>15 đã ôn</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span>Điểm cao 8/10</span>
            </div>
          </div>
        </section>

        {/* 3-Column Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Lý thuyết (Theory) Card - 5 col */}
          <div className="md:col-span-5 bg-[#161B22] rounded-2xl border border-slate-700/50 border-t-cyan-500/20 p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-800/80 rounded-lg border border-slate-700/50 text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-white">Lý thuyết</h2>
            </div>
            
            <div className="space-y-4 flex-1">
              {[
                { num: "01", title: "Cách mạng tư sản Pháp", active: true },
                { num: "02", title: "Chiến tranh thế giới thứ nhất", active: true },
                { num: "03", title: "Cách mạng tháng Mười Nga", active: true },
                { num: "04", title: "Các nước phát xít", active: false }
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 p-3 rounded-xl transition-colors ${item.active ? 'hover:bg-slate-800/40 cursor-pointer' : 'opacity-50 grayscale'}`}>
                  <div className={`font-mono text-xs mt-1 ${item.active ? 'text-cyan-500/70' : 'text-slate-600'}`}>
                    {item.num}
                  </div>
                  <div className={`flex-1 border-l-2 pl-3 ${item.active ? 'border-cyan-500/30' : 'border-slate-700'}`}>
                    <h3 className={`font-medium ${item.active ? 'text-slate-200' : 'text-slate-500'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Câu hỏi ôn tập (Quiz) Card - 4 col */}
          <div className="md:col-span-4 bg-[#161B22] rounded-2xl border border-slate-700/50 border-t-cyan-500/20 p-6 flex flex-col h-full items-center justify-between relative text-center">
            <div className="w-full flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                Ôn tập
              </h2>
              <div className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                Lần cuối: 8/10
              </div>
            </div>

            <div className="relative w-36 h-36 flex items-center justify-center my-6">
              {/* SVG Arc for Progress */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#1E293B" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#22D3EE" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset={282.7 - (282.7 * 15) / 47} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">15</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">/47</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <button className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                Tiếp tục ôn tập
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                Xem lịch sử
              </button>
            </div>
          </div>

          {/* Chiến lược thi (Exam Strategy) Card - 3 col */}
          <div className="md:col-span-3 bg-[#161B22] rounded-2xl border border-slate-700/50 border-t-teal-500/20 p-6 flex flex-col h-full">
             <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-teal-400" />
              <h2 className="text-lg font-semibold text-white">Chiến lược</h2>
            </div>

            <div className="space-y-5 flex-1">
              <div className="group">
                <div className="text-[10px] font-mono text-teal-500/70 mb-1">01</div>
                <h3 className="text-sm font-medium text-slate-200 group-hover:text-teal-400 transition-colors">Trọng tâm thế kỷ 20</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Chiếm 60% số điểm bài thi. Cần nắm chắc các mốc thời gian.</p>
              </div>
              <div className="group">
                <div className="text-[10px] font-mono text-teal-500/70 mb-1">02</div>
                <h3 className="text-sm font-medium text-slate-200 group-hover:text-teal-400 transition-colors">Sơ đồ tư duy</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Áp dụng cho các cuộc cách mạng để nhớ lâu diễn biến.</p>
              </div>
               <div className="group">
                <div className="text-[10px] font-mono text-teal-500/70 mb-1">03</div>
                <h3 className="text-sm font-medium text-slate-200 group-hover:text-teal-400 transition-colors">Luyện đề 15p</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Phản xạ nhanh với trắc nghiệm khách quan.</p>
              </div>
            </div>
          </div>

        </section>

        {/* Secondary Row Teaser */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#161B22]/50 rounded-2xl border border-slate-800/60 p-5 flex items-center justify-between hover:bg-[#161B22] transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-200">Điểm yếu cần ôn</h3>
                <p className="text-xs text-slate-500 mt-0.5">3 chủ đề tỷ lệ đúng dưới 50%</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
          </div>

          <div className="bg-[#161B22]/50 rounded-2xl border border-slate-800/60 p-5 flex items-center justify-between hover:bg-[#161B22] transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-200">Bảng xếp hạng</h3>
                <p className="text-xs text-slate-500 mt-0.5">Top 15% tuần này</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
          </div>
        </section>
      </main>
    </div>
  );
}
