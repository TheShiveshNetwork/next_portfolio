import ProjectsComponent from "@/components/ProjectsComponent";

const Page = () => {
    return (
        <div className="flex flex-col mt-10 px-10 lg:px-64">
            <h1 className="text-4xl font-semibold mb-10">Projects</h1>

            <ProjectsComponent />
        </div>
    )
}

export default Page