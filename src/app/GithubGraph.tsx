"use client";
import styles from "./GithubGraph.module.css";
import { useEffect, useState } from "react";

type SubmissionMap = Record<string, number>;

function getColor(count: number, theme: "light" | "dark"): string {
  if (count === 0) return theme === "light" ? "#ebedf0" : "#161b22";
  if (count <= 2) return "#d8b4fe";
  if (count <= 5) return "#a855f7";
  if (count <= 9) return "#7c3aed";
  return "#4c1d95";
}

function buildWeeks(data: SubmissionMap): { date: string; count: number }[][] {
  const today = new Date();
  const start = new Date(today);
  start.setFullYear(start.getFullYear() - 1);
  // rewind to nearest Sunday
  start.setDate(start.getDate() - start.getDay());

  const weeks: { date: string; count: number }[][] = [];
  let week: { date: string; count: number }[] = [];
  const cur = new Date(start);

  while (cur <= today) {
    const key = cur.toISOString().slice(0, 10);
    week.push({ date: key, count: data[key] ?? 0 });
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    cur.setDate(cur.getDate() + 1);
  }
  if (week.length) weeks.push(week);
  return weeks;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function GithubGraph() {
  const [data, setData] = useState<SubmissionMap | null>(null);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      setTheme(isLight ? "light" : "dark");
    };
    checkTheme();
    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        setData(json);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return (
    <div className={styles.graphContainer}>
      <p className={styles.note}>Could not load LeetCode activity.</p>
    </div>
  );

  if (!data) return (
    <div className={styles.graphContainer}>
      <p className={styles.note}>Loading...</p>
    </div>
  );

  const weeks = buildWeeks(data);
  const total = Object.values(data).reduce((a, b) => a + b, 0);

  // month labels: find first week where month changes
  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const m = new Date(week[0].date).getMonth();
    if (m !== lastMonth) {
      monthLabels.push({ label: MONTHS[m], col: i });
      lastMonth = m;
    }
  });

  const cellSize = 13;
  const gap = 3;
  const step = cellSize + gap;
  const svgW = weeks.length * step + 32;
  const svgH = 7 * step + 24;

  return (
    <div className={styles.graphContainer}>
      <div className={styles.calHeader}>
        <span className={styles.calTitle}>LeetCode Submissions</span>
        <span className={styles.calTotal}>{total} submissions in the last year</span>
      </div>
      <div className={styles.svgWrapper}>
        <svg width={svgW} height={svgH} className={styles.heatmap}>
          {/* month labels */}
          {monthLabels.map(({ label, col }) => (
            <text
              key={`${label}-${col}`}
              x={32 + col * step}
              y={10}
              fontSize={10}
              fill={theme === "light" ? "#57606a" : "#8b949e"}
            >
              {label}
            </text>
          ))}
          {/* day labels */}
          {[1, 3, 5].map((d) => (
            <text
              key={d}
              x={0}
              y={20 + d * step + cellSize * 0.8}
              fontSize={10}
              fill={theme === "light" ? "#57606a" : "#8b949e"}
            >
              {DAYS[d]}
            </text>
          ))}
          {/* cells */}
          {weeks.map((week, wi) =>
            week.map((day, di) => (
              <rect
                key={day.date}
                x={32 + wi * step}
                y={20 + di * step}
                width={cellSize}
                height={cellSize}
                rx={2}
                fill={getColor(day.count, theme)}
                className={styles.cell}
              >
                <title>{day.count} submissions on {day.date}</title>
              </rect>
            ))
          )}
        </svg>
      </div>
      <div className={styles.legend}>
        <span style={{ color: theme === "light" ? "#57606a" : "#8b949e", fontSize: 11 }}>Less</span>
        {[0, 1, 4, 8, 14].map((n) => (
          <rect
            key={n}
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              borderRadius: 2,
              background: getColor(n, theme),
              margin: "0 2px",
            }}
          />
        ))}
        <span style={{ color: theme === "light" ? "#57606a" : "#8b949e", fontSize: 11 }}>More</span>
      </div>
    </div>
  );
}
