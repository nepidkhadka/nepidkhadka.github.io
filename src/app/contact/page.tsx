import PageSectionTop from "@/components/layout/PageSectionTop";
import PageHeading from "@/components/PageHeading";
import { contactHeadingData } from "@/data/heading/PageHeading";
import React from "react";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nepidkhadka.github.io/contact"),
  title: "Contact",
  description:
    "Get in touch with me for collaborations, freelance projects, or any queries. I am always open to new opportunities and challenges. Feel free to reach out to me via email or the contact form below.",
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

const Contact = () => {
  return (
    <PageSectionTop>
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <PageHeading data={contactHeadingData} />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </PageSectionTop>
  );
};

export default Contact;
