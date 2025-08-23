import { ABOUT_ME } from "@/configs/site";
import { ProfileSection } from "./profile";

export function AboutSection() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col max-w-4xl w-full mt-10">
                <div className="text-4xl font-bold px-6 md:px-0">
                    About Me
                </div>
                <ProfileSection className="mt-4" />
                <p className="whitespace-pre-line text-secondary-foreground/60 px-6 md:px-0">
                    {ABOUT_ME}
                </p>
            </div>
        </div>
    )
}