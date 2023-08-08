"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation";

const Page = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        author: "",
        path: "",
    })

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/admin/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(() => {
                router.push("/dashboard")
            });

        } catch (error) {
            console.error('Error creating project:', error);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        if (session?.user) {
            setFormData((prevData) => ({
                ...prevData,
                author: `${session?.user?.name}`,
            }))
        } else {
            router.push("/sign-in")
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="min-h-screen pt-20 pb-10 w-full flex items-center justify-center">
            <div className="w-[50%] mx-auto p-6 border rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Create Project</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            rows={4}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page