import { ExperienceItemType } from "@/components/work-experience";
import React from "react";

export type INavItem = {
    name: string;
    href: string;
    label: string;
};

export interface IAppConfig {
    profile: {
        name: string;
        image: string;
        email: string;
        location: string;
        sentences: string[];
        panel: {
            icon: React.ElementType;
            text: string | React.ReactNode;
        }[];
        socials: {
            name: string;
            icon: React.ElementType;
            link: string;
            username: string;
        }[];
    };
    experience: ExperienceItemType[];
    mediumUsername: string;
    githubUrl: string;
}