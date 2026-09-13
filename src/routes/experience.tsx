import { createFileRoute } from "@tanstack/react-router";
import { ExperienceSystem } from "../components/career/CareerSystems";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [
    { title: "Durai B — Experience" },
    { name: "description", content: "Engineering experience and IoT mission records for Durai B." },
    { property: "og:title", content: "Durai B — Experience" },
    { property: "og:description", content: "Engineering experience and IoT mission records for Durai B." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/experience" }] }),
  component: ExperienceSystem,
});