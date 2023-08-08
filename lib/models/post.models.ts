import { Model, models, model, Document, Schema } from "mongoose";

interface PostDocument extends Document {
    title: string,
    content: string,
    description: string,
    author: string,
    createdAt: Date,
}

const postSchema = new Schema<PostDocument>({
    title: { type: String, required: true },
    description: { type: String },
    content: { type: String, required: true },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const PostModel = models.Posts || model("Posts", postSchema);

export default PostModel as Model<PostDocument>;