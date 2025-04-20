import PageSectionTop from "@/components/layout/PageSectionTop";
import { WorkExperience } from "./(sections)";
import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import { aboutsHeadingData } from "@/data/heading/PageHeading";

export const metadata: Metadata = {
  metadataBase: new URL("https://nepidkhadka.github.io/about"),
  title: "About Me",
  description:
    "A passionate Full-Stack Developer from Nepal, dedicated to crafting modern, scalable web applications. I enjoy designing and developing intuitive user-friendly applications. Open to collaborations, freelance projects, and opportunities!",
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
