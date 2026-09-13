import {
  achievementsData,
  certificationsData,
  educationData,
  experienceData,
  interestsData,
  languagesData,
} from "./career";
import { PROJECTS } from "./projects";
import { SKILL_CATEGORIES } from "./skills";
import { profileData } from "./portfolio";

export interface TerminalAnswer {
  /** Short lead line. */
  lead: string;
  /** Optional grouped lists rendered as scannable blocks. */
  blocks?: { title?: string; items: string[] }[];
  /** Optional short closing note. */
  note?: string;
}

export const UNKNOWN_ANSWER: TerminalAnswer = {
  lead: "I don't have that information in Durai's portfolio.",
};

export const SUGGESTED_QUESTIONS = [
  "WHAT DOES DURAI DO?",
  "WHAT ARE DURAI'S MAIN SKILLS?",
  "SHOW ME HIS PROJECTS.",
  "WHAT IoT EXPERIENCE DOES HE HAVE?",
  "WHAT CLOUD TECHNOLOGIES DOES HE USE?",
  "WHERE DOES HE STUDY?",
  "WHAT HACKATHONS HAS HE PARTICIPATED IN?",
  "WHAT CERTIFICATIONS DOES HE HAVE?",
  "HOW CAN I CONTACT HIM?",
];

interface Intent {
  id: string;
  /** Any match triggers the intent. */
  keywords: string[];
  answer: () => TerminalAnswer;
}

const categoryItems = (id: string) =>
  SKILL_CATEGORIES.find((c) => c.id === id)?.skills.map((s) => s.name) ?? [];

