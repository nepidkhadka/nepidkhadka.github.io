import PageSectionTop from "@/components/layout/PageSectionTop";
import PageHeading from "@/components/PageHeading";
import { projectsHeadingData } from "@/data/heading/PageHeading";
import { Metadata } from "next";
import ProjectsCard from "./Projects";

const description =
  "A selection of things I've built — production apps, client websites, and side projects spanning React, Next.js, and the MERN stack.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Dipen Khadka",
    description,
    url: "/projects",
  },
  twitter: {
    title: "Projects | Dipen Khadka",
    description,
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
