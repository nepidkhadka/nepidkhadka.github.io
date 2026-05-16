"use client";
import { motion } from "framer-motion";

const PageHeading = ({ data }: { data: pageHeadingType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {data.eyebrow && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/70 mb-4"
        >
          {data.eyebrow}
        </motion.span>
      )}

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-4">
        {data.title}
      </h1>

      <p className="text-base md:text-lg max-w-xl mx-auto text-muted-foreground leading-relaxed">
        {data.description}
      </p>
    </motion.div>
  );
};

export default PageHeading;
