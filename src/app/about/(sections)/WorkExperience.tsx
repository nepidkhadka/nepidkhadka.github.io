"use client"
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const WorkExperience = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 px-4 md:px-0">
            <h3 className="text-2xl font-semibold text-center mb-8">Work Experience</h3>
            <div className="relative border-l-4 border-muted-foreground pl-6 space-y-8">
                <div className="relative">
                    <Briefcase className="rounded-full border absolute -left-12 p-2 -top-1 h-10 w-10 text-white bg-muted-foreground" />
                    <div className="bg-background p-6 rounded-lg border-2">
                        <h4 className="text-xl font-semibold">Metalogic Software Pvt. Ltd.</h4>
                        <p className="text-foreground">Full Stack Developer (MERN) | Nov 2024 - Present</p>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                            <li>Built scalable web applications using React/Next.js, TypeScript, Node.js, and MongoDB.</li>
                            <li>Developed responsive UI components focusing on performance and UX.</li>
                            <li>Integrated RESTful APIs for smooth frontend-backend communication.</li>
                            <li>Collaborated in agile teams and utilized Git for version control and teamwork.</li>
                        </ul>
                    </div>
                </div>

                <div className="relative">
                    <Briefcase className="rounded-full border absolute -left-12 p-2 -top-1 h-10 w-10 text-white bg-muted-foreground" />
                    <div className="bg-background p-6 rounded-lg border-2">
                        <h4 className="text-xl font-semibold">Binary Shastra Private Limited</h4>
                        <p className="text-foreground">Frontend Developer | Feb 2024 - Sep 2024</p>
                        <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                            <li>Developed responsive, dynamic frontends with HTML, CSS, Bootstrap, and JavaScript/React.</li>
                            <li>Enhanced UX with modern design principles and cross-browser compatibility.</li>
                            <li>Collaborated with backend teams for seamless integration and functionality.</li>
                            <li>Utilized Git for streamlined version control and team collaboration.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default WorkExperience