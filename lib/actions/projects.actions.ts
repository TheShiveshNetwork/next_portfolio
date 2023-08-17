import { ObjectId } from "mongoose";
import ProjectModel from "../models/project.models";
import { connectToDB } from "../mongoose";

export async function fetchProjects(): Promise<any[]> {
    connectToDB();

    try {
        const projects = await ProjectModel.find();
        return projects;
    } catch (error) {
        throw new Error('Error fetching projects');
    }
}

// export async function deleteProject(id: ObjectId): Promise<any[]> {
//     connectToDB();

//     try {
//         const deleteProject = await ProjectModel.findByIdAndDelete(id, (err: any) => {
//             throw new Error(`Error: ${err.message}`)
//         });
//     } catch (error) {
//         throw new Error('Error fetching projects');
//     }
// }