"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgodvkjg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>message</label>
        <textarea
          className={styles.textarea}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          rows={5}
          required
        />
      </div>
      <div className={styles.footer}>
        <button className={styles.btn} type="submit" disabled={status === "sending"}>
          {status === "sending" ? "sending..." : "send message ↗"}
        </button>
        {status === "sent" && <span className={styles.success}>Message sent!</span>}
        {status === "error" && <span className={styles.error}>Something went wrong. Try emailing directly.</span>}
      </div>
    </form>
  );
}
