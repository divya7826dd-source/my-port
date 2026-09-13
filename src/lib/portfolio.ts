import type { BootCheck, ProfileData, SystemNode } from "../types/portfolio";

export const BOOT_CHECKS: BootCheck[] = [
  { label: "BACKEND CORE", value: "ONLINE" },
  { label: "CLOUD CORE", value: "ONLINE" },
  { label: "IoT CORE", value: "ONLINE" },
  { label: "DATABASE CORE", value: "ONLINE" },
  { label: "NETWORK", value: "ONLINE" },
];

export const SYSTEM_NODES: SystemNode[] = [
  { id: "profile", index: "01", label: "PROFILE", status: "ONLINE", group: "ENGINEER", descriptor: "ENGINEER IDENTITY", description: "Professional profile, positioning and engineering focus", path: "/profile", x: 50, y: 9 },
  { id: "skills", index: "02", label: "SKILLS", status: "STANDBY", group: "ENGINEER", descriptor: "CAPABILITY MAP", description: "Backend, cloud and IoT capabilities", path: "/skills", x: 12.5, y: 40 },
  { id: "projects", index: "03", label: "PROJECTS", status: "STANDBY", group: "WORK", descriptor: "SYSTEM ARCHIVE", description: "Selected systems and technical work", path: "/projects", x: 87.5, y: 40 },
  { id: "experience", index: "04", label: "EXPERIENCE", status: "STANDBY", group: "WORK", descriptor: "MISSION LOG", description: "Professional engineering journey", path: "/experience", x: 22, y: 87 },
  { id: "achievements", index: "05", label: "ACHIEVEMENTS", status: "STANDBY", group: "RECOGNITION", descriptor: "RECORD VAULT", description: "Milestones and recognition", path: "/achievements", x: 78, y: 87 },
];

export const SECONDARY_NODES: SystemNode[] = [
  { id: "education", index: "06", label: "EDUCATION", status: "STANDBY", descriptor: "ACADEMIC RECORD", description: "Academic background", path: "/education", group: "ACADEMIC", x: 0, y: 0 },
  { id: "certifications", index: "07", label: "CERTIFICATIONS", status: "STANDBY", descriptor: "CREDENTIAL ARCHIVE", description: "Credential archive", path: "/certifications", group: "RECOGNITION", x: 0, y: 0 },
  { id: "terminal", index: "08", label: "AI TERMINAL", status: "ONLINE", descriptor: "PORTFOLIO ASSISTANT", description: "Ask factual questions about this portfolio", path: "/terminal", group: "COMMUNICATION", x: 0, y: 0 },
  { id: "resume", index: "09", label: "RESUME", status: "STANDBY", descriptor: "DOCUMENT LINK", description: "Full engineering resume", path: "/resume", group: "COMMUNICATION", x: 0, y: 0 },
  { id: "contact", index: "10", label: "CONTACT", status: "ONLINE", descriptor: "DIRECT CHANNEL", description: "Direct contact channels", path: "/contact", group: "COMMUNICATION", x: 0, y: 0 },
];

export const PRIMARY_NAV = [
  { label: "PROFILE", path: "/profile" },
  { label: "SKILLS", path: "/skills" },
  { label: "PROJECTS", path: "/projects" },
  { label: "EXPERIENCE", path: "/experience" },
] as const;

export const MOBILE_NAV = [
  { label: "PROFILE", path: "/profile" },
  { label: "SKILLS", path: "/skills" },
  { label: "PROJECTS", path: "/projects" },
  { label: "EXPERIENCE", path: "/experience" },
  { label: "ACHIEVEMENTS", path: "/achievements" },
  { label: "EDUCATION", path: "/education" },
  { label: "CERTIFICATIONS", path: "/certifications" },
  { label: "AI TERMINAL", path: "/terminal" },
  { label: "RESUME", path: "/resume" },
  { label: "CONTACT", path: "/contact" },
] as const;

export const NAV_ITEMS = [...SYSTEM_NODES, ...SECONDARY_NODES]
  .map(({ label, path }) => ({ label, path }));

export const HUD_ITEMS = [
  { label: "DURAI SYSTEMS", value: "ONLINE" },
  { label: "ENGINEERING CORE", value: "ACTIVE" },
  { label: "SYSTEM VERSION", value: "01.0" },
  { label: "LOCATION", value: "TN / INDIA" },
];

export const profileData: ProfileData = {
  name: "DURAI B",
  roles: ["BACKEND ENGINEER", "CLOUD DEVELOPER", "IoT SYSTEMS ENGINEER"],
  positioning: "Building scalable backend systems, cloud-native applications, and intelligent IoT solutions.",
  about: [
    "Software and IoT engineer with hands-on experience in cloud technologies, embedded systems, and full-stack development.",
    "Passionate about building end-to-end products that solve real-world problems through practical technology and innovation.",
  ],
  summary: [
    "Highly motivated and results-driven engineer with expertise in building high-performance backend systems, cloud solutions, and IoT platforms.",
    "Experienced in designing end-to-end applications, real-time data pipelines, and automation workflows.",
    "Strong problem solver with a passion for clean architecture, scalability, and performance.",
    "Committed to delivering products that create measurable impact.",
  ],
  location: "Tamil Nadu, India",
  status: [
    { label: "PROFILE", value: "ACTIVE" },
    { label: "FOCUS", value: "BACKEND / CLOUD / IoT" },
    { label: "SYSTEM", value: "ONLINE" },
    { label: "PROFILE TYPE", value: "SOFTWARE + IoT ENGINEER" },
  ],
  focusAreas: [
    { id: "backend", index: "01", label: "BACKEND SYSTEMS", description: "Scalable backend systems, APIs, real-time communication, and application architecture." },
    { id: "cloud", index: "02", label: "CLOUD SOLUTIONS", description: "Cloud-native applications, infrastructure, deployment, and connected systems." },
    { id: "iot", index: "03", label: "IoT PLATFORMS", description: "Connected devices, embedded systems, sensors, telemetry, and real-time monitoring." },
    { id: "fullstack", index: "04", label: "FULL-STACK DEVELOPMENT", description: "End-to-end application development spanning frontend, backend, databases, and deployment." },
  ],
  contact: [
    { id: "email", label: "EMAIL", value: "itsdurai4@gmail.com", href: "mailto:itsdurai4@gmail.com", external: false },
    { id: "location", label: "LOCATION", value: "Tamil Nadu, India", href: "", external: false },
    { id: "website", label: "WEBSITE", value: "durai.web.app", href: "https://durai.web.app", external: true },
    { id: "github", label: "GITHUB", value: "github.com/Duraib04", href: "https://github.com/Duraib04", external: true },
    { id: "linkedin", label: "LINKEDIN", value: "linkedin.com/in/duraib", href: "https://linkedin.com/in/duraib", external: true },
  ],
};
