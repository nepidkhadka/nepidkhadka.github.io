"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight, Facebook, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: "https://github.com/nepidkhadka", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/nepidkhadka/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.facebook.com/nepidkhadka", label: "Facebook", Icon: Facebook },
];

const NAME = ["DIPEN", "KHADKA"];

const Hero = () => {
  return (
    <div className="relative h-[100dvh] max-h-[900px] flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-72 w-72 md:h-96 md:w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for work
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Image
          src="/hero/dipenkhadka.jpg"
          alt="Dipen Khadka — Full-Stack Developer"
          width={320}
          height={320}
          priority
          className="h-48 w-48 xl:h-64 xl:w-64 2xl:h-80 2xl:w-80 rounded-full object-cover object-top"
        />
      </motion.div>

      <div className="space-y-4 overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest flex items-center justify-center gap-4 flex-wrap">
          {NAME.map((word, wIndex) => (
            <span key={wIndex} className="inline-flex">
              {word.split("").map((letter, lIndex) => (
                <motion.span
                  key={`${wIndex}-${lIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: (wIndex * word.length + lIndex) * 0.08,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.2, ease: "linear" }}
          className="text-xl font-medium text-primary/90"
        >
          Full-Stack Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "backInOut" }}
          className="text-lg max-w-lg mx-auto text-muted-foreground"
        >
          I specialize in building interactive web experiences, designing web
          applications, and bringing ideas to life with code.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View Projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Mail className="h-4 w-4" />
          Get in Touch
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: "backInOut" }}
        className="flex items-center justify-center gap-4"
      >
        {socials.map(({ href, label, Icon }) => (
          <Link
            key={label}
            aria-label={label}
            className="border-2 rounded-full p-2 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-2xl transition-all" />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
