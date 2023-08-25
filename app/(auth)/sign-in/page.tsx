"use client"

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const Page = () => {
    const [loggingIn, setLoggingIn] = useState(false);
    const [error, setError] = useState("");

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userInfo;

    const router = useRouter();

    const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        setLoggingIn(true);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setLoggingIn(false);
            return setError(res.error);
        }
        router.replace('/dashboard')

        setLoggingIn(false);
    }

    const handleChande: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="mx-auto w-80 p-6 border rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Admin Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChande}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChande}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    {error && (
                        <div className="w-full rounded-lg p-2 my-3 border-red-500 bg-red-300 text-red-500">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 transition-all bg-blue-500 disabled:bg-blue-200 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
                        disabled={loggingIn}
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page