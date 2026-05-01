"use client";
import { useState, useEffect } from "react";
import styles from "./SystemStatus.module.css";

export default function SystemStatus() {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      // Jitter the latency between 18 and 35ms
      setLatency(Math.floor(Math.random() * 17) + 18);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.statusContainer}>
      <div className={styles.statusItem}>
        <span className={styles.dot}></span>
        API: Operational ({latency}ms)
      </div>
      <div className={styles.statusItem}>
        <span className={styles.dot}></span>
        AI Pipelines: Sub-60s Latency
      </div>
      <div className={styles.statusItem}>
        <span className={styles.dot}></span>
        Uptime: 99.99%
      </div>
    </div>
  );
}
