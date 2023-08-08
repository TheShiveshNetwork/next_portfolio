"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
    const [formData, setFormData] = useState({
        image: "",
        date: "",
        heading: "",
        content: "",
        isLatest: false,
        nativeButton: {
            text: "",
            className: "",
            action: "",
        },
        customButton: {
            text: "",
            className: "",
            action: "",
        },
    });

    const router = useRouter();

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/admin/create-project', {
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
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        if (name.startsWith('nativebutton-')) {
            // Handle nested object properties (nativeButton)
            const buttonProperty = name.replace('nativebutton-', '');
            setFormData((prevData) => ({
                ...prevData,
                nativeButton: {
                    ...prevData.nativeButton,
                    [buttonProperty]: value,
                },
            }));
        } else if (name.startsWith('custombutton-')) {
            // Handle nested object properties (customButton)
            const buttonProperty = name.replace('custombutton-', '');
            setFormData((prevData) => ({
                ...prevData,
                customButton: {
                    ...prevData.customButton,
                    [buttonProperty]: value,
                },
            }));
        } else {
            // Handle regular form fields
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <div className="min-h-screen pt-20 pb-10 w-full flex items-center justify-center">
            <div className="w-[50%] mx-auto p-6 border rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Create Project</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium">
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium">
                            Date
                        </label>
                        <input
                            type="text"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="heading" className="block text-sm font-medium">
                            Heading
                        </label>
                        <input
                            type="text"
                            id="heading"
                            name="heading"
                            value={formData.heading}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                            required
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
                    <h1 className="text-2xl">Native Button</h1>
                    <div className="mb-4">
                        <label htmlFor="nativebutton-text" className="block text-sm font-medium">
                            Native Button Text
                        </label>
                        <input
                            type="text"
                            id="nativebutton-text"
                            name="nativebutton-text"
                            value={formData.nativeButton.text}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nativebutton-className" className="block text-sm font-medium">
                            Native Button Classes
                        </label>
                        <input
                            type="text"
                            id="nativebutton-className"
                            name="nativebutton-className"
                            value={formData.nativeButton.className}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nativebutton-action" className="block text-sm font-medium">
                            Native Button Action
                        </label>
                        <input
                            type="text"
                            id="nativebutton-action"
                            name="nativebutton-action"
                            value={formData.nativeButton.action}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <h1 className="text-2xl">Custom Button</h1>
                    <div className="mb-4">
                        <label htmlFor="custombutton-text" className="block text-sm font-medium">
                            Custom Button Text
                        </label>
                        <input
                            type="text"
                            id="custombutton-text"
                            name="custombutton-text"
                            value={formData.customButton.text}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="custombutton-className" className="block text-sm font-medium">
                            Custom Button Classes
                        </label>
                        <input
                            type="text"
                            id="custombutton-className"
                            name="custombutton-className"
                            value={formData.customButton.className}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="custombutton-action" className="block text-sm font-medium">
                            Custom Button Action
                        </label>
                        <input
                            type="text"
                            id="custombutton-action"
                            name="custombutton-action"
                            value={formData.customButton.action}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
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