"use client";
import { navbar } from "@/data/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CommonLayout from "../layout/CommonLayout";
import MobileNavigation from "./MobileNavigation";
import { usePathname } from "next/navigation";
import "@/app/globals.css";

const Navigation = () => {
    const [mobilenav, setmobilenav] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = mobilenav ? "hidden" : "auto";
    }, [mobilenav]);

    return (
        <>
            <header className="fixed top-0 z-40 w-full backdrop-blur-md shadow-sm border-b">
                <CommonLayout className="flex items-center justify-between">
                    {/* Logo + name */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <Image
                            src="/logo/logo.jpg"
                            alt="Dipen Khadka"
                            width={50}
                            height={50}
                            className="rounded-full h-9 w-9"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                Dipen Khadka
                            </span>
                            <span className="text-[10px] text-muted-foreground tracking-wide">
                                Full-Stack Developer
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:block" aria-label="Main">
                        <menu className="flex items-center gap-6">
                            {navbar.map((item, index) => {
                                const isActive =
                                    item.href === "/"
                                        ? pathname === item.href
                                        : pathname.startsWith(item.href);
                                return (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={`nav-link font-medium text-primary/60 ${isActive ? "active" : ""}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </menu>
                    </nav>

                    {/* Hamburger */}
                    <button
                        type="button"
                        aria-label={mobilenav ? "Close menu" : "Open menu"}
                        aria-expanded={mobilenav}
                        onClick={() => setmobilenav(!mobilenav)}
                        className="my-2 flex h-[24px] w-6 cursor-pointer flex-col gap-[5px] md:hidden"
                    >
                        <div
                            aria-hidden="true"
                            className={`h-[3px] w-full rounded-full bg-primary transition-all duration-500 ${mobilenav ? "translate-y-2 -rotate-45" : ""}`}
                        />
                        <div
                            aria-hidden="true"
                            className={`h-[3px] w-full rounded-full bg-primary transition-all duration-500 ${mobilenav ? "opacity-0" : ""}`}
                        />
                        <div
                            aria-hidden="true"
                            className={`h-[3px] w-full rounded-full bg-primary transition-all duration-500 ${mobilenav ? "-translate-y-2 rotate-45" : ""}`}
                        />
                    </button>
                </CommonLayout>
            </header>
            <MobileNavigation state={mobilenav} setState={setmobilenav} />
        </>
    );
};

export default Navigation;
