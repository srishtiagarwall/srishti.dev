"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./EasterEgg.module.css";

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "SrishtiOS v2.0-beta [root mode]",
    "Initializing root access...",
    "Access granted.",
    "Type 'help' to see available commands, or 'exit' to return to GUI mode."
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleToggle = () => setActive(true);
    window.addEventListener("toggle-terminal", handleToggle);

    let keyBuffer = "";
    const secretCode = "sudo";
    
    const onKeyDown = (e: KeyboardEvent) => {
      if (active) return;
      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);
      
      if (keyBuffer.includes(secretCode)) {
        setActive(true);
        keyBuffer = "";
      }
    };
    
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("toggle-terminal", handleToggle);
    };
  }, [active]);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus();
    }
  }, [active]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    let out = "";
    if (cmd === "exit") {
      setActive(false);
      setInput("");
      return;
    } else if (cmd === "whoami") {
      out = "root";
    } else if (cmd === "ls") {
      out = "resume.json  secrets.txt  bin  etc";
    } else if (cmd === "help") {
      out = "Available commands:\n  ls         - List directory contents\n  cat [file] - Print file contents\n  whoami     - Print current user\n  help       - Print this message\n  clear      - Clear the terminal screen\n  exit       - Close the terminal";
    } else if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    } else if (cmd === "cat secrets.txt") {
      out = "The secret to success is deploying on Fridays.";
    } else if (cmd === "cat resume.json") {
      out = '{\n  "name": "Srishti Agarwal",\n  "role": "Founding Engineer",\n  "status": "Ready to build"\n}';
    } else {
      out = `bash: ${cmd}: command not found`;
    }

    setLogs((prev) => [...prev, `root@srishti.dev:~# ${cmd}`, out]);
    setInput("");
  };

  if (!active) return null;

  return (
    <div className={styles.terminalOverlay} onClick={() => inputRef.current?.focus()}>
      <div className={styles.content}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
        <form onSubmit={handleCommand} className={styles.form}>
          <span>root@srishti.dev:~# </span>
          <input 
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={e => setInput(e.target.value)}
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
