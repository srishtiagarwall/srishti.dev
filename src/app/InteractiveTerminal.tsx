"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./InteractiveTerminal.module.css";

const fileSystem: Record<string, string> = {
  "backend.txt": "Node.js, NestJS, Express.js, FastAPI, Python, C/C++",
  "ai_ml.txt": "LangChain, LangGraph, Gemini 2.5 Flash, Imagen 3, Veo 3, XGBoost",
  "infra.txt": "AWS (S3, SQS, Lambda, EC2), Docker, Pulumi (IaC)",
  "databases.txt": "PostgreSQL, MySQL, MongoDB",
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<{ id: number; command: string; output: string | React.ReactElement }[]>([
    { id: 0, command: "", output: "Welcome to SrishtiOS v1.0.0. Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    let output: string | React.ReactElement = "";
    const args = cmd.split(" ");
    const mainCommand = args[0].toLowerCase();

    switch (mainCommand) {
      case "help":
        output = "Available commands: ls, cat <file>, whoami, clear, echo";
        break;
      case "ls":
        output = Object.keys(fileSystem).join("  ");
        break;
      case "cat":
        if (args[1] && fileSystem[args[1]]) {
          output = fileSystem[args[1]];
        } else if (!args[1]) {
          output = "cat: missing file operand";
        } else {
          output = `cat: ${args[1]}: No such file or directory`;
        }
        break;
      case "whoami":
        output = "Founding Engineer · Backend & AI Systems";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "echo":
        output = args.slice(1).join(" ");
        break;
      default:
        output = `Command not found: ${mainCommand}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { id: Date.now(), command: cmd, output }]);
    setInput("");
  };

  return (
    <div className={styles.terminalContainer} onClick={() => inputRef.current?.focus()}>
      <div className={styles.terminalHeader}>
        <div className={styles.macButtons}>
          <span className={styles.macRed}></span>
          <span className={styles.macYellow}></span>
          <span className={styles.macGreen}></span>
        </div>
        <div className={styles.terminalTitle}>bash -- srishti.dev</div>
      </div>
      <div className={styles.terminalBody} ref={containerRef}>
        {history.map((line) => (
          <div key={line.id} className={line.command ? styles.commandBlock : ""}>
            {line.command && (
              <div className={styles.promptLine}>
                <span className={styles.prompt}>guest@srishti:~$</span> {line.command}
              </div>
            )}
            <div className={styles.outputLine}>{line.output}</div>
          </div>
        ))}
        <form onSubmit={handleCommand} className={styles.inputForm}>
          <span className={styles.prompt}>guest@srishti:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
