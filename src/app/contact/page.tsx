import PageSectionTop from "@/components/layout/PageSectionTop";
import PageHeading from "@/components/PageHeading";
import { contactHeadingData } from "@/data/heading/PageHeading";
import React from "react";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

const description =
  "Have an idea, a role, or a project in mind? Reach out via the contact form and I'll get back to you soon.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Dipen Khadka",
    description,
    url: "/contact",
  },
  twitter: {
    title: "Contact | Dipen Khadka",
    description,
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
