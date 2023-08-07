import UserModel from "@/lib/models/user.models";
import { connectToDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

interface NewUserRequest {
    name: string;
    email: string;
    password: string;
}

interface NewUserResponse {
    id: string;
    name: string;
    email: string;
    role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewUserRequest;

    await connectToDB();

    const oldUser = await UserModel.findOne({ email: body.email });

    if (oldUser) return NextResponse.json(
        { error: "email is already in use" },
        { status: 422 }
    );

    const user = await UserModel.create({ ...body });

    return NextResponse.json({
        user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
        },
    });
};