"use client"

import { dashboardMenu } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <nav className="lg:h-screen sticky top-0 lg:top-5 sm:p-6 sm:my-2 sm:mr-4">
            <div className="bg-white h-full shadow-lg px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
                <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                    {dashboardMenu.map((menu) => {
                        const isActive = pathname === menu.link;

                        return (
                            <Link
                            key={`menu-${menu.name}`}
                            className={`p-4 text-gray-700 transition-all inline-flex justify-center rounded-md hover:bg-blue-600 hover:text-white smooth-hover ${isActive && "bg-blue-600 text-white"}`}
                            href={menu.link}
                            >
                                {menu.name === "Dashboard" && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>}
                                {menu.name === "Post" && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex items-center justify-center sm:h-6 sm:w-6" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                                </svg>}
                                {menu.name === "Project" && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                                </svg>}
                            </Link>
                        )
                    })}
                </div>
                <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                    <Link
                        href="/"
                        className="p-4 text-gray-700 transition-all inline-flex justify-center rounded-md hover:bg-blue-600 hover:text-white smooth-hover"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <div className="p-4 text-gray-700 transition-all inline-flex justify-center rounded-md hover:bg-blue-600 hover:text-white smooth-hover cursor-pointer" onClick={() => signOut()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar