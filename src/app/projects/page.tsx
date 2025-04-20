import PageSectionTop from "@/components/layout/PageSectionTop";
import PageHeading from "@/components/PageHeading";
import { projectsHeadingData } from "@/data/heading/PageHeading";
import { Metadata } from "next";
import ProjectsCard from "./Projects";

export const metadata: Metadata = {
  metadataBase: new URL("https://nepidkhadka.github.io/projects"),
  title: "Projects",
  description:
    "A collection of projects I've worked on, showcasing my skills and creativity. Each project is a unique opportunity to learn and grow, and I'm excited to share them with you.",
  keywords:
    "HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js, Express.js, Node.js, Web Design, Web Development, Full-Stack Development, Frontend Development, Backend Development, Responsive Web Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    images: ["https://nepidkhadka.github.io/Images/hero_banner.png"],
  },
  twitter: {
    images: ["https://nepidkhadka.github.io/Images/hero_banner.png"],
  },
};

const Projects = () => {
  return (
    <PageSectionTop>
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <PageHeading data={projectsHeadingData} />

        {/* Projects */}
        <ProjectsCard />
      </div>
    </PageSectionTop>
  );
};

export default Projects;
