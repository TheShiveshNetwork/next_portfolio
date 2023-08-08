import PostModel from "@/lib/models/post.models";
import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

interface NewPostRequest {
    title: string,
    description: string,
    content: string,
    author: string,
}

type NewResponse = NextResponse<{ post?: NewPostRequest; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewPostRequest;

    await connectToDB();

    const post = await PostModel.create({ ...body });

    return NextResponse.json({
        post: {
            id: post._id.toString(),
            title: post.title,
            description: post.description,
            content: post.content,
            author: post.author,
        },
    });
};