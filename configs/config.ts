import { AboutMe, Headline } from "./about-me";

const config = {
    portfolio_name: "TheShiveshNetwork",
    name: "Shivesh Tiwari",
    headline: Headline,     // change the content in about-me.ts
    aboutMe: AboutMe,       // change the content in about-me.ts
    githubUrl: "https://github.com/TheShiveshNetwork",
    linkedinUrl: "https://www.linkedin.com/in/shivesh-tiwari-88b451242",
} as const;

export default config;