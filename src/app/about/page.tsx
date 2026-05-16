import PageSectionTop from "@/components/layout/PageSectionTop";
import { WorkExperience } from "./(sections)";
import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { aboutsHeadingData } from "@/data/heading/PageHeading";

const description =
  "Full-Stack Developer from Nepal focused on shipping modern, scalable web applications. Open to collaborations, freelance work, and full-time roles.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Dipen Khadka",
    description,
    url: "/about",
  },
  twitter: {
    title: "About | Dipen Khadka",
    description,
  },
};

const About = () => {
  return (
    <PageSectionTop>
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <PageHeading data={aboutsHeadingData} />

        {/* Work Experience Timeline */}
        <WorkExperience />
      </div>
    </PageSectionTop>
  );
};

export default About;
