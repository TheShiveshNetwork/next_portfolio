"use client"

import { useState } from 'react'

import { menuContent } from "@/constants"
import Link from 'next/link';
import Image from 'next/image';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useTheme } from 'next-themes';
import config from '@/configs/config';

const Topbar = () => {
    const { theme, setTheme } = useTheme();
    const [menuActive, setMenuActive] = useState(false);
    const [fixedScrollbar, setFixedScrollbar] = useState(false);

    window.addEventListener('scroll', () => {
        if (scrollY > 350) {
            setFixedScrollbar(true);
        } else if (scrollY < 160) {
            setFixedScrollbar(false);
        }
    }, true)

    const handleDarkModeToggle = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const handleMenuOpen = () => {
        if (menuActive) {
            setMenuActive(false);
            enablePageScroll();
        } else {
            setMenuActive(true);
            disablePageScroll();
        }
    }

    return (
        <div className={`p-10 transition-all dark:bg-black bg-glassmorphism z-50 top-0 w-screen ${fixedScrollbar ? "sticky bg-white px-8 py-6 opacity-95 top-0 left-0" : ""} ${menuActive ? "h-screen sticky dark:opacity-95 p-16 backdrop-blur-2xl" : !fixedScrollbar ? "backdrop-blur-sm dark:opacity-60 bg-transparent" : ""}`}>

            <div className='w-full flex items-center justify-between'>
                <Link href='/' className='flex gap-3'>
                    <Image
                        src='/assets/logo.svg'
                        alt="logo"
                        height={30}
                        width={30}
                        className='dark:invert'
                    />
                    <h1 className='text-2xl hidden sm:block font-semibold'>
                        {config.portfolio_name}
                    </h1>
                </Link>

                <div
                    onClick={handleMenuOpen}
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
                        <Link href={menu.link} onClick={handleMenuOpen} key={`menu-${index}`}>
                            <p className={`text-xl transition-all animate-[fadeIn_1s_ease-in-out]`}>{menu.name}</p>
                        </Link>
                    ))}

                    <div className={`mt-10 cursor-pointer ${theme === "dark" ? 'invert' : ""}`} onClick={handleDarkModeToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path></svg>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Topbar;