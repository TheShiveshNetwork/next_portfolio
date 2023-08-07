"use client"

import { signOut } from "next-auth/react"

const Topbar = () => {
    return (
        <div className="bg-white w-full z-50 fixed p-4 flex justify-between items-center">
            <div className="text-black font-semibold text-lg">
                Dashboard
            </div>
            <button
                onClick={() => signOut()}
                className="text-black text-lg flex items-center space-x-2 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Logout
            </button>
        </div>
    )
}

export default Topbar