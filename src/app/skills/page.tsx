import PageHeading from "@/components/PageHeading";
import TechStack from "./(sections)/TechStack";
import PageSectionTop from "@/components/layout/PageSectionTop";
import { skillsHeadingData } from "@/data/heading/PageHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nepidkhadka.github.io/skills"),
  title: "Skills",
  description:
    "A collection of technologies and tools I specialize in, ranging from frontend frameworks to backend development. I continuously explore new technologies to enhance my skill set and build efficient, scalable applications.",
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
    images: ["https://nepidkhadka.github.io/hero/hero.png"],
  },
  twitter: {
    images: ["https://nepidkhadka.github.io/hero/hero.png"],
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
