import { fetchProjects } from "@/lib/actions/projects.actions";
import ProjectsTimeline from "./shared/ProjectsTimeline"

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