import { navbar } from "@/data/navbar/navbar";
import { siteConfig } from "@/data/site/siteConfig";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type MobileNavProps = {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
};

const socials = [
    { href: siteConfig.social.github, label: "GitHub", Icon: Github },
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
];

const MobileNavigation = ({ state, setState }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {state && (
                <motion.div
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="fixed z-[10000] w-screen backdrop-blur-3xl md:hidden top-[57px] bottom-0 px-6 flex flex-col items-center justify-center gap-12"
                >
                    {/* Nav links */}
                    <menu className="flex flex-col items-center gap-7">
                        {navbar.map((item, index) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === item.href
                                    : pathname.startsWith(item.href);
                            return (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.06 }}
                                >
                                    <Link
                                        onClick={() => setState(false)}
                                        href={item.href}
                                        className={`nav-link text-2xl font-semibold text-primary/60 ${isActive ? "active" : ""}`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </menu>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="flex items-center gap-5"
                    >
                        {socials.map(({ href, label, Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                onClick={() => setState(false)}
                                className="border-2 rounded-full p-2 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
                            >
                                <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNavigation;
