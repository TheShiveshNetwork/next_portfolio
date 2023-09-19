"use client"

import { sendEmail } from '@/lib/actions/mailer.actions';
import { useRef, useState } from 'react';

const ContactForm = ({ className }: { className: string }) => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    })
    const [sending, setSending] = useState(false);

    const [message, setMessage] = useState({
        text: '',
        success: false
    })

    const handleFormChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (formData.email === "" || formData.fullname === "" || formData.message === "" || formData.subject === "") {
            setMessage({ text: "Please fill up the form!", success: false })
        } else {
            // @ts-ignore
            sendEmail(form.current, setMessage, setSending)
        }
    }

    return (
        <form
            // @ts-ignore
            ref={form}
            onSubmit={(e) => handleSubmit(e)}
            className={className}
        >
            <h1 className="text-2xl font-bold mb-8">
                Send a message
            </h1>

            {message.text && (
                <div className={`${message.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} p-3 rounded mb-10`}>
                    {message.text}
                </div>
            )}

            <label
                htmlFor="fullname"
                className=""
            >
                Full name<span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleFormChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light mb-5"
            />

            <label
                htmlFor="email"
                className=""
            >
                E-mail<span className="text-red-500">*</span>
            </label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light mb-5"
            />

            <label
                htmlFor="subject"
                className=""
            >
                Subject<span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light mb-5"
            />

            <label
                htmlFor="message"
                className=""
            >
                Message<span className="text-red-500">*</span>
            </label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-500 font-light mb-5"
            ></textarea>

            <div className="flex flex-row items-center justify-start">
                <button
                    type="submit"
                    className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center disabled:bg-[#bab7ff]"
                    disabled={sending}
                >
                    {sending ?
                        "Sending"
                        : <>
                            Send
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="text-cyan-500 ml-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </>
                    }
                </button>
            </div>

        </form>
    )
}

export default ContactForm