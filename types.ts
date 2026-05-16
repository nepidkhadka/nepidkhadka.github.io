type pageHeadingType = {
  eyebrow?: string;
  title: string;
  description: string;
};

type Project = {
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
};
