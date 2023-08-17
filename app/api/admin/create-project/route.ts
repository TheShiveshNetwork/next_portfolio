import ProjectModel from "@/lib/models/project.models";
import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

interface NewProjectRequest {
    image?: string;
    date: string;
    heading: string;
    content: string;
    nativeButton?: {
        text?: string,
        className?: string,
        action?: string,
    };
    customButton?: {
        text?: string,
        className?: string,
        action?: string,
    };
}

type NewResponse = NextResponse<{ project?: NewProjectRequest; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewProjectRequest;

    await connectToDB();

    const project = await ProjectModel.create({ ...body });

    return NextResponse.json({
        project: {
            id: project._id.toString(),
            image: project.image,
            date: project.date,
            heading: project.heading,
            content: project.content,
            nativeButton: project.nativeButton,
            customButton: project.customButton,
        },
    });
};