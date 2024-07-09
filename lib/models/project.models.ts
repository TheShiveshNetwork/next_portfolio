import { Model, models, model, Document, Schema } from "mongoose";

interface ProjectDocument extends Document {
    image: string;
    date: string;
    heading: string;
    content: string;
    nativeButton: {
        text: string,
        className: string,
        action: string,
    };
    customButton: {
        text: string,
        className: string,
        action: string,
    };
}

const projectSchema = new Schema<ProjectDocument>({
    image: { type: String },
    date: { type: String, required: true },
    heading: { type: String, required: true },
    content: { type: String, required: true },
    nativeButton: {
        text: { type: String },
        className: { type: String },
        action: { type: String },
    },
    customButton: {
        text: { type: String },
        className: { type: String },
        action: { type: String },
    },
});

const ProjectModel = models.Projects || model("Projects", projectSchema);

export default ProjectModel as Model<ProjectDocument>;