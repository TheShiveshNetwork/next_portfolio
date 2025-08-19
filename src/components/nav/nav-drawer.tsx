"use client";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { navLinks } from "@/configs/nav.config"
import Link from "next/link"

export function NavDrawer() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Menu />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Shitworks</DrawerTitle>
                    <DrawerDescription>Navigate to the section</DrawerDescription>
                </DrawerHeader>
                <div className="flex items-center justify-center flex-col space-y-2 pb-8">
                    {navLinks.map((link) => (
                        <Link key={`nav-link-${link.name}`} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </DrawerContent>
        </Drawer>
    )
}
