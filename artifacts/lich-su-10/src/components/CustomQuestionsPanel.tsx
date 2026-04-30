import { useState } from "react";
import {
  useCustomQuestions,
  type CustomQuestion,
  type SubjectId,
} from "@/lib/storage";

const CUSTOM_TAG = "Tự thêm";
const CUSTOM_TAG_COLOR = "#1A8B7A";

interface CustomQuestionsPanelProps {
  readonly subjectId: SubjectId;
  readonly availableTags: readonly string[];
  readonly tagColors: Record<string, string>;
}

interface FormState {
  readonly q: string;
  readonly opts: readonly [string, string, string, string];
  readonly ans: number;
  readonly explain: string;
  readonly tag: string;
}

const EMPTY_FORM: FormState = {
  q: "",
  opts: ["", "", "", ""],
  ans: 0,
  explain: "",
  tag: CUSTOM_TAG,
};

function trimAll(form: FormState) {
  return {
    q: form.q.trim(),
    opts: form.opts.map((o) => o.trim()) as readonly string[],
    explain: form.explain.trim(),
  };
}

function CustomQuestionItem({
  item,
  tagColors,
  onRemove,
}: {
  readonly item: CustomQuestion;
  readonly tagColors: Record<string, string>;
  readonly onRemove: () => void;
}) {
  const tagColor = tagColors[item.tag] ?? CUSTOM_TAG_COLOR;
  const correctLetter = String.fromCharCode(65 + item.ans);
  return (
    <li className="rounded-lg border border-border-earth bg-surface-2 px-3 py-2.5 text-[13px]">
      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
        <span
          className="rounded-full px-2 py-[2px] text-[10px] font-bold uppercase tracking-wider text-white"
          style={{ background: tagColor }}
        >
          {item.tag}
        </span>
        <button
          type="button"
          onClick={onRemove}
          aria-label="Xoá câu hỏi này"
          className="cursor-pointer rounded-md border border-border-earth bg-surface px-2 py-1 font-serif text-[11px] font-bold text-text-dim transition-colors duration-200 hover:border-wrong hover:text-wrong"
        >
          Xoá
        </button>
      </div>
      <p className="m-0 mb-1.5 leading-relaxed text-text whitespace-pre-line">
        {item.q}
      </p>
      <p className="m-0 text-[12px] leading-relaxed text-correct">
        <strong>Đáp án {correctLetter}:</strong> {item.opts[item.ans]}
      </p>
    </li>
  );
}

