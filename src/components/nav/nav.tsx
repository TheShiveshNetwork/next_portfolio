"use client";

import Link from "next/link";
import { ThemeToggle } from "../common/theme-toggle";
import { useEffect, useState } from "react";
import { INavItem } from "@/types";
import { navLinks } from "@/configs/nav.config";
import { NavDrawer } from "./nav-drawer";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
import { appConfig } from "@/configs/config";
import { usePathname } from "next/navigation";
import { SITE_INFO } from "@/configs/site";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-screen fixed top-0 left-0 z-50 px-6 md:px-0 h-14 flex items-center
                        ${isScrolled && "bg-background/50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 shadow-md"}`}
        >
            <div className="mx-auto max-w-4xl w-full flex items-center justify-between">
                <Link href={"/"} className="font-semibold">{SITE_INFO.site_name}</Link>
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.slice(1).map(link => (
                        <NavLink key={link.name} {...link} />
                    ))}
                    <GithubButton />
                    <ThemeToggle />
                </div>
                <div className="flex gap-4 items-center justify-center md:hidden">
                    <GithubButton />
                    <ThemeToggle />
                    <NavDrawer />
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, label }: INavItem) {
    const pathname = usePathname();
    return (
        <Link href={href} className={`text-sm font-medium ${pathname === href ? 'text-primary' : 'text-muted-foreground'}`}
            target={href.startsWith("https://") ? "_blank" : "_self"}>
            {label}
        </Link>
    );
}

function GithubButton() {
    return (
        <Button
            variant={"outline"}
            className='rounded-full h-10 w-10 p-0 cursor-pointer'
        >
            <Link href={appConfig.githubUrl} className="w-full rounded-full h-full flex items-center justify-center" target="_blank">
                <GithubIcon />
            </Link>
        </Button>
    )
}
