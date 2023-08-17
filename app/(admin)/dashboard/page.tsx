import DataCards from "@/components/admin/DataCards";
import InputSelect from "@/components/admin/InputSelect";

const Page = () => {
    return (
        <div className="min-h-screen sm:py-10 w-full flex items-center justify-center">
            <div className="flex-1 px-2 sm:px-0">
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-semibold">DASHBOARD</h3>
                </div>

                <div>
                    <InputSelect
                        fetchWhat="projects"
                        className="mt-10 flex items-center"
                    />

                    <DataCards
                        fetchWhat="projects"
                    />
                </div>
                <div>
                    <InputSelect
                        fetchWhat="posts"
                        className="mt-10 flex items-center"
                    />

                    <DataCards
                        fetchWhat="posts"
                    />
                </div>
            </div>
        </div>
    )
}

export default Page