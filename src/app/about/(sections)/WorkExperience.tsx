"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience/experience";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 px-2 md:px-0"
    >
      <h3 className="text-2xl font-semibold text-center mb-10">
        Work Experience
      </h3>

      <div className="relative border-l-2 border-border ml-5 md:ml-6 pl-8 md:pl-10 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.startDate}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[3.05rem] md:-left-[3.55rem] top-0 grid place-items-center h-10 w-10 rounded-full border bg-background shadow-sm">
              <Briefcase className="h-4 w-4 text-foreground" />
              {exp.current && (
                <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
              )}
            </span>

            <div className="bg-card p-5 md:p-6 rounded-lg border hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    {exp.company}
                  </h4>
                  <p className="text-sm md:text-base text-foreground/90 mt-0.5">
                    {exp.role}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-1 text-xs font-medium whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm md:text-base text-muted-foreground">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
