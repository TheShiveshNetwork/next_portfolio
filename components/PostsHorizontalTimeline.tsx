import { fetchPosts } from "@/lib/actions/post.actions";
import PostCard from "./shared/PostCard";

interface Props {
    className: string;
}

const PostsHorizontalTimeline = async ({ className }: Props) => {
    const posts = await fetchPosts();

    return (
        <div className={className}>
            <ol className="items-center sm:flex">
                {posts.reverse().slice(0, 3).map((post, idx) => (
                    <li
                        key={`post-${idx}`}
                        className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex dark:animate-pulse items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <PostCard
                            idx={idx}
                            id={post._id.toString()}
                            title={post.title}
                            description={post.description}
                            createdAt={post.createdAt}
                        />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PostsHorizontalTimeline;