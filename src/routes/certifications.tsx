import { createFileRoute } from "@tanstack/react-router";
import { CertificationsSystem } from "../components/career/CareerSystems";

export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [
    { title: "Durai B — Certifications" },
    { name: "description", content: "Professional certification archive for Durai B across cloud, IoT, programming and data." },
    { property: "og:title", content: "Durai B — Certifications" },
    { property: "og:description", content: "Professional certification archive for Durai B across cloud, IoT, programming and data." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/certifications" }] }),
  component: CertificationsSystem,
});