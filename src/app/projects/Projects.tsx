"use client";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { projectsData } from "@/data/projects/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
          className="group text-left bg-background border rounded-xl shadow-sm hover:shadow-lg p-4 cursor-pointer space-y-3 transition-all hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              height={500}
              width={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground text-sm">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-muted-foreground px-2 py-0.5">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </motion.button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerTitle>
          <span className="sr-only">{project.title} — Project Details</span>
        </DrawerTitle>
        <div className="p-6 overflow-y-auto">
          <Image
            height={500}
            width={600}
            quality={100}
            sizes="(max-width: 1024px) 100vw, 80vw"
            src={project.image}
            alt={project.title}
            className="lg:h-[60dvh] object-contain w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-muted-foreground">{project.description}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-background border rounded-lg px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            {project.githubLink && project.githubLink !== "#" && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Github size={20} /> GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <ExternalLink size={20} /> Live Site
              </a>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const ProjectsCard = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
