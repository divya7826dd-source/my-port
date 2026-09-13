import { Link } from "@tanstack/react-router";
import { profileData } from "../../lib/portfolio";

const FOOTER_LINKS = [
  { label: "PROFILE", path: "/profile" },
  { label: "PROJECTS", path: "/projects" },
  { label: "SKILLS", path: "/skills" },
  { label: "EXPERIENCE", path: "/experience" },
  { label: "AI TERMINAL", path: "/terminal" },
  { label: "RESUME", path: "/resume" },
  { label: "CONTACT", path: "/contact" },
] as const;

export function SystemFooter() {
  const email = profileData.contact.find((c) => c.id === "email");
  const github = profileData.contact.find((c) => c.id === "github");
  const linkedin = profileData.contact.find((c) => c.id === "linkedin");

  return (
    <footer className="border-t border-border bg-background px-5 py-14 sm:px-8 lg:px-10" aria-labelledby="footer-title">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-primary">DURAI SYSTEMS</p>
          <h2 id="footer-title" className="mt-3 font-display text-3xl font-bold tracking-[0.05em]">{profileData.name}</h2>
          <ul className="mt-3 space-y-1 font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground">
            {profileData.roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
          <p className="mt-6 font-mono text-[0.58rem] tracking-[0.18em] text-muted-foreground">ENGINEERING PROFILE COMPLETE / THANK YOU FOR EXPLORING</p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-mono text-[0.56rem] tracking-[0.18em] text-muted-foreground">SYSTEMS</p>
          <ul className="mt-4 grid gap-1 sm:grid-cols-2">
            {FOOTER_LINKS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="flex min-h-11 items-center font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[0.56rem] tracking-[0.18em] text-muted-foreground">CHANNELS</p>
          <ul className="mt-4 space-y-1">
            {[email, github, linkedin].filter(Boolean).map((item) => (
              <li key={item!.id}>
                <a
                  href={item!.href}
                  {...(item!.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  className="flex min-h-11 items-center font-mono text-[0.62rem] tracking-[0.08em] text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item!.value}
                </a>
              </li>
            ))}
            <li className="flex min-h-11 items-center font-mono text-[0.62rem] tracking-[0.08em] text-muted-foreground">{profileData.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1500px] flex-col gap-3 border-t border-border pt-6 font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>END OF TRANSMISSION</span>
        <span className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 bg-primary shadow-signal" />SYSTEM STATUS ONLINE</span>
        <span>© {profileData.name}</span>
      </div>
    </footer>
  );
}
