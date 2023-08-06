"use client"

import { useState } from 'react'

import { menuContent } from "@/constants"
import Link from 'next/link';

const Topbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    if (darkMode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <div className={`p-10 transition-all dark:bg-black bg-glassmorphism z-50 top-0 w-full ${menuActive ? "h-screen sticky dark:opacity-95 p-16 backdrop-blur-2xl" : "backdrop-blur-sm dark:opacity-60 bg-transparent"}`}>

            <div className='w-full flex items-center justify-between'>
                <h1 className='text-xl'>
                    TheShiveshNetwork
                </h1>

                <div
                    onClick={() => setMenuActive(!menuActive)}
                    className={`h-[20px] w-[25px] flex flex-col cursor-pointer ${menuActive ? "justify-between" : "gap-[5px]"}`}
                >
                    <div className={`h-[4px] w-full relative transition-all bg-black dark:bg-white rounded-lg ${menuActive ? "top-[50%] rotate-[45deg]" : ""}`} />
                    {!menuActive &&
                        <div className="h-[4px] w-full bg-black dark:bg-white rounded-lg" />
                    }
                    <div className={`h-[4px] w-full relative transition-all bg-black dark:bg-white rounded-lg ${menuActive ? "bottom-[calc(50%-5px)] rotate-[-45deg]" : ""}`} />
                </div>
            </div>


            {menuActive && (
                <div className='h-full w-full flex flex-col gap-3 items-center justify-center'>
                    {menuContent.map((menu, index) => (
                        <Link href={menu.link} onClick={() => setMenuActive(false)}>
                            <p className={`text-xl transition-all animate-[fadeIn_1s_ease-in-out]`}>{menu.name}</p>
                        </Link>
                    ))}

                    <div className={`mt-10 cursor-pointer ${darkMode ? 'invert' : ""}`} onClick={() => setDarkMode(!darkMode)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path></svg>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Topbar