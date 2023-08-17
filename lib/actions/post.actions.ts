import { ObjectId } from "mongoose";
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

// export async function deletePost(id: ObjectId): Promise<any[]> {
//     connectToDB();

//     try {
//         const deletePost = await PostModel.findByIdAndDelete(id, (err: any) => {
//             throw new Error(`Error: ${err.message}`)
//         });
//     } catch (error) {
//         throw new Error('Error fetching projects');
//     }
// }