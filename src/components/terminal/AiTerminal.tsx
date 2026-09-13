import { Link } from "@tanstack/react-router";
import { ArrowLeft, CornerDownLeft, Trash2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SUGGESTED_QUESTIONS, UNKNOWN_ANSWER, answerQuestion, type TerminalAnswer } from "../../lib/knowledge";

interface Entry {
  id: string;
  question: string;
  answer: TerminalAnswer | null;
  failed?: boolean;
}

const MAX_INPUT = 300;

function AnswerBlock({ answer }: { answer: TerminalAnswer }) {
  return (
    <div className="mt-3 border-l border-primary/40 pl-4">
      <p className="font-mono text-[0.7rem] tracking-[0.08em] text-foreground">{answer.lead}</p>
      {answer.blocks?.map((block, index) => (
        <div key={block.title ?? index} className="mt-3">
          {block.title ? <p className="font-mono text-[0.56rem] tracking-[0.16em] text-primary">{block.title}</p> : null}
          <ul className="mt-2 space-y-1.5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2 text-[0.8rem] leading-6 text-muted-foreground">
                <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 bg-primary" />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {answer.note ? <p className="mt-3 text-[0.78rem] leading-6 text-muted-foreground">{answer.note}</p> : null}
    </div>
  );
}

export function AiTerminal() {
  const [value, setValue] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [entries, pending]);

  const ask = useCallback((raw: string) => {
    // The terminal is a read-only portfolio lookup: input is treated as plain
    // text and is never executed or sent anywhere.
    const question = raw.slice(0, MAX_INPUT).trim();
    if (!question || pending) return;
    const id = `${Date.now()}-${question.length}`;
    setEntries((prev) => [...prev, { id, question, answer: null }]);
    setValue("");
    setPending(true);

    window.setTimeout(() => {
      setEntries((prev) =>
        prev.map((entry) => {
          if (entry.id !== id) return entry;
          try {
            return { ...entry, answer: answerQuestion(question) };
          } catch {
            return { ...entry, answer: UNKNOWN_ANSWER, failed: true };
          }
        }),
      );
      setPending(false);
    }, 160);
  }, [pending]);

  return (
    <section className="relative mx-auto w-full max-w-3xl" aria-labelledby="terminal-title">
      <p className="flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.2em] text-primary">
        <span className="size-1.5 bg-primary shadow-signal" />DURAI SYSTEMS // AI TERMINAL
      </p>
      <h1 id="terminal-title" className="mt-4 font-display text-4xl font-bold tracking-[0.04em] sm:text-5xl">DURAI AI TERMINAL</h1>
      <p className="mt-3 font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground">SYSTEM ONLINE / ASK ABOUT THE ENGINEER</p>

      <div className="mt-8 border border-border bg-surface/70 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 font-mono text-[0.56rem] tracking-[0.16em] text-muted-foreground">
          <span>SESSION LOG</span>
          <button
            type="button"
            onClick={() => setEntries([])}
            disabled={entries.length === 0}
            className="inline-flex min-h-9 items-center gap-2 border border-border px-3 transition hover:border-primary/60 hover:text-primary disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Trash2 aria-hidden="true" className="size-3.5" />CLEAR
          </button>
        </div>

        <div className="max-h-[26rem] overflow-y-auto px-4 py-5" aria-live="polite" aria-atomic="false">
          {entries.length === 0 ? (
            <p className="font-mono text-[0.68rem] leading-6 tracking-[0.06em] text-muted-foreground">
              Answers come only from the data published on this site. Nothing is invented.
            </p>
          ) : null}
          <ol className="space-y-6">
            {entries.map((entry) => (
              <li key={entry.id}>
                <p className="font-mono text-[0.7rem] tracking-[0.08em] text-primary">
                  <span aria-hidden="true">&gt; </span>{entry.question}
                </p>
                {entry.answer ? <AnswerBlock answer={entry.answer} /> : <p className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground">QUERYING PORTFOLIO DATA...</p>}
                {entry.failed ? (
                  <div className="mt-3 border border-border p-4">
                    <p className="font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">AI TERMINAL TEMPORARILY UNAVAILABLE.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link to="/profile" className="min-h-9 border border-border px-3 py-2 font-mono text-[0.58rem] tracking-[0.12em] hover:text-primary">VIEW PROFILE</Link>
                      <Link to="/skills" className="min-h-9 border border-border px-3 py-2 font-mono text-[0.58rem] tracking-[0.12em] hover:text-primary">VIEW SKILLS</Link>
                      <Link to="/projects" className="min-h-9 border border-border px-3 py-2 font-mono text-[0.58rem] tracking-[0.12em] hover:text-primary">VIEW PROJECTS</Link>
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
          <div ref={logEndRef} />
        </div>

        <form
          className="flex items-center gap-3 border-t border-border px-4 py-3"
          onSubmit={(event) => {
            event.preventDefault();
            ask(value);
          }}
        >
          <label htmlFor="terminal-input" className="sr-only">Ask a question about Durai&apos;s portfolio</label>
          <span aria-hidden="true" className="font-mono text-sm text-primary">&gt;</span>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            maxLength={MAX_INPUT}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
            placeholder="Ask about skills, projects, experience…"
            className="min-h-11 min-w-0 flex-1 bg-transparent font-mono text-[0.75rem] tracking-[0.04em] text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0"
          />
          <button
            type="submit"
            disabled={!value.trim() || pending}
            className="inline-flex min-h-11 items-center gap-2 border border-border px-4 font-mono text-[0.6rem] tracking-[0.14em] transition hover:border-primary/60 hover:text-primary disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            SEND <CornerDownLeft aria-hidden="true" className="size-3.5" />
          </button>
        </form>
      </div>

      <div className="mt-6">
        <p className="font-mono text-[0.56rem] tracking-[0.18em] text-muted-foreground">SUGGESTED QUERIES</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((question) => (
            <li key={question}>
              <button
                type="button"
                onClick={() => { ask(question); inputRef.current?.focus(); }}
                className="min-h-11 max-w-full border border-border px-3 text-left font-mono text-[0.58rem] tracking-[0.1em] text-muted-foreground transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {question}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/" hash="command-center" className="mt-10 inline-flex min-h-11 items-center gap-3 border border-border px-4 font-mono text-[0.66rem] tracking-[0.14em] transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <ArrowLeft aria-hidden="true" className="size-4" />COMMAND CENTER
      </Link>
    </section>
  );
}