const INTENTS: Intent[] = [
  {
    id: "overview",
    keywords: ["what does durai do", "who is durai", "about durai", "tell me about", "summary", "profile", "introduce"],
    answer: () => ({
      lead: `${profileData.name} — ${profileData.roles.join(" / ")}.`,
      blocks: [{ title: "FOCUS", items: profileData.focusAreas.map((f) => `${f.label}: ${f.description}`) }],
      note: profileData.positioning,
    }),
  },
  {
    id: "languages-programming",
    keywords: ["programming language", "which languages does he code", "coding language", "what language does he program"],
    answer: () => ({ lead: "PROGRAMMING LANGUAGES", blocks: [{ items: categoryItems("languages") }] }),
  },
  {
    id: "backend",
    keywords: ["backend", "api", "server side", "node", "express", "fastapi", "websocket"],
    answer: () => ({ lead: "BACKEND TECHNOLOGIES", blocks: [{ items: categoryItems("backend") }] }),
  },
  {
    id: "frontend",
    keywords: ["frontend", "front end", "ui framework", "react", "next.js"],
    answer: () => ({ lead: "FRONTEND TECHNOLOGIES", blocks: [{ items: categoryItems("frontend") }] }),
  },
  {
    id: "database",
    keywords: ["database", "sql", "postgres", "mongo", "redis", "data store"],
    answer: () => ({ lead: "DATABASE TECHNOLOGIES", blocks: [{ items: categoryItems("databases") }] }),
  },
  {
    id: "cloud",
    keywords: ["cloud", "aws", "devops", "docker", "ci/cd", "deployment technolog", "infrastructure"],
    answer: () => ({ lead: "CLOUD & DEVOPS TECHNOLOGIES", blocks: [{ items: categoryItems("cloudDevOps") }] }),
  },
  {
    id: "iot-skills",
    keywords: ["iot", "embedded", "esp32", "mqtt", "sensor", "hardware"],
    answer: () => ({
      lead: "IoT & EMBEDDED",
      blocks: [
        { title: "TECHNOLOGIES", items: categoryItems("iotEmbedded") },
        {
          title: "APPLIED IoT EXPERIENCE",
          items: experienceData.map((e) => `${e.role} — ${e.organization} (${e.period})`),
        },
      ],
    }),
  },
  {
    id: "tools",
    keywords: ["tools", "platform", "git", "postman", "linux", "figma"],
    answer: () => ({ lead: "TOOLS & PLATFORMS", blocks: [{ items: categoryItems("tools") }] }),
  },
  {
    id: "skills",
    keywords: ["skill", "tech stack", "technolog", "what can he build", "capabilit"],
    answer: () => ({
      lead: "CAPABILITY MAP",
      blocks: SKILL_CATEGORIES.map((c) => ({ title: c.label, items: c.skills.map((s) => s.name) })),
    }),
  },
  {
    id: "projects",
    keywords: ["project", "portfolio work", "what has he built", "geanexa", "helpio", "symphosiyam", "simulation", "erp"],
    answer: () => ({
      lead: "PROJECT ARCHIVE",
      blocks: [
        {
          items: PROJECTS.map((p) => `${p.name} — ${p.category} — ${p.liveLabel}`),
        },
      ],
    }),
  },
  {
    id: "experience",
    keywords: ["experience", "intern", "work history", "job", "cubeai", "idea lab", "employment"],
    answer: () => ({
      lead: "MISSION LOG",
      blocks: experienceData.map((e) => ({
        title: `${e.organization} — ${e.role} (${e.period})`,
        items: e.responsibilities,
      })),
    }),
  },
  {
    id: "achievements",
    keywords: ["achievement", "hackathon", "award", "won", "winner", "recognition", "oblivion", "chakravyuha", "gdg"],
    answer: () => ({
      lead: "ACHIEVEMENT VAULT",
      blocks: [
        {
          items: achievementsData.map((a) =>
            [a.title, a.event, a.level, a.institution].filter(Boolean).join(" — "),
          ),
        },
      ],
    }),
  },
  {
    id: "education",
    keywords: ["education", "study", "studies", "college", "university", "degree", "cgpa", "ksr"],
    answer: () => ({
      lead: "EDUCATION CORE",
      blocks: [
        {
          items: [
            `${educationData.degree} ${educationData.discipline} (${educationData.specialization})`,
            educationData.institution,
            educationData.period,
            `CGPA ${educationData.cgpa} (till date)`,
            `STATUS: ${educationData.status}`,
          ],
        },
      ],
    }),
  },
  {
    id: "certifications",
    keywords: ["certification", "certificate", "course", "credential"],
    answer: () => ({
      lead: "CERTIFICATION ARCHIVE",
      blocks: [{ items: certificationsData.map((c) => `${c.name} — ${c.category}`) }],
    }),
  },
  {
    id: "spoken-languages",
    keywords: ["spoken language", "tamil", "english", "what languages does he speak", "speak"],
    answer: () => ({
      lead: "LANGUAGES",
      blocks: [{ items: languagesData.map((l) => `${l.name}${l.nativeName ? ` (${l.nativeName})` : ""} — ${l.level}`) }],
    }),
  },
  {
    id: "interests",
    keywords: ["interest", "hobby", "passion"],
    answer: () => ({
      lead: "INTERESTS",
      blocks: [{ items: interestsData.map((i) => `${i.name} — ${i.description}`) }],
    }),
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "hire", "linkedin", "github", "website", "location", "where is he based"],
    answer: () => ({
      lead: "COMMUNICATION CHANNEL",
      blocks: [{ items: profileData.contact.map((c) => `${c.label}: ${c.value}`) }],
    }),
  },
  {
    id: "resume",
    keywords: ["resume", "cv"],
    answer: () => ({
      lead: "RESUME SYSTEM",
      note: "The resume section is available at /resume. No resume file has been supplied for this site, so nothing has been invented.",
    }),
  },
];

/**
 * Deterministic, grounded lookup over the portfolio data. Input is treated as
 * plain text only — nothing entered here is ever executed.
 */
export function answerQuestion(input: string): TerminalAnswer {
  const query = input.toLowerCase().replace(/\s+/g, " ").trim();
  if (!query) return UNKNOWN_ANSWER;

  let best: { intent: Intent; score: number } | null = null;
  for (const intent of INTENTS) {
    for (const keyword of intent.keywords) {
      if (query.includes(keyword) && (!best || keyword.length > best.score)) {
        best = { intent, score: keyword.length };
      }
    }
  }

  return best ? best.intent.answer() : UNKNOWN_ANSWER;
}
