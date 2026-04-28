"use client";
import { GitHubCalendar } from "react-github-calendar";
import styles from "./GithubGraph.module.css";
import { useEffect, useState } from "react";

export default function GithubGraph() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      setTheme(isLight ? "light" : "dark");
    };
    checkTheme();
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") checkTheme();
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.graphContainer}>
      <GitHubCalendar 
        username="octocat" 
        colorScheme={theme}
        fontSize={14}
        blockSize={14}
        blockMargin={4}
      />
      <p className={styles.note}>* Showing 'octocat' as a placeholder. Update the username prop in src/app/GithubGraph.tsx with your actual GitHub username!</p>
    </div>
  );
}
