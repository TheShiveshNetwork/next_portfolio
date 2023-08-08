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