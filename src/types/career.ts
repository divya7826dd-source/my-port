export type ExperienceStatus = "COMPLETED";

export interface Experience {
  id: string;
  number: string;
  organization: string;
  role: string;
  location?: string;
  period: string;
  status: ExperienceStatus;
  responsibilities: string[];
  areas: string[];
  visualization: string[];
  prototypeLabel?: string;
  prototypeAreas?: string[];
}

export type AchievementKind = "WINNER" | "FINALIST" | "RUNNER-UP";

export interface Achievement {
  id: string;
  number: string;
  title: string;
  kind: AchievementKind;
  event: string;
  level?: string;
  institution?: string;
}

export interface Education {
  degree: string;
  discipline: string;
  specialization: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: string;
}

export type CertificationCategory =
  | "CLOUD"
  | "IoT"
  | "PROGRAMMING"
  | "DATABASE"
  | "ALGORITHMS"
  | "AI / MACHINE LEARNING";

export interface Certification {
  id: string;
  number: string;
  name: string;
  category: CertificationCategory;
}

export interface Language {
  id: string;
  name: string;
  nativeName?: string;
  level: string;
}

export interface Interest {
  id: string;
  name: string;
  description: string;
}