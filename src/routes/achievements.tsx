import { createFileRoute } from "@tanstack/react-router";
import { AchievementsSystem } from "../components/career/CareerSystems";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [
    { title: "Durai B — Achievements" },
    { name: "description", content: "Competition achievements and recognition records for Durai B." },
    { property: "og:title", content: "Durai B — Achievements" },
    { property: "og:description", content: "Competition achievements and recognition records for Durai B." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/achievements" }] }),
  component: AchievementsSystem,
});