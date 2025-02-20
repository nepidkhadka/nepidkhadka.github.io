"use client"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { projectsData } from '@/data/projects/projects';
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ProjectsCard = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12">
            <div className="grid md:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                    <Drawer key={index}>
                        <DrawerTrigger asChild>
                            <div className="bg-background border rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition space-y-2"
                                onClick={() => setSelectedProject(project)}>
                                <Image height={500} width={500} src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                            </div>
                        </DrawerTrigger>

                        <DrawerContent>
                            <DrawerTitle>
                                <span className="sr-only">Project Details</span>
                            </DrawerTitle>
                            {selectedProject && (
                                <div className="p-6">
                                    <Image height={500} width={600} quality={100} src={selectedProject.image} alt={selectedProject.title} className="lg:h-[60dvh] object-contain w-full rounded-lg mb-4" />
                                    <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                                    <p className="text-muted-foreground">{selectedProject.description}</p>

                                    <div className="mt-4">
                                        <h4 className="text-lg font-semibold">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {selectedProject.techStack.map((tech, i) => (
                                                <span key={i} className="bg-background p-3 rounded-lg border px-2 py-1 text-sm">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        {selectedProject.githubLink && (
                                            <a href={selectedProject.githubLink} target="_blank" className="flex items-center gap-2 hover:opacity-80">
                                                <Github size={20} /> GitHub
                                            </a>
                                        )}
                                        {selectedProject.liveLink && (
                                            <a href={selectedProject.liveLink} target="_blank" className="flex items-center gap-2 hover:opacity-80">
                                                <ExternalLink size={20} /> Live Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </DrawerContent>
                    </Drawer>
                ))}
            </div>

        </motion.div>
    )
}

export default ProjectsCard