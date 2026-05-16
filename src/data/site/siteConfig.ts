export const siteConfig = {
  name: "Dipen Khadka",
  jobTitle: "Full-Stack Developer",
  url: "https://nepidkhadka.github.io",
  ogImage: "https://nepidkhadka.github.io/hero/dipenkhadka.jpg",
  description:
    "Dipen Khadka — Full-Stack Developer from Nepal. I build fast, modern web applications with React, Next.js, and Node.js, with an eye for clean UI and dependable backends.",
  keywords: [
    "Dipen Khadka",
    "Full-Stack Developer",
    "Nepal Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
  author: {
    name: "Dipen Khadka",
    email: "code.dipen@gmail.com",
    location: "Nepal",
  },
  social: {
    github: "https://github.com/nepidkhadka",
    linkedin: "https://www.linkedin.com/in/nepidkhadka/",
    facebook: "https://www.facebook.com/nepidkhadka",
  },
} as const;

export type SiteConfig = typeof siteConfig;