import { appConfig } from "@/configs/config";
import { ALL_PROJECTS } from "@/configs/projects";


const content = `# Projects  

Here are some of my selected works:  

${ALL_PROJECTS.map(
    (project) => `## ${project.title}  
${project.longDescription}  

- **Type:** ${project.type}  
- **Stack:** ${project.stack.join(", ")}  
${project.image ? `![Project Image](${project.image})` : ""}  
`
).join("\n---\n")}  

👉 See more on [my GitHub](${appConfig.githubUrl})  
`;

export const dynamic = "force-static";

export async function GET() {
    return new Response(content, {
        headers: {
            "Content-Type": "text/markdown;charset=utf-8",
        },
    });
}
