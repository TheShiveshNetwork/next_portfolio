import { Separator } from "@/components/ui/separator";
import { appConfig } from "@/configs/config";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export function SocialSecion() {
    return (
        <div className="w-full flex flex-col items-center">
            <Separator className="mt-10 w-full" />
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl w-full py-10 px-6 relative">
                <SocialPanel />
                <div className="absolute -z-1 top-0 left-0 h-full w-full border-primary opacity-10 border-l border-r"></div>
            </div>
            <Separator className="w-full" />
        </div>
    )
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