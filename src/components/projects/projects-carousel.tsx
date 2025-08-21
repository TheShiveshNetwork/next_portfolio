"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { IProjects } from "@/sections/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface ProjectsCarouselProps {
    projects: IProjects[];
    autoplay?: boolean;
    autoplayDelay?: number;
    className?: string;
}

export function ProjectsCarousel({
    projects,
    autoplay = false,
    autoplayDelay = 5000,
    className
}: ProjectsCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    useEffect(() => {
        if (!autoplay || !api) return;

        const interval = setInterval(() => {
            if (current === projects.length - 1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [api, current, projects.length, autoplay, autoplayDelay]);

    // Handle swipe/scroll on mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const startX = touch.clientX;

        const handleTouchEnd = (endEvent: TouchEvent) => {
            const endTouch = endEvent.changedTouches[0];
            const endX = endTouch.clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0 && current < projects.length - 1) {
                    // Swipe left - next
                    api?.scrollNext();
                } else if (diff < 0 && current > 0) {
                    // Swipe right - previous
                    api?.scrollPrev();
                }
            }

            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <div className={className}>
            <div className="relative">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: false,
                        containScroll: "trimSnaps",
                    }}
                    className="w-full"
                >
                    <CarouselContent onTouchStart={handleTouchStart}>
                        {projects.map((project, index) => (
                            <CarouselItem
                                key={`${project.title}-${index}`}
                                className="relative basis-[85%] md:basis-[60%] cursor-grab"
                            >
                                <ProjectCard
                                    project={project}
                                    isActive={current === index}
                                />
                                {/* <div className="absolute top-0 z-20 text-muted-foreground font-bold -translate-y-4 left-10 text-8xl font-borel">{index + 1}</div> */}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6">
                <div className="flex items-center gap-1">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300",
                                current === index ? "bg-primary w-8" : "bg-muted w-2"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}