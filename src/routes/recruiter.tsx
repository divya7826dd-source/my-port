import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, LogOut, Mail } from "lucide-react";
import {
  achievementsData,
  certificationsData,
  educationData,
  experienceData,
} from "../lib/career";
import { PROJECTS } from "../lib/projects";
import { SKILL_CATEGORIES } from "../lib/skills";
import { profileData } from "../lib/portfolio";

export const Route = createFileRoute("/recruiter")({
  head: () => ({
    meta: [
      { title: "Recruiter Mode — Durai B" },
      { name: "description", content: "Fast professional overview of Durai B: profile, skills, experience, projects, achievements, education, certifications, resume and contact." },
      { property: "og:title", content: "Recruiter Mode — Durai B" },
      { property: "og:description", content: "A fast, low-motion professional overview of Durai B's engineering profile." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/recruiter" }],
  }),
  component: RecruiterMode,
});

const SECTIONS = [
  { id: "profile", label: "PROFILE" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "achievements", label: "ACHIEVEMENTS" },
  { id: "education", label: "EDUCATION" },
  { id: "certifications", label: "CERTIFICATIONS" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-8" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="font-display text-xl font-bold tracking-[0.08em]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function RecruiterMode() {
  const email = profileData.contact.find((c) => c.id === "email");

  return (
    <main className="min-h-dvh bg-background px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-primary">DURAI SYSTEMS // RECRUITER MODE</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-[0.04em] sm:text-5xl">{profileData.name}</h1>
            <ul className="mt-3 space-y-1 font-mono text-[0.64rem] tracking-[0.14em] text-muted-foreground">
              {profileData.roles.map((role) => <li key={role}>{role}</li>)}
            </ul>
          </div>
          <Link to="/" className="inline-flex min-h-11 items-center gap-2 border border-border px-4 font-mono text-[0.6rem] tracking-[0.14em] transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <LogOut aria-hidden="true" className="size-4" />EXIT RECRUITER MODE
          </Link>
        </div>

        <nav aria-label="Recruiter quick navigation" className="mt-8 flex flex-wrap gap-2">
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="min-h-11 border border-border px-3 py-3 font-mono text-[0.58rem] tracking-[0.12em] text-muted-foreground transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {section.label}
            </a>
          ))}
        </nav>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/resume" className="inline-flex min-h-11 items-center gap-2 border border-primary/70 px-4 font-mono text-[0.62rem] tracking-[0.14em] text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Download aria-hidden="true" className="size-4" />VIEW RESUME
          </Link>
          {email ? (
            <a href={email.href} className="inline-flex min-h-11 items-center gap-2 border border-border px-4 font-mono text-[0.62rem] tracking-[0.14em] transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Mail aria-hidden="true" className="size-4" />CONTACT
            </a>
          ) : null}
        </div>

        <div className="mt-12 space-y-10">
          <Section id="profile" title="PROFILE">
            <p className="text-sm leading-7 text-muted-foreground">{profileData.positioning}</p>
            <ul className="mt-4 space-y-2">
              {profileData.summary.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span aria-hidden="true" className="mt-2.5 size-1 shrink-0 bg-primary" />{line}</li>
              ))}
            </ul>
          </Section>

          <Section id="skills" title="SKILLS">
            <dl className="grid gap-5 sm:grid-cols-2">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.id} className="border border-border p-4">
                  <dt className="font-mono text-[0.56rem] tracking-[0.16em] text-primary">{category.label}</dt>
                  <dd className="mt-2 text-[0.8rem] leading-6 text-muted-foreground">{category.skills.map((s) => s.name).join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="experience" title="EXPERIENCE">
            <ul className="space-y-6">
              {experienceData.map((item) => (
                <li key={item.id} className="border border-border p-5">
                  <p className="font-display text-lg font-bold tracking-[0.04em]">{item.organization}</p>
                  <p className="mt-1 font-mono text-[0.62rem] tracking-[0.12em] text-primary">{item.role} / {item.period}</p>
                  <ul className="mt-3 space-y-2">
                    {item.responsibilities.map((line) => (
                      <li key={line} className="flex gap-3 text-[0.82rem] leading-6 text-muted-foreground"><span aria-hidden="true" className="mt-2.5 size-1 shrink-0 bg-primary" />{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="projects" title="PROJECTS">
            <ul className="grid gap-4 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <li key={project.id} className="border border-border p-5">
                  <p className="font-mono text-[0.56rem] tracking-[0.16em] text-primary">{project.category}</p>
                  <p className="mt-2 font-display text-base font-bold tracking-[0.04em]">{project.name}</p>
                  <p className="mt-2 text-[0.8rem] leading-6 text-muted-foreground">{project.description}</p>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="mt-3 inline-flex min-h-11 items-center gap-2 font-mono text-[0.6rem] tracking-[0.1em] text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    {project.liveLabel}<ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="achievements" title="ACHIEVEMENTS">
            <ul className="space-y-3">
              {achievementsData.map((item) => (
                <li key={item.id} className="border border-border p-4">
                  <p className="font-display text-base font-bold tracking-[0.05em]">{item.title}</p>
                  <p className="mt-1 font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground">
                    {[item.event, item.level, item.institution].filter(Boolean).join(" / ")}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="education" title="EDUCATION">
            <div className="border border-border p-5">
              <p className="font-display text-base font-bold tracking-[0.05em]">{educationData.degree} {educationData.discipline} ({educationData.specialization})</p>
              <p className="mt-2 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground">{educationData.institution} / {educationData.period}</p>
              <p className="mt-2 font-mono text-[0.62rem] tracking-[0.12em] text-primary">CGPA {educationData.cgpa} TILL DATE / {educationData.status}</p>
            </div>
          </Section>

          <Section id="certifications" title="CERTIFICATIONS">
            <ul className="grid gap-2 sm:grid-cols-2">
              {certificationsData.map((item) => (
                <li key={item.id} className="border border-border px-4 py-3 text-[0.8rem] leading-6 text-muted-foreground">
                  {item.name}<span className="ml-2 font-mono text-[0.54rem] tracking-[0.14em] text-primary">{item.category}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="CONTACT">
            <ul className="grid gap-2 sm:grid-cols-2">
              {profileData.contact.map((item) => (
                <li key={item.id} className="border border-border px-4 py-3">
                  <p className="font-mono text-[0.54rem] tracking-[0.16em] text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer noopener" } : {})} className="mt-1 flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.06em] transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.06em]">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}
