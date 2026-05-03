import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { QuizAttempt } from "@/lib/storage";

interface ScoreChartProps {
  readonly history: readonly QuizAttempt[];
  readonly accentHex: string;
}

interface ChartPoint {
  readonly idx: number;
  readonly label: string;
  readonly pct: number;
  readonly score: number;
  readonly total: number;
  readonly filter: string;
  readonly durationSecs?: number;
}

function fmtDur(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  if (m === 0) return `${s}s`;
  return `${m}m${s > 0 ? ` ${s}s` : ""}`;
}

function shortDate(ts: number): string {
  try {
    return new Date(ts).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
    });
  } catch {
    return "";
  }
}

interface TooltipPayloadItem {
  readonly payload?: ChartPoint;
}

interface TooltipProps {
  readonly active?: boolean;
  readonly payload?: ReadonlyArray<TooltipPayloadItem>;
}

function CustomTooltip({ active, payload }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const point = payload[0]?.payload;
  if (!point) return null;
  return (
    <div className="rounded-lg border border-border-earth bg-surface px-3 py-2 text-[12px] text-text shadow-lg backdrop-blur-sm">
      <div className="font-semibold text-gold">Lượt #{point.idx}</div>
      <div className="text-text-dim">{point.label}</div>
      <div className="mt-1">
        <span className="font-semibold text-text">
          {point.score}/{point.total}
        </span>{" "}
        <span className="text-text-dim">({point.pct}%)</span>
      </div>
      {point.durationSecs !== undefined && point.durationSecs > 0 && (
        <div className="text-[11px] text-text-dim">⏱ {fmtDur(point.durationSecs)}</div>
      )}
      <div className="text-[11px] text-text-dim">{point.filter}</div>
    </div>
  );
}

export function ScoreChart({ history, accentHex }: ScoreChartProps) {
  const data = useMemo<readonly ChartPoint[]>(() => {
    const ordered = [...history].reverse();
    return ordered.map((entry, i) => ({
      idx: i + 1,
      label: shortDate(entry.timestamp),
      pct:
        entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0,
      score: entry.score,
      total: entry.total,
      filter: entry.filter,
      durationSecs: entry.durationSecs,
    }));
  }, [history]);

  if (data.length === 0) {
    return (
      <section
        aria-labelledby="chart-heading"
        className="my-5 rounded-xl border border-border-earth bg-surface px-5 py-4"
      >
        <h2
          id="chart-heading"
          className="m-0 mb-2 text-base font-bold text-gold"
        >
          📈 Biểu đồ tiến bộ
        </h2>
        <p className="m-0 text-[13px] text-text-dim">
          Hoàn thành ít nhất một lượt quiz để bắt đầu theo dõi điểm số của bạn
          theo thời gian.
        </p>
      </section>
    );
  }

  const avg = Math.round(
    data.reduce((sum, p) => sum + p.pct, 0) / data.length,
  );
  const best = Math.max(...data.map((p) => p.pct));
  const last = data[data.length - 1].pct;
  const showXLabels = data.length <= 12;

  return (
    <section
      aria-labelledby="chart-heading"
      className="my-5 rounded-xl border border-border-earth bg-surface px-5 py-4"
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
        <h2
          id="chart-heading"
          className="m-0 text-base font-bold text-gold"
        >
          📈 Biểu đồ tiến bộ ({data.length} lượt)
        </h2>
        <div className="flex flex-wrap gap-3 text-[12px] text-text-dim">
          <span>
            Mới nhất: <strong className="text-text">{last}%</strong>
          </span>
          <span>
            Trung bình: <strong className="text-text">{avg}%</strong>
          </span>
          <span>
            Cao nhất: <strong className="text-correct">{best}%</strong>
          </span>
        </div>
      </div>
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={[...data]}
            margin={{ top: 5, right: 12, bottom: 0, left: -12 }}
          >
            <CartesianGrid stroke="#1e2736" strokeDasharray="3 3" opacity={0.5} />
            <XAxis
              dataKey="idx"
              stroke="#475569"
              fontSize={11}
              tick={showXLabels ? { fill: "#94A3B8" } : false}
              tickLine={false}
              axisLine={{ stroke: "#1e2736" }}
            />
            <YAxis
              domain={[0, 100]}
              stroke="#475569"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: "#1e2736" }}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#6366F1", strokeWidth: 1, opacity: 0.4 }} />
            <ReferenceLine
              y={avg}
              stroke="#6366F1"
              strokeDasharray="4 4"
              opacity={0.5}
              label={{ value: `TB ${avg}%`, position: "right", fill: "#6366F1", fontSize: 10 }}
            />
            <Line
              type="monotone"
              dataKey="pct"
              stroke={accentHex}
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 1.5, fill: "#080B11", stroke: accentHex }}
              activeDot={{ r: 6, fill: accentHex, stroke: "#F8FAFC", strokeWidth: 1.5 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
