"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { FileText, Code, Home, Briefcase, Mail, Moon, Sun, Terminal } from "lucide-react";
import styles from "./CommandPalette.module.css";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setOpen(false);
  };

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    setOpen(false);
  };

  const openLink = (url: string) => {
    window.open(url, "_blank");
    setOpen(false);
  };

  if (!open || !mounted) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <Command>
          <Command.Input placeholder="Type a command or search..." className={styles.input} />

          <Command.List className={styles.list}>
            <Command.Empty className={styles.empty}>No results found.</Command.Empty>

            <Command.Group heading="Navigation">
              <Command.Item onSelect={() => navigateTo("#home")} className={styles.item}>
                <Home size={16} className={styles.icon} /> Home
              </Command.Item>
              <Command.Item onSelect={() => navigateTo("#summary")} className={styles.item}>
                <Terminal size={16} className={styles.icon} /> Summary
              </Command.Item>
              <Command.Item onSelect={() => navigateTo("#skills")} className={styles.item}>
                <Terminal size={16} className={styles.icon} /> Skills
              </Command.Item>
              <Command.Item onSelect={() => navigateTo("#experience")} className={styles.item}>
                <FileText size={16} className={styles.icon} /> Experience
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Theme">
              <Command.Item onSelect={() => toggleTheme("light")} className={styles.item}>
                <Sun size={16} className={styles.icon} /> Light Mode
              </Command.Item>
              <Command.Item onSelect={() => toggleTheme("dark")} className={styles.item}>
                <Moon size={16} className={styles.icon} /> Dark Mode
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Links">
              <Command.Item onSelect={() => openLink("mailto:hello@srishti.dev")} className={styles.item}>
                <Mail size={16} className={styles.icon} /> Email Me
              </Command.Item>
              <Command.Item onSelect={() => openLink("https://github.com")} className={styles.item}>
                <Code size={16} className={styles.icon} /> GitHub
              </Command.Item>
              <Command.Item onSelect={() => openLink("https://linkedin.com")} className={styles.item}>
                <Briefcase size={16} className={styles.icon} /> LinkedIn
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
