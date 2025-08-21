import { ProjectsCarousel } from "@/components/projects/projects-carousel";
import { ALL_PROJECTS } from "@/configs/projects";

export type IProjects = {
    type: "web" | "app" | "ai" | "ml" | "tool";
    title: string;
    shortDescription: string;
    longDescription: string;
    stack: string[];
    image?: string;
};

export function Projects() {
    const projects = ALL_PROJECTS.slice(0, 4);
    return (
        <div id="projects" className="flex w-full justify-center pt-14">
            <div className="flex flex-col justify-center gap-4 md:gap-8 max-w-4xl w-full px-6 md:px-0">
                <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                        Projects
                    </div>
                    <p className='max-w-2xl text-secondary-foreground/60'>
                        Here are some of my recent projects to showcase my skills and interests. Each project reflects my passion for technology and problem-solving.
                    </p>
                </div>
                <ProjectsCarousel
                    projects={projects}
                    autoplay={false}
                />
            </div>
        </div>
    );
}
