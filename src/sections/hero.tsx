import { FlipSentences } from "@/components/common/flip-sentences";
import { Separator } from "@/components/common/separator";
import { VerifiedIcon } from "@/components/common/verified-icon";
import { ProfileHeader } from "@/components/hero/profile-header";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { appConfig } from "@/configs/config";
import { MoveUpRight } from "lucide-react";
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
                <Button
                    variant={"default"}
                    className="bg-blue-500/80 hover:bg-blue-500/90 transition-colors text-primary rounded-xl cursor-pointer ml-1 md:ml-7.5"
                >
                    Contact Me
                </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-2 max-w-4xl w-full px-6 md:px-0 mt-14">
                <ProfilePanel />
            </div>
            <Separator className="mt-10 w-full" />
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full py-10 px-6 relative">
                <SocialPanel />
                <div className="absolute -z-1 top-0 left-0 h-full w-full border-primary opacity-10 border-l border-r"></div>
            </div>
            <Separator className="w-full" />
        </div>
    );
};

function ProfilePanel() {
    return appConfig.profile.panel.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
            <div className="p-2 bg-secondary/50 rounded-md text-primary/60 border-l-2 border-t-2 border-b border-r border-primary/10 shadow-md shadow-secondary/50">
                <item.icon className="h-3.5 w-3.5" />
            </div>
            <div className="text-md text-primary">{item.text}</div>
        </div>
    ));
}

function SocialPanel() {
    return appConfig.profile.socials.map((item, index) => (
        <Link
            key={`social-link-${index}`}
            href={item.link}
            target="_blank"
            className="flex items-center p-2 rounded-lg border justify-between gap-2 bg-secondary/20 hover:bg-secondary/40 transition-all"
        >
            <div className="flex gap-4 items-center">
                <div className="h-16 w-16 bg-secondary/50 rounded-md text-primary/60 border-l-2 border-t-2 border-b border-r border-primary/10 shadow-md shadow-secondary/50 flex items-center justify-center">
                    <item.icon className="h-8 w-8" />
                </div>
                <div className="text-lg text-primary font-semibold">{item.name}</div>
            </div>
            <MoveUpRight className="h-4 w-4 mr-4" />
        </Link>
    ));
}
