import { appConfig } from "@/configs/config";

const content = `# About Me  

![Profile Image](${appConfig.profile.image})

Hello 👋 I’m **${appConfig.profile.name}**, a developer based in ${appConfig.profile.location}.

Hello 👋 I’m **${appConfig.profile.name}**, a developer based in ${appConfig.profile.location}.

${appConfig.profile.sentences.join("\n\n")}  

## What I Do
${appConfig.profile.panel.map(panel => `- ${panel.text}`).join("\n")}  

## Contact
${appConfig.profile.socials.map(social => `- ${social.name}: ${social.link}`).join("\n")}  
`;

export const dynamic = "force-static";

export async function GET() {
    return new Response(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
