import { useState, type CSSProperties } from "react";
import { sections } from "./data/sections";
import { quizData } from "./data/quiz";
import type { AnswerEntry } from "./types";

const QUIZ_LEN = quizData.length;
const TH_EXCELLENT = Math.round(QUIZ_LEN * 0.85);
const TH_GOOD = Math.round(QUIZ_LEN * 0.7);
const TH_PASS = Math.round(QUIZ_LEN * 0.5);

const summaryItems: [string, string][] = [
  ["C1", "4 phát biểu kiểu dinh dưỡng VSV → 2 đúng (statements 2 & 3)"],
  ["C5", "Vi khuẩn lactic, nấm men, trùng roi, trùng giày, tảo silic = 5 VSV"],
  ["C9", "Phân loại kiểu dinh dưỡng VSV theo: nguồn năng lượng + nguồn carbon"],
  ["C14", "Nuôi cấy không liên tục → 4 pha"],
  ["C17", "Thu sinh khối tối đa: ĐẦU pha cân bằng"],
  ["C20", "Thời gian thế hệ: TB tăng GẤP ĐÔI"],
  ["C26", "Diauxie: glucose trước, sorbitol sau (2 lần lag-log)"],
  ["C27", "Hầu hết kháng sinh sản xuất bởi XẠ KHUẨN"],
  ["C29", "Kháng sinh ≠ diệt khuẩn ở tính CHỌN LỌC"],
  ["C31", "Tủ lạnh KÌM HÃM (không tiêu diệt) VSV"],
  ["C41", "Cấu tạo chính virus: nucleic acid + vỏ capsid"],
  ["C44", "Chu trình nhân lên virus: 5 giai đoạn"],
  ["C47", "Tiết enzyme phá màng tan tế bào → là cách của virus TRẦN"],
  ["C50", "Đặc hiệu vật chủ: thụ thể virus khớp với phân tử bề mặt tế bào"],
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplain, setShowExplain] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<AnswerEntry[]>([]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplain(true);
    const correct = idx === quizData[currentQ].answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { q: currentQ, selected: idx, correct }]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= QUIZ_LEN) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplain(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowExplain(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  if (quizMode) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f0f1a",
          color: "#e8e0d0",
          fontFamily: "'Georgia', serif",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button
            onClick={() => {
              setQuizMode(false);
              resetQuiz();
            }}
            style={{
              background: "none",
              border: "1px solid #555",
              color: "#aaa",
              padding: "8px 16px",
              borderRadius: 6,
              cursor: "pointer",
              marginBottom: 20,
              fontSize: 13,
            }}
          >
            ← Quay lại ôn tập
          </button>

          {finished ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>
                {score >= TH_EXCELLENT
                  ? "🏆"
                  : score >= TH_GOOD
                  ? "🎯"
                  : score >= TH_PASS
                  ? "📚"
                  : "💪"}
              </div>
              <h2 style={{ color: "#f0c040", fontSize: 28, marginBottom: 8 }}>
                Kết quả kiểm tra
              </h2>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: "bold",
                  color:
                    score >= TH_EXCELLENT
                      ? "#2ecc71"
                      : score >= TH_GOOD
                      ? "#f0c040"
                      : "#e74c3c",
                  marginBottom: 8,
                }}
              >
                {score}/{QUIZ_LEN}
              </div>
              <div style={{ color: "#aaa", marginBottom: 24, fontSize: 16 }}>
                {score >= TH_EXCELLENT
                  ? "Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức."
                  : score >= TH_GOOD
                  ? "Tốt! Cần ôn thêm một vài điểm."
                  : score >= TH_PASS
                  ? "Trung bình. Hãy xem lại lý thuyết!"
                  : "Cần ôn tập nhiều hơn."}
              </div>
              <div
                style={{
                  background: "#1a1a2e",
                  borderRadius: 12,
                  padding: "16px",
                  marginBottom: 24,
                  textAlign: "left",
                  maxHeight: 300,
                  overflowY: "auto",
                }}
              >
                {answers.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 6,
                      fontSize: 13,
                      color: a.correct ? "#2ecc71" : "#e74c3c",
                    }}
                  >
                    <span>{a.correct ? "✓" : "✗"}</span>
                    <span>
                      Câu {i + 1}:{" "}
                      {a.correct
                        ? "Đúng"
                        : `Sai (Đáp án đúng: ${String.fromCharCode(
                            65 + quizData[i].answer,
                          )})`}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={resetQuiz}
                style={{
                  background: "#3498db",
                  color: "white",
                  border: "none",
                  padding: "12px 32px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 16,
                  marginRight: 12,
                }}
              >
                Làm lại
              </button>
              <button
                onClick={() => {
                  setQuizMode(false);
                  resetQuiz();
                }}
                style={{
                  background: "#555",
                  color: "white",
                  border: "none",
                  padding: "12px 32px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                Xem lý thuyết
              </button>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <span style={{ color: "#aaa", fontSize: 13 }}>
                  Câu {currentQ + 1} / {QUIZ_LEN}
                </span>
                <span style={{ color: "#f0c040", fontSize: 13 }}>
                  Điểm: {score}
                </span>
              </div>
              <div
                style={{
                  background: "#1a1a30",
                  borderRadius: 12,
                  padding: "10px 0",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    height: 4,
                    background: "#3498db",
                    width: `${(currentQ / QUIZ_LEN) * 100}%`,
                    borderRadius: 4,
                    transition: "width 0.3s",
                  }}
                />
              </div>
              <div
                style={{
                  background: "#1a1a30",
                  borderRadius: 16,
                  padding: "24px",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#e8e0d0",
                    margin: 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {quizData[currentQ].q}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {quizData[currentQ].options.map((opt, idx) => {
                  let bg = "#1e1e3a";
                  let border = "#333";
                  let col = "#e8e0d0";
                  if (selected !== null) {
                    if (idx === quizData[currentQ].answer) {
                      bg = "#1a3a1a";
                      border = "#2ecc71";
                      col = "#2ecc71";
                    } else if (
                      idx === selected &&
                      selected !== quizData[currentQ].answer
                    ) {
                      bg = "#3a1a1a";
                      border = "#e74c3c";
                      col = "#e74c3c";
                    }
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      style={{
                        background: bg,
                        border: `2px solid ${border}`,
                        color: col,
                        padding: "14px 18px",
                        borderRadius: 10,
                        cursor: selected !== null ? "default" : "pointer",
                        textAlign: "left",
                        fontSize: 14,
                        lineHeight: 1.5,
                        transition: "all 0.2s",
                      }}
                    >
                      <strong style={{ marginRight: 8 }}>
                        {String.fromCharCode(65 + idx)}.
                      </strong>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {showExplain && (
                <div
                  style={{
                    marginTop: 16,
                    background: "#1a2a1a",
                    border: "1px solid #2ecc71",
                    borderRadius: 10,
                    padding: "16px",
                  }}
                >
                  <strong style={{ color: "#2ecc71" }}>💡 Giải thích:</strong>
                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "#ccc",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {quizData[currentQ].explain}
                  </p>
                  <button
                    onClick={nextQuestion}
                    style={{
                      marginTop: 14,
                      background: "#3498db",
                      color: "white",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >
                    {currentQ + 1 >= QUIZ_LEN
                      ? "Xem kết quả →"
                      : "Câu tiếp theo →"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        color: "#e8e0d0",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a0a2e 0%, #0d1a3a 50%, #0a2a1a 100%)",
          padding: "32px 24px",
          textAlign: "center",
          borderBottom: "1px solid #2a2a4a",
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "#888",
            letterSpacing: 3,
            marginBottom: 8,
          }}
        >
          MÔN SINH HỌC 10 • KẾT NỐI TRI THỨC
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: "bold",
            color: "#f0e0a0",
            letterSpacing: 1,
          }}
        >
          📋 ĐỀ CƯƠNG ÔN TẬP HỌC KÌ 2
        </h1>
        <div style={{ color: "#aaa", fontSize: 13, marginTop: 8 }}>
          Năm học 2025 – 2026 • Tổng hợp toàn bộ {QUIZ_LEN} câu hỏi luyện tập
        </div>
        <button
          onClick={() => setQuizMode(true)}
          style={{
            marginTop: 20,
            background: "linear-gradient(135deg, #f0c040, #e07020)",
            color: "#1a0a00",
            border: "none",
            padding: "12px 32px",
            borderRadius: 30,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: 0.5,
          }}
        >
          🎯 Bắt đầu kiểm tra trắc nghiệm ({QUIZ_LEN} câu)
        </button>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px" }}>
        {sections.map((section) => (
          <div
            key={section.id}
            style={{
              marginBottom: 24,
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${section.accent}40`,
            }}
          >
            {/* Section Header */}
            <button
              onClick={() =>
                setActiveSection(activeSection === section.id ? null : section.id)
              }
              style={{
                width: "100%",
                background: `linear-gradient(135deg, ${section.color}cc, ${section.color}88)`,
                border: "none",
                color: "white",
                padding: "18px 24px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <span
                style={{ fontSize: 18, fontWeight: "bold", letterSpacing: 0.5 }}
              >
                {section.icon} {section.title}
              </span>
              <span style={{ fontSize: 20, color: section.accent }}>
                {activeSection === section.id ? "▲" : "▼"}
              </span>
            </button>

            {activeSection === section.id && (
              <div style={{ background: "#111128", padding: "20px" }}>
                {section.content.map((block, bi) => (
                  <div key={bi} style={{ marginBottom: 28 }}>
                    <h3
                      style={{
                        color: section.accent,
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 14,
                        borderBottom: `1px solid ${section.accent}30`,
                        paddingBottom: 8,
                      }}
                    >
                      {block.subtitle}
                    </h3>

                    {block.type === "formulas" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              background: "#1a1a30",
                              borderLeft: `3px solid ${section.accent}`,
                              padding: "12px 16px",
                              borderRadius: "0 8px 8px 0",
                            }}
                          >
                            <div
                              style={{
                                color: "#aaa",
                                fontSize: 13,
                                marginBottom: 4,
                              }}
                            >
                              {item.label}
                            </div>
                            <div
                              style={{
                                color: "#f0e0a0",
                                fontSize: 16,
                                fontWeight: "bold",
                              }}
                            >
                              {item.formula}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "table" && (
                      <div style={{ overflowX: "auto" }}>
                        <table
                          style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            fontSize: 14,
                          }}
                        >
                          <thead>
                            <tr>
                              {block.headers.map((h, i) => (
                                <th
                                  key={i}
                                  style={{
                                    background: section.color,
                                    color: "white",
                                    padding: "10px 12px",
                                    textAlign: "center",
                                    border: "1px solid #333",
                                  }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, ri) => (
                              <tr
                                key={ri}
                                style={{
                                  background:
                                    ri % 2 === 0 ? "#151528" : "#1a1a30",
                                }}
                              >
                                {row.map((cell, ci) => (
                                  <td
                                    key={ci}
                                    style={{
                                      padding: "9px 12px",
                                      border: "1px solid #2a2a4a",
                                      textAlign: ci === 0 ? "left" : "left",
                                      color: ci === 0 ? "#e8d080" : "#ccc",
                                      verticalAlign: "top",
                                    }}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {block.type === "table2col" && (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 12,
                        }}
                      >
                        {[block.gp1, block.gp2].map((gp, gi) => (
                          <div key={gi}>
                            <div
                              style={{
                                background: section.color,
                                color: "white",
                                textAlign: "center",
                                padding: "8px",
                                fontWeight: "bold",
                                borderRadius: "8px 8px 0 0",
                                fontSize: 14,
                              }}
                            >
                              {gp.label}
                            </div>
                            <table
                              style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                fontSize: 12,
                              }}
                            >
                              <thead>
                                <tr>
                                  {block.headers.map((h, i) => (
                                    <th
                                      key={i}
                                      style={{
                                        background: "#1a1a40",
                                        color: "#ccc",
                                        padding: "7px 6px",
                                        textAlign: "center",
                                        border: "1px solid #333",
                                        fontSize: 11,
                                      }}
                                    >
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {gp.rows.map((row, ri) => (
                                  <tr
                                    key={ri}
                                    style={{
                                      background:
                                        ri % 2 === 0 ? "#151528" : "#1a1a30",
                                    }}
                                  >
                                    {row.map((cell, ci) => (
                                      <td
                                        key={ci}
                                        style={{
                                          padding: "7px 6px",
                                          border: "1px solid #2a2a4a",
                                          textAlign: "center",
                                          color: ci === 0 ? "#e8d080" : "#ccc",
                                          fontSize: 12,
                                        }}
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "list" && (
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {block.items.map((item, i) => {
                          const isWarn = item.startsWith("⚠️");
                          const li: CSSProperties = {
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                            background: isWarn ? "#2a1a0a" : "#151528",
                            padding: "11px 14px",
                            borderRadius: 8,
                            fontSize: 14,
                            lineHeight: 1.6,
                            border: isWarn
                              ? "1px solid #c0801080"
                              : "1px solid #2a2a4a",
                          };
                          return (
                            <li key={i} style={li}>
                              <span
                                style={{
                                  minWidth: 18,
                                  color: isWarn ? "#f0a040" : section.accent,
                                  marginTop: 1,
                                }}
                              >
                                {isWarn ? "" : "•"}
                              </span>
                              <span
                                style={{ color: isWarn ? "#f0c080" : "#ddd" }}
                              >
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {block.type === "tips" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              background: "#1a2a1a",
                              borderLeft: `3px solid #2ecc71`,
                              padding: "10px 14px",
                              borderRadius: "0 8px 8px 0",
                              fontSize: 13,
                              lineHeight: 1.6,
                              color: "#c8e8c8",
                            }}
                          >
                            💡 {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "nutrition" && (
                      <div>
                        <p
                          style={{
                            color: "#aaa",
                            fontSize: 13,
                            marginBottom: 12,
                            fontStyle: "italic",
                          }}
                        >
                          📌 {block.note}
                        </p>
                        <div style={{ overflowX: "auto" }}>
                          <table
                            style={{
                              width: "100%",
                              borderCollapse: "collapse",
                              fontSize: 13,
                            }}
                          >
                            <thead>
                              <tr>
                                {[
                                  "Kiểu dinh dưỡng",
                                  "Nguồn năng lượng",
                                  "Nguồn carbon",
                                  "Đại diện",
                                ].map((h) => (
                                  <th
                                    key={h}
                                    style={{
                                      background: section.color,
                                      color: "white",
                                      padding: "10px",
                                      border: "1px solid #333",
                                      textAlign: "left",
                                    }}
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.table.map((row, i) => (
                                <tr
                                  key={i}
                                  style={{
                                    background:
                                      i % 2 === 0 ? "#151528" : "#1a1a30",
                                  }}
                                >
                                  <td
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #2a2a4a",
                                      color: "#f0e090",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {row.kieu}
                                  </td>
                                  <td
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #2a2a4a",
                                      color: "#ccc",
                                    }}
                                  >
                                    {row.nangluong}
                                  </td>
                                  <td
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #2a2a4a",
                                      color: "#ccc",
                                    }}
                                  >
                                    {row.carbon}
                                  </td>
                                  <td
                                    style={{
                                      padding: "10px",
                                      border: "1px solid #2a2a4a",
                                      color: "#b8e0b8",
                                      fontSize: 12,
                                    }}
                                  >
                                    {row.daidien}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {block.type === "compare" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {block.items.map((item, i) => {
                          const palette = [
                            { bg: "#1a1a30", col: "#aaa", icon: "🔗" },
                            { bg: "#1a2a3a", col: "#3498db", icon: "🔵" },
                            { bg: "#2a1a1a", col: "#e74c3c", icon: "🔴" },
                          ];
                          const p = palette[i % palette.length];
                          return (
                            <div
                              key={i}
                              style={{
                                background: p.bg,
                                borderRadius: 10,
                                padding: "14px",
                              }}
                            >
                              <div
                                style={{
                                  color: p.col,
                                  fontWeight: "bold",
                                  marginBottom: 8,
                                  fontSize: 14,
                                }}
                              >
                                {p.icon} {item.title}
                              </div>
                              {item.points.map((pt, pi) => (
                                <div
                                  key={pi}
                                  style={{
                                    display: "flex",
                                    gap: 8,
                                    marginBottom: 6,
                                    fontSize: 13,
                                    color: "#ccc",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  <span
                                    style={{
                                      minWidth: 16,
                                      color: section.accent,
                                    }}
                                  >
                                    →
                                  </span>
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {block.type === "steps" && (
                      <div style={{ position: "relative" }}>
                        {block.items.map((item, i) => (
                          <div
                            key={i}
                            style={{ display: "flex", gap: 16, marginBottom: 16 }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: 36,
                                  height: 36,
                                  borderRadius: "50%",
                                  background: section.color,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontWeight: "bold",
                                  fontSize: 15,
                                  color: "white",
                                  flexShrink: 0,
                                }}
                              >
                                {item.step}
                              </div>
                              {i < block.items.length - 1 && (
                                <div
                                  style={{
                                    width: 2,
                                    flex: 1,
                                    background: `${section.accent}40`,
                                    margin: "4px 0",
                                  }}
                                />
                              )}
                            </div>
                            <div
                              style={{
                                background: "#151528",
                                borderRadius: 10,
                                padding: "12px 16px",
                                flex: 1,
                                border: `1px solid ${section.accent}30`,
                              }}
                            >
                              <div
                                style={{
                                  color: section.accent,
                                  fontWeight: "bold",
                                  marginBottom: 6,
                                  fontSize: 14,
                                }}
                              >
                                {item.name}
                              </div>
                              <div
                                style={{
                                  color: "#ccc",
                                  fontSize: 13,
                                  lineHeight: 1.6,
                                }}
                              >
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "tip-box" && (
                      <div
                        style={{
                          background: "#1a1a10",
                          border: "1px solid #c0a020",
                          borderRadius: 10,
                          padding: "16px",
                          fontSize: 14,
                          color: "#e8d080",
                          lineHeight: 1.7,
                        }}
                      >
                        ⚠️ <strong>Lưu ý quan trọng:</strong> {block.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Quick Reference */}
        <div
          style={{
            background: "#1a1a10",
            border: "1px solid #c0a02060",
            borderRadius: 16,
            padding: "20px",
            marginTop: 8,
          }}
        >
          <h3 style={{ color: "#f0c040", marginTop: 0, marginBottom: 16 }}>
            📌 Điểm chính trong đề cương ({QUIZ_LEN} câu)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            {summaryItems.map(([num, ans]) => (
              <div
                key={num}
                style={{
                  background: "#111",
                  borderRadius: 8,
                  padding: "10px 12px",
                  fontSize: 12,
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: "#f0c040",
                    fontWeight: "bold",
                    minWidth: 28,
                  }}
                >
                  {num}:
                </span>
                <span style={{ color: "#ccc" }}>{ans}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 24,
            color: "#555",
            fontSize: 12,
          }}
        >
          Sinh học 10 – Kết nối tri thức • Học kì 2 – 2025/2026
        </div>
      </div>
    </div>
  );
}
