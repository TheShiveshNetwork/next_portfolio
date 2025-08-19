import { WorkExperience } from "@/components/work-experience";
import { appConfig } from "@/configs/config";

export function Experience() {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex flex-col max-w-4xl w-full px-6 md:px-0">
                <div className="mb-6">
                    <div className="text-4xl font-bold mb-2">
                        Experience
                    </div>
                    <p className='max-w-2xl text-secondary-foreground/60'>
                        These our the places I have worked at
                    </p>
                </div>
                <WorkExperience experiences={appConfig.experience} />
            </div>
        </div>
    );
}
