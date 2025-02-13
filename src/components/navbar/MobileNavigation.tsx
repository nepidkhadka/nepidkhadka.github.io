import { navbar } from '@/data/navbar/navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
                    transition={{ duration: 0.3 }}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 500, opacity: 0 }}
                    className="fixed z-[10000] h-screen w-screen bg-secondary md:hidden top-[72px] px-6 grid place-items-center">
                    <menu className='flex flex-col items-center gap-6'>
                        {navbar.map((item, index) => (
                            <li key={index}>
                                <Link onClick={() => { setState(false) }} href={item.href} className={`${item.href === "/" ? (pathname === item.href ? "active" : "") : pathname.startsWith(item.href) ? "active" : ""
                                    } font-medium text-primary/60`}>{item.name}</Link>                            </li>
                        ))}
                    </menu>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileNavigation