"use client"
import { techStack } from '@/data/skills/skillsData'
import { motion } from 'framer-motion'

const TechStack = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16">
            {techStack.map((section, index) => (
                <div key={index} className="mb-10">
                    <h3 className="text-xl font-semibold mb-6">{section.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {section.skills.map((skill, i) => (
                            <div key={i} className="bg-background p-3 rounded-lg border shadow-sm transition delay-150 ease-linear cursor-pointer">{skill}</div>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    )
}

export default TechStack