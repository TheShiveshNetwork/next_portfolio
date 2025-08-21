import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ProjectTabsProps {
    total: number;
    current: number;
    onTabClick: (index: number) => void;
    className?: string;
}

export function ProjectTabs({ total, current, onTabClick, className }: ProjectTabsProps) {
    return (
        <div className={cn("flex w-full items-center justify-start gap-2 mb-8", className)}>
            {Array.from({ length: total }, (_, index) => (
                <Button
                    key={index}
                    onClick={() => onTabClick(index)}
                    variant={"outline"}
                    className={cn(
                        "flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-lg font-bold text-xl sm:text-2xl transition-all duration-300 border-2",
                        current === index
                            ? "bg-primary text-primary-foreground border-primary shadow-lg"
                            : "bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground hover:border-muted-foreground"
                    )}
                    aria-label={`Go to project ${index + 1}`}
                >
                    {index + 1}
                </Button>
            ))}
        </div>
    );
}