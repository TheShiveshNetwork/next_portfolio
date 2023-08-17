import { FormatDate } from "@/constants";
import { findPostById } from "@/lib/actions/post.actions";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import "./style.css"

const Page = async ({ params }: { params: { id: string } }) => {
    const postData = await findPostById(params.id);

    return (
        <div className="p-10 sm:p-20">
            <h1 className="text-center text-4xl mb-2 mt-0">{postData.title}</h1>

            <div className="text-center font-light">{FormatDate(postData.createdAt)}</div>

            <ReactMarkdown
                className="markdown-content mt-10"
            >
                {postData.content}
            </ReactMarkdown>
        </div>
    )
}

export default Page