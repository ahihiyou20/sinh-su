import React from "react";
import { ChevronRight, Circle, CheckCircle2, BookOpen, ArrowRight, BarChart2, Trophy, Search, Bookmark } from "lucide-react";

export function Onyx() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation */}
      <header className="border-b border-white/[0.06] bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-zinc-400 font-medium">Ôn Tập</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200">Lịch sử</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <button className="text-amber-400 border-b-2 border-amber-400 pb-3 pt-3">Lịch sử</button>
            <button className="text-zinc-500 hover:text-white transition-colors pb-3 pt-3">Sinh học</button>
            <button className="text-zinc-500 hover:text-white transition-colors pb-3 pt-3">Tiếng Trung</button>
            <button className="text-zinc-500 hover:text-white transition-colors pb-3 pt-3">Vật lý</button>
            <div className="w-px h-4 bg-white/[0.06] mx-2"></div>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Hero Area */}
        <section className="mb-16">
          <h1 className="text-[64px] leading-tight font-bold tracking-tight text-white mb-4">
            Lịch sử
          </h1>
          <div className="flex items-center gap-3 text-zinc-500 text-sm tracking-wide">
            <span>Lớp 10</span>
            <span>·</span>
            <span className="font-mono">47</span> <span>câu hỏi</span>
            <span>·</span>
            <span>Cập nhật 2024</span>
          </div>
          <hr className="mt-12 border-white/[0.06]" />
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Left: Theory List (60%) */}
          <div className="md:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold text-zinc-100">Chương trình học</h2>
              <button className="text-xs text-zinc-500 hover:text-amber-400 transition-colors uppercase tracking-widest font-semibold">Mở rộng</button>
            </div>
            
            <div className="flex flex-col border-t border-white/[0.06]">
              {[
                { id: "01", title: "Lịch sử và sử học", status: "done" },
                { id: "02", title: "Khái quát lịch sử văn minh thế giới", status: "done" },
                { id: "03", title: "Lịch sử văn minh Đông Nam Á", status: "current" },
                { id: "04", title: "Hành trình phát triển của dân tộc Việt Nam", status: "pending" },
                { id: "05", title: "Các cuộc cách mạng công nghiệp", status: "pending" }
              ].map((chapter, idx) => (
                <div 
                  key={chapter.id} 
                  className={`group flex items-center justify-between py-5 border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg cursor-pointer ${chapter.status === 'current' ? 'bg-white/[0.01]' : ''}`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{chapter.id}</span>
                    <span className={`text-base font-light ${chapter.status === 'current' ? 'text-amber-400 font-medium' : 'text-zinc-300 group-hover:text-white'} transition-colors`}>
                      {chapter.title}
                    </span>
                  </div>
                  <div>
                    {chapter.status === 'done' && <CheckCircle2 className="w-5 h-5 text-zinc-600" />}
                    {chapter.status === 'current' && <Circle className="w-5 h-5 text-amber-400 fill-amber-400/20" />}
                    {chapter.status === 'pending' && <Circle className="w-5 h-5 text-zinc-800" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Quiz (40%) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Stats Block */}
            <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-zinc-500 text-sm mb-1">Điểm gần nhất</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-mono font-medium text-amber-400 tracking-tighter">8</span>
                    <span className="text-2xl font-mono text-zinc-600">/10</span>
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-full w-10 h-10 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm text-zinc-400">Tiến độ ôn tập</span>
                  <span className="text-xs font-mono text-zinc-500">15/47</span>
                </div>
                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>

            {/* Actions Block */}
            <div className="flex flex-col gap-4 mt-2">
              <button className="w-full bg-amber-400 hover:bg-amber-300 text-black font-semibold py-4 px-6 rounded-xl flex items-center justify-between transition-colors group">
                <span className="text-lg">Bắt đầu ôn tập</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full bg-transparent border border-white/[0.1] hover:bg-white/[0.05] text-white font-medium py-4 px-6 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                Xem chiến lược
              </button>
            </div>
            
          </div>
        </div>

        {/* Tips Section */}
        <section className="border-t border-white/[0.06] pt-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl font-semibold text-white">Chiến lược thi</h2>
            <div className="h-px bg-white/[0.06] flex-1 ml-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { id: "01", title: "Học theo dòng sự kiện", desc: "Liên kết các sự kiện theo trình tự thời gian thay vì học thuộc lòng rời rạc." },
              { id: "02", title: "Phân tích nguyên nhân", desc: "Tập trung vào hoàn cảnh lịch sử và nguyên nhân sâu xa của mỗi cuộc kháng chiến." },
              { id: "03", title: "Luyện đề thực chiến", desc: "Làm bài thi thử 45 phút mỗi cuối tuần để làm quen với áp lực thời gian." }
            ].map((tip, idx) => (
              <div key={tip.id} className={`p-8 ${idx !== 2 ? 'md:border-r border-white/[0.06]' : ''} flex flex-col`}>
                <span className="text-amber-400 font-mono text-lg mb-6 block">{tip.id}</span>
                <h3 className="text-zinc-100 font-medium text-lg mb-3">{tip.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
