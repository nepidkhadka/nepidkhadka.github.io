import { navbar } from '@/data/navbar/navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'

type MobileNavProps = {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}

const MobileNavigation = ({ state, setState }: MobileNavProps) => {

    const pathname = usePathname();

    return (
        <AnimatePresence>
            {state && (
                <motion.div
                    transition={{ duration: 0.5, ease: "backInOut" }}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 500, opacity: 0 }}
                    className="fixed z-[10000] h-[100dvh] w-screen backdrop-blur-3xl md:hidden top-[72px] px-6 grid place-items-center">
                    <menu className='flex flex-col items-center gap-8'>
                        {navbar.map((item, index) => (
                            <li key={index}>
                                <Link onClick={() => { setState(false) }} href={item.href} className={`${item.href === "/" ? (pathname === item.href ? "active" : "") : pathname.startsWith(item.href) ? "active" : ""
                                    } text-xl font-medium text-primary/60`}>{item.name}</Link>                            </li>
                        ))}
                    </menu>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileNavigation