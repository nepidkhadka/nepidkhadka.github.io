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
    company: "Autolab Technologies Pvt. Ltd.",
    role: "Frontend Developer",
    startDate: "Dec 2025",
    endDate: "Present",
    current: true,
    highlights: [
      "Worked on a Japanese client project (Misumi) — contributed to the PLG (Part List Generator) where users upload BOM CSV files and view part statuses, replacements, providers, and delivery dates.",
      "Contributed to the Excel export feature so processed part lists can be directly handed off to the sales team for procurement.",
      "Built UI components with Next.js, React, and Tailwind CSS, optimized for performance and large dataset rendering.",
      "Improved frontend code quality through code splitting, input validation, and rendering optimizations.",
    ],
  },
  {
    company: "Metalogic Software Pvt. Ltd.",
    role: "Full Stack Developer (MERN)",
    startDate: "Nov 2024",
    endDate: "Dec 2025",
    current: false,
    highlights: [
      "Built and shipped scalable full-stack web applications using React, Next.js, TypeScript, Node.js, and MongoDB.",
      "Designed and developed reusable, responsive UI components with a strong emphasis on performance optimization and user experience.",
      "Architected and integrated RESTful APIs, ensuring reliable and efficient frontend-backend data flow.",
      "Worked within agile development cycles, participating in sprint planning, code reviews, and maintaining clean Git workflows for collaborative delivery.",
    ],
  },
  {
    company: "Binary Shastra Private Limited",
    role: "Frontend Developer",
    startDate: "Dec 2023",
    endDate: "Sep 2024",
    highlights: [
      "Developed responsive and dynamic user interfaces using HTML, CSS, Bootstrap, JavaScript, and React across multiple client projects.",
      "Improved application UX by applying modern design principles, accessibility standards, and cross-browser compatibility practices.",
      "Collaborated closely with backend teams to integrate APIs and deliver cohesive, fully functional product features.",
      "Maintained organized codebases and streamlined team collaboration using Git branching and pull request workflows.",
    ],
  },
];
