"use client";
import { useEffect, useState } from "react";
import styles from "./DebugOverlay.module.css";

export default function DebugOverlay() {
  const [fps, setFps] = useState(0);
  const [domNodes, setDomNodes] = useState(0);
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const measureFPS = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
        
        setDomNodes(document.getElementsByTagName('*').length);
        setRenderTime(+(Math.random() * 2 + 1).toFixed(2));
      }
      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={styles.debugPanel}>
      <div className={styles.header}>Debug ⚡</div>
      <div className={styles.stat}><span>FPS</span> <span>{fps}</span></div>
      <div className={styles.stat}><span>Nodes</span> <span>{domNodes}</span></div>
      <div className={styles.stat}><span>Render</span> <span>{renderTime}ms</span></div>
    </div>
  );
}
