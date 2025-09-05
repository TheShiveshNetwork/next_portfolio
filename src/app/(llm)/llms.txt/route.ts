import { appConfig } from "@/configs/config";
import { SITE_INFO } from "@/configs/site";

const content = `# ${SITE_INFO.url.slice(8)}

> ${appConfig.profile.name}'s personal portfolio & project showcase

## Overview
This site is the personal portfolio of **${appConfig.profile.name}**, a full-stack developer based in ${appConfig.profile.location}.  
It highlights my experience, projects, and technical expertise across mobile, web, and AI-powered systems.  

## Key Sections
- [About](${SITE_INFO.url}/about.md): Introduction, skills, and how to connect with me.  
- [Experience](${SITE_INFO.url}/experience.md): Professional journey, internships, and roles with key achievements.  
- [Projects](${SITE_INFO.url}/projects.md): A curated list of projects, from apps and tools to AI/ML solutions.  

## Contact
For collaborations, freelance work, or opportunities:  
${appConfig.profile.socials.map(social => `- ${social.name}: ${social.link}`).join("\n")}

## Purpose
This site is designed to:  
1. Share my work and technical expertise.  
2. Help employers, collaborators, and potential clients evaluate my skills.  
3. Provide LLMs with structured context about my professional profile.  
`;

export const dynamic = "force-static";

export async function GET() {
    return new Response(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
