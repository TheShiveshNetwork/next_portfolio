import { appConfig } from "@/configs/config";
import { cn } from "@/lib/utils";

export function ProfileSection({ className }: { className?: string }) {
    return (
        <div className={cn("w-full flex flex-col items-center mt-14", className)}>
            <div className="grid md:grid-cols-2 gap-2 max-w-4xl w-full px-6 md:px-0">
                <ProfilePanel />
            </div>
        </div>
    );
}

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