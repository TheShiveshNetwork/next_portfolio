"use client"

// import { signInWithGoogle } from "@/lib/firebase";

import { useState } from "react";


const Page = () => {
    const [user, setUser] = useState('')

    const handleSignIn = () => { }

    return (
        <div>
            Sign In

            <div className="p-5 w-20 cursor-pointer bg-blue-500 rounded-lg" onClick={() => handleSignIn()}>
                Sign In with google
            </div>
        </div>
    )
}

export default Page