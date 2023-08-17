"use client"

import { useState } from "react"

const InputSelect = ({ className, fetchWhat }: { className: string, fetchWhat: string }) => {
    const [selectedOption, setSelectedOption] = useState("All");

    return (
        <div className={className}>
            <label htmlFor="posts" className="text-3xl font-light capitalize">
                {fetchWhat}
            </label>

            <select
                name="posts"
                id="posts"
                className="bg-white border ml-5 border-gray-300 hover:border-gray-400 px-4 py-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option>Latest 3</option>
                <option>Oldest 3</option>
                <option>All</option>
            </select>
        </div>
    )
}

export default InputSelect