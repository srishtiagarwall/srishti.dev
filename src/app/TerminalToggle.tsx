"use client";

import { Terminal } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function TerminalToggle() {
  const triggerTerminal = () => {
    window.dispatchEvent(new Event("toggle-terminal"));
  };

  return (
    <button 
      className={styles.toggleBtn} 
      onClick={triggerTerminal} 
      aria-label="Open Root Terminal"
      style={{ right: '4.5rem' }}
    >
      <Terminal size={18} />
    </button>
  );
}
