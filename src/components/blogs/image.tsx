"use client";

import { getDumnyImageUrl } from "@/lib/dumny-img";
import Image from "next/image";
import { useEffect, useState } from "react";

export const PostImage = ({ title, thumbnail, className }: { title: string; thumbnail?: string; className?: string }) => {
    const [imageSrc, setImageSrc] = useState<string>(thumbnail || getDumnyImageUrl(title));
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImageSrc(thumbnail || getDumnyImageUrl(title));
        setHasError(false);
    }, [thumbnail, title]);

    const handleImageError = () => {
        if (!hasError) {
            setHasError(true);
            setImageSrc(getDumnyImageUrl("Article"));
        }
    };

    return (
        <div className={`w-full h-48 overflow-hidden rounded-t-lg ${className}`}>
            <Image
                src={imageSrc}
                alt={title}
                height={200}
                width={400}
                className="w-full h-full rounded-md object-cover transition-transform duration-300"
                onError={handleImageError}
            />
        </div>
    );
};