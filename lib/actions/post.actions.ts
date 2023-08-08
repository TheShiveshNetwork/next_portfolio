import PostModel from "../models/post.models";
import { connectToDB } from "../mongoose";

export async function fetchPosts(): Promise<any[]> {
    connectToDB();

    try {
        const posts = await PostModel.find();
        return posts;
    } catch (error) {
        throw new Error('Error fetching projects');
    }
}