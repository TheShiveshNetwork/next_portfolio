"use client"

import { dashboardMenu } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image"

const Bottombar = () => {
    const pathname = usePathname();
    
    return (
        <section className="fixed bottom-0 z-10 w-full bg-white bg-opacity-75 rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 sm:hidden">
            <div className="flex items-center justify-between gap-3 xs:gap-5">
                {dashboardMenu.map((menu) => {
                    const isActive = pathname === menu.link;

                    return (
                        <Link
                            href={menu.link}
                            key={menu.name}
                            className={`relativeflex flex-col items-center gap-2 rounded-full p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${isActive && 'bg-blue-500 text-white'}`}
                        >
                            <Image
                                src={menu.image}
                                alt={menu.name}
                                width={24}
                                height={24}
                                className={`${isActive ? "invert" : ""}`}
                            />
                            <p className="text-light-1 text-subtle-medium max-md:hidden">
                                {menu.name.split(/\s+/)[0]}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Bottombar