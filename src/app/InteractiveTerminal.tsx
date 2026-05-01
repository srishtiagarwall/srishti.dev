"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./InteractiveTerminal.module.css";

const fileSystem: Record<string, string> = {
  "backend.txt": "Node.js, NestJS, Express.js, FastAPI, Python, C/C++",
  "ai_ml.txt": "LangChain, LangGraph, Gemini 2.5 Flash, Imagen 3, Veo 3, XGBoost",
  "infra.txt": "AWS (S3, SQS, Lambda, EC2), Docker, Pulumi (IaC)",
  "databases.txt": "PostgreSQL, MySQL, MongoDB",
};

const WELCOME = "Welcome to SrishtiOS v1.0.0. Type 'help' to see available commands.";

type HistoryEntry = { id: number; command: string; output: React.ReactNode };

function HelpOutput() {
  const cmds = [
    { cmd: "ls", desc: "list files in current directory" },
    { cmd: "cat <file>", desc: "print file contents" },
    { cmd: "whoami", desc: "current user info" },
    { cmd: "pwd", desc: "print working directory" },
    { cmd: "date", desc: "print current date" },
    { cmd: "skills", desc: "show all skills at a glance" },
    { cmd: "echo <text>", desc: "print text to terminal" },
    { cmd: "clear", desc: "clear the terminal" },
  ];
  return (
    <div className={styles.helpGrid}>
      {cmds.map(({ cmd, desc }) => (
        <div key={cmd} className={styles.helpRow}>
          <span className={styles.helpCmd}>{cmd}</span>
          <span className={styles.helpDesc}>{desc}</span>
        </div>
      ))}
    </div>
  );
}

function LsOutput() {
  return (
    <div className={styles.lsOutput}>
      {Object.keys(fileSystem).map((f) => (
        <span key={f} className={styles.lsFile}>{f}</span>
      ))}
    </div>
  );
}

function SkillsOutput() {
  return (
    <div className={styles.skillsOutput}>
      {Object.entries(fileSystem).map(([file, value]) => (
        <div key={file} className={styles.skillRow}>
          <span className={styles.skillCategory}>{file.replace(".txt", "").replace("_", "/")}:</span>
          <span className={styles.skillValues}>{value}</span>
        </div>
      ))}
    </div>
  );
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { id: 0, command: "", output: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = useCallback((cmd: string) => {
    const args = cmd.trim().split(" ");
    const main = args[0].toLowerCase();
    let output: React.ReactNode = "";

    switch (main) {
      case "help":
        output = <HelpOutput />;
        break;
      case "ls":
        output = <LsOutput />;
        break;
      case "cat":
        if (!args[1]) {
          output = "cat: missing file operand";
        } else if (fileSystem[args[1]]) {
          output = fileSystem[args[1]];
        } else {
          output = `cat: ${args[1]}: No such file or directory`;
        }
        break;
      case "whoami":
        output = "Srishti Agarwal — Founding Engineer · Backend & AI Systems @ GrowthZ AI";
        break;
      case "pwd":
        output = "/home/srishti/portfolio";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "skills":
        output = <SkillsOutput />;
        break;
      case "echo":
        output = args.slice(1).join(" ") || "";
        break;
      case "clear":
        setHistory([{ id: Date.now(), command: "", output: WELCOME }]);
        return;
      case "":
        return;
      default:
        output = (
          <span>
            <span className={styles.errorText}>command not found: {main}</span>
            {" — type "}
            <span className={styles.helpHint}>help</span>
            {" for available commands"}
          </span>
        );
    }

    setHistory((prev) => [...prev, { id: Date.now(), command: cmd, output }]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;
    setCmdHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);
    runCommand(cmd);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        setInput(cmdHistory[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = prev - 1;
        if (next < 0) {
          setInput("");
          return -1;
        }
        setInput(cmdHistory[next] ?? "");
        return next;
      });
    }
  };

  return (
    <div className={styles.terminalContainer} onClick={() => inputRef.current?.focus()}>
      <div className={styles.terminalHeader}>
        <div className={styles.macButtons}>
          <span className={styles.macRed} />
          <span className={styles.macYellow} />
          <span className={styles.macGreen} />
        </div>
        <div className={styles.terminalTitle}>bash — srishti.dev</div>
      </div>
      <div className={styles.terminalBody} ref={containerRef}>
        {history.map((line) => (
          <div key={line.id} className={line.command ? styles.commandBlock : ""}>
            {line.command && (
              <div className={styles.promptLine}>
                <span className={styles.prompt}>guest@srishti:~$</span>
                <span className={styles.enteredCmd}>{line.command}</span>
              </div>
            )}
            <div className={styles.outputLine}>{line.output}</div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <span className={styles.prompt}>guest@srishti:~$</span>
          <div className={styles.inputWrapper}>
            <span className={styles.inputMirror}>{input}</span>
            <span className={styles.cursor} />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.input}
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
