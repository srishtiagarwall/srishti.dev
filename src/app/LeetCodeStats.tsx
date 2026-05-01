"use client";
import { useEffect, useState } from "react";
import styles from "./LeetCodeStats.module.css";

type Stats = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

export default function LeetCodeStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/leetcode-stats")
      .then((r) => r.json())
      .then((d) => { if (!d.error) setStats(d); })
      .catch(() => {});
  }, []);

  if (!stats) return null;

  const total = stats.solvedProblem;
  const easyPct = (stats.easySolved / total) * 100;
  const medPct = (stats.mediumSolved / total) * 100;
  const hardPct = (stats.hardSolved / total) * 100;

  return (
    <div className={styles.statsRow}>
      <div className={styles.totalBox}>
        <span className={styles.totalNum}>{total}</span>
        <span className={styles.totalLabel}>solved</span>
      </div>
      <div className={styles.breakdown}>
        <div className={styles.diffRow}>
          <span className={styles.easy}>Easy</span>
          <div className={styles.bar}><div className={styles.barFill} style={{ width: `${easyPct}%`, background: "#22c55e" }} /></div>
          <span className={styles.count}>{stats.easySolved}</span>
        </div>
        <div className={styles.diffRow}>
          <span className={styles.medium}>Medium</span>
          <div className={styles.bar}><div className={styles.barFill} style={{ width: `${medPct}%`, background: "#f59e0b" }} /></div>
          <span className={styles.count}>{stats.mediumSolved}</span>
        </div>
        <div className={styles.diffRow}>
          <span className={styles.hard}>Hard</span>
          <div className={styles.bar}><div className={styles.barFill} style={{ width: `${hardPct}%`, background: "#ef4444" }} /></div>
          <span className={styles.count}>{stats.hardSolved}</span>
        </div>
      </div>
    </div>
  );
}
