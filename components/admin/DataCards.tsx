import { FormatDate } from "@/lib/formatDate";
import { fetchPosts } from "@/lib/actions/post.actions";
import { fetchProjects } from "@/lib/actions/projects.actions";
import Image from "next/image";
import Link from "next/link";

const DataCards = async ({ fetchWhat }: { fetchWhat: string }) => {
    let dataSet = [];
    if (fetchWhat === "posts") { dataSet = await fetchPosts() }
    if (fetchWhat === "projects") { dataSet = await fetchProjects() }

    return (
        <div className="mb-10 sm:mb-0 mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href={`/dashboard/create-${fetchWhat === "posts" ? "post" : "project"}`} className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
                <div className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <div className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center">Create {fetchWhat}</div>
            </Link>

            {dataSet.map((data, idx) => (
                <Link
                    key={`post-${idx}`}
                    href={`/post/${data._id}`}
                    target="_blank"
                    className="relative group bg-white shadow-lg transition-all py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-slate-100v hoer:smooth-hover">
                    {data.image &&
                        <Image
                            className="w-full h-20 object-cover object-center"
                            src={data.image}
                            alt="cuisine"
                            width={100}
                            height={100}
                        />
                    }
                    <h4 className="text-2xl font-bold capitalize text-center">{data.title || data.heading}</h4>
                    {data.createdAt && (
                        <p className="">{FormatDate(data.createdAt)}</p>
                    )}
                </Link>
            ))}
        </div>
    )
}

export default DataCards