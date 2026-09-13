import { createFileRoute } from "@tanstack/react-router";
import { AiTerminal } from "../components/terminal/AiTerminal";

export const Route = createFileRoute("/terminal")({
  head: () => ({
    meta: [
      { title: "AI Terminal — Durai B" },
      { name: "description", content: "Ask factual questions about Durai B's skills, projects, experience, education and certifications." },
      { property: "og:title", content: "AI Terminal — Durai B" },
      { property: "og:description", content: "A grounded portfolio assistant answering only from Durai B's published portfolio data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terminal" }],
  }),
  component: TerminalPage,
});

function TerminalPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-command px-5 py-24 sm:px-8 lg:px-10">
      <div className="command-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative">
        <AiTerminal />
      </div>
    </main>
  );
}
