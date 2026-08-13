"use client";
import { useState } from "react";
import styles from "./MobileNav.module.css";

const links = [
  { label: "home", href: "#home" },
  { label: "summary", href: "#summary" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "leetcode", href: "#leetcode" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileNav}>
      <button className={styles.burger} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
        <span className={open ? styles.barTop : styles.bar} />
        <span className={open ? styles.barMid : styles.bar} />
        <span className={open ? styles.barBot : styles.bar} />
      </button>
      {open && (
        <div className={styles.drawer}>
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              // {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
