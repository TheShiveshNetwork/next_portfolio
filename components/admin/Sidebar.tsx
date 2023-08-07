"use client"

import { useState } from "react";
import { dashboardMenu } from "@/constants"
import Link from "next/link"
import Image from "next/image"

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("");

    return (
        <div className="w-auto sm:w-[250px] p-5 pt-20 fixed bg-white shadow-lg h-screen">
            <div className="flex flex-col gap-4">
                {dashboardMenu.map((menu) => (
                    <Link
                        href={menu.link}
                        className={`${activeMenu === menu.name ? "bg-blue-500 rounded-lg text-white" : ""} w-full flex gap-2 px-4 py-2 text-lg`}
                        onClick={() => setActiveMenu(menu.name)}
                    >
                        <Image
                            src={menu.image}
                            alt={menu.name}
                            height={20}
                            width={20}
                            className={`object-contain ${activeMenu === menu.name ? "invert" : ""}`}
                        />
                        {menu.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar