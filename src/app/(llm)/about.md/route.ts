import { SITE_INFO } from "@/configs/site";

const content = `# shitworks.co

> A minimal portfolio, component registry, and blog to showcase my work as a Design Engineer.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
`;

export const dynamic = "force-static";

export async function GET() {
    return new Response(content, {
        headers: {
            "Content-Type": "text/markdown;charset=utf-8",
        },
    });
}