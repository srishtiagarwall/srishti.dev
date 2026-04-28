"use client";
import { useEffect, useRef, useState } from "react";
import { Bug } from "lucide-react";
import styles from "./DevCursor.module.css";

export default function DevCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setIsVisible(true);
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      trailX += (mouseX - trailX) * 0.08; // smoother lag
      trailY += (mouseY - trailY) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={trailRef} className={`${styles.trail} ${isPointer ? styles.trailPointer : ""}`}>
        <div className={styles.webCircle1}></div>
        <div className={styles.webCircle2}></div>
        <div className={styles.webCircle3}></div>
      </div>
      <div ref={cursorRef} className={styles.cursor}>
        <Bug size={16} className={styles.bugIcon} />
      </div>
    </>
  );
}
