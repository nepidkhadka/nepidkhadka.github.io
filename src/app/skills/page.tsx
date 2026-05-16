import PageHeading from "@/components/PageHeading";
import TechStack from "./(sections)/TechStack";
import PageSectionTop from "@/components/layout/PageSectionTop";
import { skillsHeadingData } from "@/data/heading/PageHeading";
import { Metadata } from "next";

const description =
  "Tools and technologies I rely on day to day — from frontend frameworks like React and Next.js to backend stacks with Node.js, Express, and MongoDB.";

export const metadata: Metadata = {
  title: "Skills",
  description,
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills | Dipen Khadka",
    description,
    url: "/skills",
  },
  twitter: {
    title: "Skills | Dipen Khadka",
    description,
  },
};

const Skills = () => {
  return (
    <PageSectionTop>
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <PageHeading data={skillsHeadingData} />

        {/* TechStack */}
        <TechStack />
      </div>
    </PageSectionTop>
  );
};

export default Skills;
