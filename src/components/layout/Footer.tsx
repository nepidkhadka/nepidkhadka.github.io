import { siteConfig } from "@/data/site/siteConfig";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-16">
      <div className="max-w-screen-2xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
