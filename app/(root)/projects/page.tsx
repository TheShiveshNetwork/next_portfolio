import ProjectsTimeline from "@/components/shared/ProjectsTimeline"
import { projectsContent } from "@/constants"

const Page = () => {
    return (
        <div className="flex flex-col mt-10 px-10 lg:px-64">
            <h1 className="text-4xl font-semibold mb-10">Projects</h1>

            {projectsContent.map((project, idx) => (
                <ProjectsTimeline
                    key={`project-${idx}`}
                    image={project.image}
                    date={project.date}
                    heading={project.heading}
                    content={project.content}
                    isLatest={project.isLatest}
                    nativeButton={project.nativeButton}
                    customButton={project.customButton}
                />
            ))}
        </div>
    )
}

export default Page