export function CustomQuestionsPanel({
  subjectId,
  availableTags,
  tagColors,
}: CustomQuestionsPanelProps) {
  const { items, add, remove } = useCustomQuestions(subjectId);
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);

  const tagOptions = [CUSTOM_TAG, ...availableTags];

  const updateOpt = (idx: number, value: string) => {
    setForm((f) => {
      const next: [string, string, string, string] = [...f.opts] as [
        string,
        string,
        string,
        string,
      ];
      next[idx] = value;
      return { ...f, opts: next };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = trimAll(form);
    if (!trimmed.q) {
      setError("Vui lòng nhập nội dung câu hỏi.");
      return;
    }
    if (trimmed.opts.some((o) => !o)) {
      setError("Vui lòng nhập đầy đủ 4 lựa chọn.");
      return;
    }
    if (!trimmed.explain) {
      setError("Vui lòng nhập phần giải thích.");
      return;
    }
    add({
      q: trimmed.q,
      opts: trimmed.opts,
      ans: form.ans,
      explain: trimmed.explain,
      tag: form.tag,
    });
    setForm(EMPTY_FORM);
    setError(null);
    setShowForm(false);
  };

  return (
    <section
      aria-labelledby="custom-q-heading"
      className="my-5 rounded-xl border border-border-earth bg-surface px-5 py-4"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="custom-q-body"
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-display text-base font-bold text-gold"
        >
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-200 ${
              open ? "rotate-90" : ""
            }`}
          >
            ▶
          </span>
          <span id="custom-q-heading">
            ✏️ Câu hỏi của bạn ({items.length})
          </span>
        </button>
        {open && (
          <button
            type="button"
            onClick={() => {
              setShowForm((v) => !v);
              setError(null);
            }}
            className="cursor-pointer rounded-md border-0 bg-gold px-3 py-1.5 font-serif text-xs font-bold text-bg transition-colors duration-200 hover:bg-gold/90"
          >
            {showForm ? "Đóng biểu mẫu" : "+ Thêm câu hỏi"}
          </button>
        )}
      </div>

      {!open && (
        <p className="m-0 text-[12px] leading-relaxed text-text-dim">
          Bạn có thể tự thêm câu hỏi của riêng mình. Câu hỏi sẽ được lưu trên
          thiết bị này và xuất hiện trong các bộ lọc quiz.
        </p>
      )}

      {open && (
        <div id="custom-q-body">
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mb-4 rounded-lg border border-gold/30 bg-surface-2 p-4"
            >
              <div className="mb-3">
                <label
                  htmlFor="cq-q"
                  className="mb-1 block text-[12px] font-bold text-gold"
                >
                  Câu hỏi
                </label>
                <textarea
                  id="cq-q"
                  value={form.q}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, q: e.target.value }))
                  }
                  rows={3}
                  required
                  className="w-full rounded-md border border-border-earth bg-bg p-2 font-serif text-sm text-text"
                  placeholder="Nhập câu hỏi…"
                />
              </div>

              <fieldset className="mb-3">
                <legend className="mb-1.5 text-[12px] font-bold text-gold">
                  Lựa chọn (chọn đáp án đúng)
                </legend>
                {form.opts.map((opt, i) => {
                  const letter = String.fromCharCode(65 + i);
                  return (
                    <div
                      key={i}
                      className="mb-2 flex items-center gap-2 last:mb-0"
                    >
                      <label className="flex shrink-0 cursor-pointer items-center gap-1.5 text-[12px] font-bold text-text-dim">
                        <input
                          type="radio"
                          name="cq-ans"
                          checked={form.ans === i}
                          onChange={() => setForm((f) => ({ ...f, ans: i }))}
                          aria-label={`Đáp án đúng là ${letter}`}
                        />
                        {letter}
                      </label>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => updateOpt(i, e.target.value)}
                        required
                        className="flex-1 rounded-md border border-border-earth bg-bg px-2 py-1.5 font-serif text-sm text-text"
                        placeholder={`Lựa chọn ${letter}`}
                      />
                    </div>
                  );
                })}
              </fieldset>

              <div className="mb-3">
                <label
                  htmlFor="cq-ex"
                  className="mb-1 block text-[12px] font-bold text-gold"
                >
                  Giải thích
                </label>
                <textarea
                  id="cq-ex"
                  value={form.explain}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, explain: e.target.value }))
                  }
                  rows={2}
                  required
                  className="w-full rounded-md border border-border-earth bg-bg p-2 font-serif text-sm text-text"
                  placeholder="Giải thích vì sao đáp án này đúng…"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="cq-tag"
                  className="mb-1 block text-[12px] font-bold text-gold"
                >
                  Chủ đề
                </label>
                <select
                  id="cq-tag"
                  value={form.tag}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, tag: e.target.value }))
                  }
                  className="w-full rounded-md border border-border-earth bg-bg px-2 py-1.5 font-serif text-sm text-text"
                >
                  {tagOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p
                  role="alert"
                  className="m-0 mb-2 rounded-md border border-wrong/40 bg-wrong-bg/40 px-3 py-1.5 text-[12px] text-wrong"
                >
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                <button
                  type="submit"
                  className="cursor-pointer rounded-md border-0 bg-gold px-4 py-1.5 font-serif text-sm font-bold text-bg"
                >
                  Lưu câu hỏi
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setError(null);
                    setShowForm(false);
                  }}
                  className="cursor-pointer rounded-md border border-border-earth bg-surface px-4 py-1.5 font-serif text-sm font-bold text-text-dim"
                >
                  Huỷ
                </button>
              </div>
            </form>
          )}

          {items.length === 0 ? (
            <p className="m-0 text-[12px] leading-relaxed text-text-dim">
              Bạn chưa thêm câu hỏi nào. Bấm "+ Thêm câu hỏi" để tạo câu hỏi
              mới — sẽ được lưu ngay trên thiết bị này.
            </p>
          ) : (
            <ol className="m-0 flex list-none flex-col gap-2.5 p-0">
              {items.map((item) => (
                <CustomQuestionItem
                  key={item.id}
                  item={item}
                  tagColors={{ [CUSTOM_TAG]: CUSTOM_TAG_COLOR, ...tagColors }}
                  onRemove={() => remove(item.id)}
                />
              ))}
            </ol>
          )}
        </div>
      )}
    </section>
  );
}
