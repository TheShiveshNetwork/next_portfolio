"use client"

import { useState } from "react";
import { dashboardMenu } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className="sticky left-0 bg-white top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-sm:hidden custom-scrollbar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {dashboardMenu.map((menu) => {
                    const isActive = pathname === menu.link;

                    return (
                        <Link
                            href={menu.link}
                            key={menu.name}
                            className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && 'bg-blue-500 text-white'}`}
                        >
                            <Image
                                src={menu.image}
                                alt={menu.name}
                                width={24}
                                height={24}
                                className={`${isActive ? "invert" : ""}`}
                            />
                            <p className="text-light-1 max-lg:hidden">
                                {menu.name}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar