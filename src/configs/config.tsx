import { Button } from "@/components/ui/button";
import { IAppConfig } from "@/types";
import { Code, Github, Globe, Lightbulb, Linkedin, MapPin, TwitterIcon } from "lucide-react";
import Link from "next/link";

export const appConfig: IAppConfig = {
    profile: {
        name: 'Shivesh Tiwari',
        image: 'https://pbs.twimg.com/profile_images/1907872571028058112/bj7cnwbr_400x400.jpg',
        sentences: [
            'Full stack engineer',
            'App Developer',
            'AI Developer',
            'Open source contributor',
        ],
        panel: [
            {
                icon: Code,
                text: 'Full stack engineer',
            },
            {
                icon: Lightbulb,
                text: (
                    <>
                        Co-founder @
                        <Button variant={"link"} className="p-0 text-md">
                            <Link href={'https://escaleit.in'}>Escaleit</Link>
                        </Button>
                    </>
                ),
            },
            {
                icon: MapPin,
                text: 'Bengaluru, India',
            },
            {
                icon: Globe,
                text: <Button variant={"link"} className="p-0 text-md">
                    <Link href={'https://shitworks.co'}>shitworks.co</Link>
                </Button>,
            },
        ],
        socials: [
            {
                name: 'Github',
                icon: Github,
                link: 'https://github.com/TheShiveshNetwork',
                username: 'TheShiveshNetwork'
            },
            {
                name: 'X',
                icon: TwitterIcon,
                link: 'https://x.com/whoisshivesh',
                username: 'whoisshivesh'
            },
            {
                name: 'LinkedIn',
                icon: Linkedin,
                link: 'https://www.linkedin.com/in/shivesh-tiwari-88b451242',
                username: 'shivesh-tiwari'
            },
            {
                name: 'Medium',
                icon: Globe,
                link: 'https://mrknown404.medium.com',
                username: 'mrknown404'
            }
        ]
    },
    experience: [
        {
            id: "1",
            companyName: "Escaleit",
            companyLogo: "http://escaleit.in/_app/immutable/assets/escaleit_logo.DmD4-_D8.png",
            isCurrentEmployer: true,
            positions: [
                {
                    id: "2-1",
                    title: "Co-founder",
                    employmentPeriod: "Jan 2025 - Present",
                    employmentType: "Full-time",
                    description: "Leading a marketing agency",
                    icon: "business",
                    skills: ["SEO", "Marketing"],
                    isExpanded: true,
                },
            ],
        },
        {
            id: "2",
            companyName: "Livana Technologies",
            companyLogo: "https://mybazaar.co.in/assets/Logo-Cxj6cGbY.png",
            positions: [
                {
                    id: "1-1",
                    title: "Full stack Engineer Intern",
                    employmentPeriod: "Dec 2022 - Jun 2025",
                    employmentType: "Full-time",
                    description: "Leading a team of developers to build scalable web applications.",
                    icon: "code",
                    skills: ["Typescript", "Express", "MongoDB", "Node.js", "React"],
                    isExpanded: true,
                },
            ],
        },
    ],
    mediumUsername: 'mrknown404',
    githubUrl: 'https://github.com/TheShiveshNetwork/next_portfolio',
}