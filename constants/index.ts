import config from "@/configs/config";
import { Montserrat, Tilt_Prism, Satisfy, Ubuntu } from "next/font/google"

export const tilt_prism = Tilt_Prism({
    subsets: ['latin'],
    weight: ['400'],
});

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400'],
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const satisfy = Satisfy({
    subsets: ['latin'],
    weight: ['400'],
});

export const menuContent = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
]

export const githubCodeUrl = 'https://github.com/TheShiveshNetwork/next_portfolio';

export const toolsUsed = [
    {
        name: "NextJS",
        image: "/assets/nextjs.png"
    },
    {
        name: "TailwindCSS",
        image: "/assets/tailwind.png"
    },
    {
        name: "MongoDB",
        image: "/assets/mongodb.png"
    },
]

export const dashboardMenu = [
    {
        name: "Dashboard",
        link: "/dashboard",
        image: "/assets/dashboard.png",
    },
    {
        name: "Post",
        link: "/dashboard/create-post",
        image: "/assets/post-create.png",
    },
    {
        name: "Project",
        link: "/dashboard/create-project",
        image: "/assets/project-create.png",
    },
]

export const SocialData = [
    {
        name: 'Linkedin',
        icon: '/assets/linkedin.svg',
        url: config.linkedinUrl,
    },
    {
        name: 'Github',
        icon: '/assets/github.svg',
        url: config.githubUrl,
    },
]