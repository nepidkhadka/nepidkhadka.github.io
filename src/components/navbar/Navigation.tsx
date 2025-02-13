"use client"
import { navbar } from '@/data/navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CommonLayout from '../CommonLayout'
import MobileNavigation from './MobileNavigation'
import { usePathname } from 'next/navigation'
import "@/app/globals.css"

const Navigation = () => {

    const [mobilenav, setmobilenav] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <MobileNavigation state={mobilenav} setState={setmobilenav} />
            <header className='fixed top-0 z-40 w-full backdrop-blur-md shadow-sm'>
                <CommonLayout className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo/logo.jpg" alt="logo" width={50} height={50} className='rounded-full h-10 w-10' />
                    </Link>
                    <div className="hidden md:block">
                        <menu className='flex items-center gap-6'>
                            {navbar.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className={`${item.href === "/" ? (pathname === item.href ? "active" : "") : pathname.startsWith(item.href) ? "active" : ""
                                        } font-medium text-primary/60`}>{item.name}</Link>
                                </li>
                            ))}
                        </menu>
                    </div>
                    <div onClick={() => { setmobilenav(!mobilenav) }} className="my-2 flex h-[24px] w-6 cursor-pointer flex-col gap-[5px] md:hidden">
                        <div aria-hidden="true" className={`h-[3px] w-full rounded-full bg-primary transition-all duration-500 ${mobilenav ? "translate-y-2 -rotate-45" : ""}`}>
                        </div>
                        <div aria-hidden="true" className={`h-[3px] w-full rounded-full bg-primary transition-all duration-500 ${mobilenav ? "opacity-0" : ""}`}>
                        </div>
                        <div aria-hidden="true" className={`h-[3px] w-full rounded-full bg-primary transition-all duration-500 ${mobilenav ? "-translate-y-2 rotate-45" : ""}`}>
                        </div>
                    </div>
                </CommonLayout>
            </header>
        </>
    )
}

export default Navigation