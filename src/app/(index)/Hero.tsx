"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import { Facebook, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="h-[100dvh] max-h-[900px] flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}>
                <Image
                    src="/hero/hero.png"
                    alt="Dipen Khadka"
                    width={200}
                    height={200}
                    priority
                    className="h-64 w-64 object-contain"
                />
            </motion.div>

            <div className="space-y-4 overflow-hidden" >
                <motion.h1
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold tracking-widest">
                    {["D", "I", "P", "E", "N", "K", "H", "A", "D", "K", "A"].map((letter, index) => (
                        <motion.span key={index} className={`inline-block ${index == 5 && "ml-4"}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 1.2, ease: "linear" }} className="text-xl font-medium text-primary/90">
                    Full-Stack Developer
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4, ease: "backInOut" }} className="text-lg max-w-lg mx-auto text-muted-foreground">
                    I specialize in building interactive web experiences, designing web applications, and bringing ideas to life with code.
                </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8, ease: "backInOut" }} className="flex items-center justify-center gap-4">
                <Link className='border-2 rounded-full p-2 text-muted-foreground' href="https://github.com/nepidkhadka" target="_blank" rel="noopener noreferrer">
                    <Github className="text-2xl hover:opacity-70 transition-all" />
                </Link>
                <Link className='border-2 rounded-full p-2 text-muted-foreground' href="https://www.linkedin.com/in/nepidkhadka/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-2xl hover:opacity-70 transition-all" />
                </Link>
                <Link className='border-2 rounded-full p-2 text-muted-foreground' href="https://www.facebook.com/nepidkhadka" target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-2xl hover:opacity-70 transition-all" />
                </Link>
            </motion.div>
        </div>
    )
}

export default Hero
