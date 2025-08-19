"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const PostImage = ({ title, thumbnail, className }: { title: string; thumbnail?: string; className?: string }) => {
    const [imageSrc, setImageSrc] = useState<string>(
        thumbnail ||
        `https://dummyimage.com/400x300/8b5cf6/ffffff&text=${encodeURIComponent(title.substring(0, 20) + '...')}`
    );
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImageSrc(
            thumbnail ||
            `https://dummyimage.com/400x300/8b5cf6/ffffff&text=${title.substring(0, 20) + '...'}`
        );
        setHasError(false);
    }, [thumbnail, title]);

    const handleImageError = () => {
        if (!hasError) {
            setHasError(true);
            setImageSrc(`https://dummyimage.com/400x300/6366f1/ffffff&text=Article`);
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