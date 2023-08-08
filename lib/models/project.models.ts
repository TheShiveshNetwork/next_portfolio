import { Model, models, model, Document, Schema } from "mongoose";

interface ProjectDocument extends Document {
    image: string;
    date: string;
    heading: string;
    content: string;
    isLatest: boolean;
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
    isLatest: { type: Boolean },
    nativeButton: {
        text: { type: String, required: true },
        className: { type: String },
        action: { type: String, required: true },
    },
    customButton: {
        text: { type: String, required: true },
        className: { type: String },
        action: { type: String, required: true },
    },
});

const ProjectModel = models.Projects || model("Projects", projectSchema);

export default ProjectModel as Model<ProjectDocument>;