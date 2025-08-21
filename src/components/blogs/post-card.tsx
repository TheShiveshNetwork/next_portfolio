import { Calendar, Clock, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { PostImage } from "./image";
import { MediumPost } from "./medium";
import { Badge } from "../ui/badge";

export function PostCard({ post, loading }: { post: MediumPost, loading?: boolean }) {

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const calculateReadTime = (content: string) => {
        const words = content.split(' ').length;
        const readTime = Math.ceil(words / 200);
        return `${readTime} min read`;
    };

    if (loading) {
        return (
            <Card className="h-96">
                <CardHeader>
                    <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md"></div>
                </CardHeader>
                <CardContent>
                    <div className="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 animate-pulse rounded mb-1"></div>
                    <div className="h-3 bg-gray-200 animate-pulse rounded w-3/4"></div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card key={post.guid} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <PostImage title={post.title} thumbnail={post.thumbnail} className="p-4 rounded-md" />

            <CardContent className="flex-1">
                <CardTitle className="line-clamp-2 mb-3 text-lg">
                    {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-4 text-sm leading-relaxed">
                    {post.description}
                </CardDescription>

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                        {post.categories.slice(0, 2).map((category, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {category}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>

            <CardFooter className="p-6 pt-0">
                <div className="w-full">
                    {/* Meta info */}
                    <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.pubDate)}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {calculateReadTime(post.content)}
                        </div>
                    </div>

                    {/* Read more button */}
                    <Button
                        asChild
                        className="w-full"
                        variant="outline"
                    >
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            Read More
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
