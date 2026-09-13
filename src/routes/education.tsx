import { createFileRoute } from "@tanstack/react-router";
import { EducationSystem } from "../components/career/CareerSystems";

export const Route = createFileRoute("/education")({
  head: () => ({ meta: [
    { title: "Durai B — Education" },
    { name: "description", content: "Engineering education, languages and interests for Durai B." },
    { property: "og:title", content: "Durai B — Education" },
    { property: "og:description", content: "Engineering education, languages and interests for Durai B." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/education" }] }),
  component: EducationSystem,
});