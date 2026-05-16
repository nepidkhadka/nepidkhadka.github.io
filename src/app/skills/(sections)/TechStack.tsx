"use client";
import { techStack } from "@/data/skills/skillsData";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 grid gap-5 md:grid-cols-2"
    >
      {techStack.map((section, index) => (
        <motion.div
          key={section.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group rounded-2xl border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold tracking-tight">
              {section.category}
            </h3>
            <span className="text-xs font-medium text-muted-foreground tabular-nums rounded-full border px-2 py-0.5">
              {section.skills.length}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {section.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center bg-background px-3 py-1.5 rounded-full border text-sm font-medium text-foreground/90 hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
