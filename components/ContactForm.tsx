"use client";

import { useState } from "react";
import { CheckCircle } from "@/components/icons";

// ─────────────────────────────────────────────────────────────────
//  SETUP INSTRUCTIONS
//  1. Go to https://formspree.io and sign up for free
//  2. Create a new form → copy the form ID (looks like "xyzabcde")
//  3. Replace YOUR_FORM_ID below with that ID
//  4. Formspree free tier: 50 submissions/month — more than enough
// ─────────────────────────────────────────────────────────────────
const FORMSPREE_ID: string = "maqzzrvw";
const FORM_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
const FALLBACK_EMAIL = "ammarkhan9903233@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("hiring");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const isFormspreeReady = FORMSPREE_ID !== "YOUR_FORM_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormspreeReady) {
      // Fallback: open pre-filled mailto link
      const subject = encodeURIComponent(
        type === "hiring"
          ? `Hiring Inquiry from ${name}`
          : `Project Inquiry from ${name}`
      );
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nType: ${type}\n\n${message}`);
      window.open(`mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, type, message }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-wrap">
        <div className="form-success">
          <CheckCircle />
          <div className="form-success-title">Message sent!</div>
          <p className="form-success-body">
            Thanks for reaching out. I read every message and will get back to
            you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="cf-name">
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            className="form-input"
            placeholder="Your full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-email">
            Email Address
          </label>
          <input
            id="cf-email"
            type="email"
            className="form-input"
            placeholder="you@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-type">
            What are you reaching out about?
          </label>
          <select
            id="cf-type"
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="hiring">I&apos;m hiring / I have a role to discuss</option>
            <option value="project">I have a business project or automation need</option>
            <option value="general">Just saying hello</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-message">
            Message
          </label>
          <textarea
            id="cf-message"
            className="form-textarea"
            placeholder={
              type === "hiring"
                ? "Tell me about the role, the team, and what you're building..."
                : type === "project"
                ? "Describe the workflow you want to automate or the problem you're trying to solve..."
                : "What's on your mind?"
            }
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "error" && (
          <p className="form-err-msg">
            Something went wrong. Please email directly at{" "}
            <a href={`mailto:${FALLBACK_EMAIL}`} style={{ color: "inherit", textDecoration: "underline" }}>
              {FALLBACK_EMAIL}
            </a>
          </p>
        )}

        {!isFormspreeReady && process.env.NODE_ENV !== "production" && (
          <p className="form-err-msg" style={{ background: "rgba(240,145,63,.1)", borderColor: "rgba(240,145,63,.35)", color: "#f0913f" }}>
            <strong>Dev only:</strong> Replace <code>YOUR_FORM_ID</code> in{" "}
            <code>ContactForm.tsx</code> with your Formspree ID. This message
            is hidden in production.
          </p>
        )}
      </form>
    </div>
  );
}
