"use client"

import { FormatDate } from "@/lib/formatDate";
import Link from "next/link";
import { useState } from "react";
import Loader from "../Loader";

const PostCard = ({ id, title, idx, description, createdAt }: { id: string, title: string, idx: number, description: string, createdAt: Date }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className="mt-3 sm:pr-8">
                <div className="flex">
                    <Link
                        onClick={() => setLoading(true)}
                        href={`/post/${id}`}
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                    </Link>
                    {idx === 0 && (
                        <span className="bg-blue-100 max-h-7 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            Latest
                        </span>
                    )}
                </div>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on {FormatDate(createdAt)}</time>
                {description && (
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                )}
            </div>
            {loading && <Loader />}
        </>
    )
}

export default PostCard