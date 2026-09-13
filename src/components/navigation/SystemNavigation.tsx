import { Link } from "@tanstack/react-router";
import { NAV_ITEMS } from "../../lib/portfolio";

export function SystemNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-6 lg:px-10">
        <Link to="/" aria-label="Durai B home" className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="grid size-8 shrink-0 place-items-center border border-primary/60 font-display text-sm font-bold text-primary">DB</span>
          <span className="min-w-0 truncate font-display text-sm font-bold tracking-[0.16em]">DURAI</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden min-w-0 items-center justify-end gap-4 xl:flex">
          {NAV_ITEMS.map((item) => <Link key={item.path} to={item.path} className="shrink-0 font-mono text-[0.58rem] tracking-[0.1em] text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <details className="relative">
            <summary className="flex min-h-11 cursor-pointer list-none items-center border border-border px-3 font-mono text-[0.6rem] tracking-[0.12em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">SYSTEMS</summary>
            <nav aria-label="Systems navigation" className="absolute right-0 top-14 z-50 grid min-w-56 gap-px border border-border bg-border p-px shadow-depth">
              {NAV_ITEMS.map((item) => <Link key={item.path} to={item.path} className="bg-surface px-4 py-3 font-mono text-[0.6rem] tracking-[0.12em] text-foreground transition hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item.label}</Link>)}
              <Link to="/resume" className="bg-surface px-4 py-3 font-mono text-[0.6rem] tracking-[0.12em] text-foreground transition hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">RESUME</Link>
            </nav>
          </details>
          <Link to="/resume" className="hidden min-h-11 border border-border px-4 py-3 font-mono text-[0.65rem] tracking-[0.14em] text-foreground sm:inline-flex">RESUME</Link>
        </div>
      </div>
    </header>
  );
}