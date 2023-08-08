import { fetchProjects } from "@/lib/actions/projects.actions";
import ProjectsTimeline from "./shared/ProjectsTimeline"

interface projectProps {
    image?: string;
    date: string;
    heading: string;
    content: string;
    nativeButton?: {
        text: string,
        className?: string,
        action: string,
    };
    customButton?: {
        text: string,
        className: string,
        action: string,
    };
}

const ProjectsComponent = async () => {
    const projects = await fetchProjects();

    return projects?.reverse().map((project, idx) => (
        <ProjectsTimeline
            key={`project-${idx}`}
            idx={idx}
            image={project.image}
            date={project.date}
            heading={project.heading}
            content={project.content}
            nativeButton={project.nativeButton}
            customButton={project.customButton}
        />
    ))
}

export default ProjectsComponent