import { FlipSentences } from "@/components/common/flip-sentences";
import { VerifiedIcon } from "@/components/common/verified-icon";
import { ProfileHeader } from "@/components/hero/profile-header";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { appConfig } from "@/configs/config";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <ProfileHeader />
            <div className="flex items-end gap-4 md:gap-8 max-w-4xl w-full px-6 md:px-0 mt-10">
                {/* profile pic */}
                <div className="w-28 h-28 md:w-42 md:h-42 overflow-hidden rounded-full bg-gray-600">
                    <Image
                        height={100}
                        width={100}
                        src={appConfig.profile.image}
                        className="h-full w-full object-cover"
                        alt="pfp"
                    />
                </div>
                {/* profile info */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-center gap-2">
                        <div className="font-semibold text-2xl md:text-3xl">{appConfig.profile.name}</div>
                        <SimpleTooltip content="Verified">
                            <VerifiedIcon className="text-blue-500 h-6 w-6" />
                        </SimpleTooltip>
                    </div>
                    <div className="mt-2">
                        <FlipSentences sentences={appConfig.profile.sentences} />
                    </div>
                </div>
            </div>
            <div className="flex items-start max-w-4xl w-full px-6 md:px-0 mt-4">
                <Link href={`mailto:${appConfig.profile.email}`}>
                    <Button
                        variant={"default"}
                        className="bg-blue-500/80 hover:bg-blue-500/90 transition-colors text-primary rounded-xl cursor-pointer ml-0.5 md:ml-7.5"
                    >
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    );
};
