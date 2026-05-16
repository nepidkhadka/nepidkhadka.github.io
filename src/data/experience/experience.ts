export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Metalogic Software Pvt. Ltd.",
    role: "Full Stack Developer (MERN)",
    startDate: "Nov 2024",
    endDate: "Present",
    current: true,
    highlights: [
      "Built scalable web applications using React/Next.js, TypeScript, Node.js, and MongoDB.",
      "Developed responsive UI components focusing on performance and UX.",
      "Integrated RESTful APIs for smooth frontend-backend communication.",
      "Collaborated in agile teams and utilized Git for version control and teamwork.",
    ],
  },
  {
    company: "Binary Shastra Private Limited",
    role: "Frontend Developer",
    startDate: "Dec 2023",
    endDate: "Sep 2024",
    highlights: [
      "Developed responsive, dynamic frontends with HTML, CSS, Bootstrap, and JavaScript/React.",
      "Enhanced UX with modern design principles and cross-browser compatibility.",
      "Collaborated with backend teams for seamless integration and functionality.",
      "Utilized Git for streamlined version control and team collaboration.",
    ],
  },
];
