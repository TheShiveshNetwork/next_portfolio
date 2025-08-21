import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IProjects } from "@/sections/projects";
import { Bot, BrainCircuit, PanelTop, Smartphone, Wrench } from "lucide-react";
import { getDumnyImageUrl } from "@/lib/dumny-img";

interface ProjectCardProps {
    project: IProjects;
    isActive?: boolean;
}

const getTypeBadgeVariant = (type: IProjects['type']) => {
    const variants = {
        web: "default",
        app: "secondary",
        ai: "destructive",
        ml: "outline",
        tool: "secondary"
    } as const;
    return variants[type] || "default";
};

const getTypeIcon = (type: IProjects['type']) => {
    const icons = {
        web: <PanelTop />,
        app: <Smartphone />,
        ai: <Bot />,
        ml: <BrainCircuit />,
        tool: <Wrench />,
    };
    return icons[type];
};

const getTypeDisplayName = (type: IProjects['type']) => {
    const displayNames = {
        web: "Web App",
        app: "Mobile App",
        ai: "AI Project",
        ml: "ML Project",
        tool: "Tool"
    };
    return displayNames[type];
};

export function ProjectCard({ project, isActive = false }: ProjectCardProps) {
    return (
        <Card className={`w-full h-full transition-all duration-300 
            bg-secondary/50 shadow-lg shadow-secondary/50 rounded-md
            ${isActive ? 'border-2 border-primary/40' : 'border-l-2 border-t-2 border-b border-r border-primary/10'}`}>
            <div className="relative w-full aspect-[127/76] overflow-hidden rounded-t-lg bg-muted">
                {/* 1270x760px images best */}
                <Image
                        src={project.image || getDumnyImageUrl(project.title, "1270x760")}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
            </div>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    {getTypeIcon(project.type)}
                    <Badge variant={getTypeBadgeVariant(project.type)} className="text-xs">
                        {getTypeDisplayName(project.type)}
                    </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                    {project.shortDescription}
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground line-clamp-3">
                    {project.longDescription}
                </p>
                <div className="mt-4">
                    {project.stack.map((item, index) => (
                        <Badge key={`stack-${item}-${index}`} variant="outline" className="mr-1">
                            {item}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}