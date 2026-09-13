import type {
  Achievement,
  Certification,
  Education,
  Experience,
  Interest,
  Language,
} from "../types/career";

export const experienceData: Experience[] = [
  {
    id: "cubeaisolutions",
    number: "01",
    organization: "CubeAISolutions Tech Pvt. Ltd.",
    location: "Bangalore",
    role: "IoT Engineering Intern",
    period: "Jul 2025 – Dec 2025",
    status: "COMPLETED",
    responsibilities: [
      "Worked on IoT system development and prototyping using Raspberry Pi.",
      "Developed hardware-integrated IoT solutions involving sensors, device communication, and real-time monitoring.",
      "Programmed and tested Raspberry Pi-based systems for practical IoT applications.",
      "Gained hands-on experience in IoT hardware integration, embedded programming, sensor interfacing, and system testing.",
    ],
    areas: [
      "Raspberry Pi",
      "IoT",
      "Sensors",
      "Device Communication",
      "Real-Time Monitoring",
      "Embedded Programming",
      "Sensor Interfacing",
      "System Testing",
    ],
    visualization: ["RASPBERRY PI", "SENSOR INTERFACE", "DEVICE COMMUNICATION", "MONITORING"],
  },
  {
    id: "ksrce-idea-lab",
    number: "02",
    organization: "KSRCE IDEA Lab",
    role: "IoT Engineer & Software Developer",
    period: "July 2025 – October 2025",
    status: "COMPLETED",
    responsibilities: [
      "Developed an IoT web platform integrating ThingSpeak data directly into a real-time monitoring dashboard.",
      "Designed and prototyped 6+ IoT solutions for agriculture, traffic, mining safety, surveillance, smart cities, and street lighting.",
      "Built systems using ESP32, Raspberry Pi, Arduino, MQTT, Firebase, and diverse IoT sensors.",
    ],
    areas: [
      "ESP32",
      "Raspberry Pi",
      "Arduino",
      "ThingSpeak",
      "Firebase",
      "MQTT",
      "Python",
      "IoT Sensors",
      "Embedded Systems",
      "Web Development",
    ],
    visualization: ["DEVICES", "IoT COMMUNICATION", "THINGSPEAK / DATA", "MONITORING DASHBOARD"],
    prototypeLabel: "6+ IoT SOLUTION PROTOTYPES",
    prototypeAreas: ["AGRICULTURE", "TRAFFIC", "MINING SAFETY", "SURVEILLANCE", "SMART CITIES", "STREET LIGHTING"],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: "oblivion-25",
    number: "01",
    title: "1ST RUNNER-UP",
    kind: "RUNNER-UP",
    event: "OBLIVION'25",
    level: "NATIONAL LEVEL HACKATHON",
    institution: "SNS COLLEGE OF ENGINEERING",
  },
  {
    id: "chakravyuha-2k25",
    number: "02",
    title: "TOP 5 FINALIST",
    kind: "FINALIST",
    event: "CHAKRAVYUHA_HACKATHON 2K25",
    institution: "KPR COLLEGE OF ENGINEERING",
  },
  {
    id: "gdg-ksrce-2k26",
    number: "03",
    title: "WINNER",
    kind: "WINNER",
    event: "GDG KSRCE 2K26-MINIHACKATHON",
  },
];

export const educationData: Education = {
  degree: "B.E.",
  discipline: "Computer Science and Engineering",
  specialization: "Internet of Things",
  institution: "KSR College of Engineering",
  location: "Tamil Nadu",
  period: "2024 – 2028",
  cgpa: "8.6 / 10",
  status: "IN PROGRESS",
};

export const certificationsData: Certification[] = [
  { id: "aws-cloud-practitioner", number: "01", name: "AWS Cloud Practitioner Essentials", category: "CLOUD" },
  { id: "aws-iot-core", number: "02", name: "AWS IoT Core — Getting Started", category: "IoT" },
  { id: "python-everybody", number: "03", name: "Python for Everybody", category: "PROGRAMMING" },
  { id: "database-systems", number: "04", name: "Database Systems", category: "DATABASE" },
  { id: "data-structures", number: "05", name: "Data Structures & Algorithms", category: "ALGORITHMS" },
  { id: "machine-learning-for-all", number: "06", name: "Machine Learning for All — IBM", category: "AI / MACHINE LEARNING" },
  { id: "iot-fundamentals", number: "07", name: "IoT Fundamentals — Cisco", category: "IoT" },
  { id: "java-programming", number: "08", name: "Java Programming — Infosys Springboard", category: "PROGRAMMING" },
];

export const languagesData: Language[] = [
  { id: "tamil", name: "Tamil", nativeName: "தமிழ்", level: "Native" },
  { id: "english", name: "English", level: "Professional Working" },
];

export const interestsData: Interest[] = [
  { id: "iot-smart-systems", name: "IoT & Smart Systems", description: "Connected devices and intelligent systems." },
  { id: "software-product-development", name: "Software & Product Development", description: "Building useful software and product experiences." },
  { id: "cloud-edge-computing", name: "Cloud & Edge Computing", description: "Cloud-native and edge-oriented computing." },
  { id: "ai-emerging-technologies", name: "AI & Emerging Technologies", description: "Exploring AI and emerging technology domains." },
];