"use client";

import React, { useState, useEffect } from 'react';
import { appConfig } from '@/configs/config';
import { PaginationController } from './pagination';
import { PostCard } from './post-card';

export interface MediumPost {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    content: string;
    thumbnail?: string;
    categories?: string[];
    guid: string;
}

interface MediumPostsProps {
    username?: string;
    postsPerPage?: number;
}

export const MediumPosts: React.FC<MediumPostsProps> = ({
    username = appConfig.mediumUsername,
    postsPerPage = 4
}) => {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const startIndex = currentPage * postsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const rssUrl = `https://medium.com/feed/@${username}`;
                const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();

                if (data.status !== 'ok') {
                    throw new Error('Invalid RSS feed');
                }

                const formattedPosts: MediumPost[] = data.items.map((item: MediumPost) => {
                    const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
                    const thumbnail = imgMatch ? imgMatch[1] : null;
                    const cleanContent = item.content
                        ?.replace(/<[^>]*>/g, '') // Remove HTML tags
                    const cleanDescription = item.description
                        ?.replace(/<[^>]*>/g, '') // Remove HTML tags
                        ?.substring(0, 150) + '...';

                    return {
                        title: item.title,
                        link: item.link,
                        pubDate: item.pubDate,
                        description: cleanDescription || '',
                        content: cleanContent || '',
                        thumbnail,
                        categories: item.categories || [],
                        guid: item.guid
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, [username]);

    if (error) {
        console.error('Error fetching Medium posts:', error);
        return null;
    }

    return (
        <div id='blogs' className="relative w-full flex items-center justify-center py-14">
            <div className="flex flex-col max-w-4xl w-full px-6 md:px-0">
                {/* Header */}
                <div className="mb-6 flex justify-between items-center">
                    <div className="text-4xl font-bold mb-2">Blogs</div>
                    <PaginationController totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                {/* Posts Grid */}
                <PostsGrid loading={loading} currentPosts={currentPosts} postsPerPage={postsPerPage} />

                {/* Pagination Controls */}
                <PaginationController
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

function PostsGrid({ loading, postsPerPage, currentPosts }: { loading: boolean; postsPerPage: number; currentPosts: MediumPost[] }) {
    if (loading) {
        // show skeleton loading
        return (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[...Array(postsPerPage)].map((_, i) => (
                    <PostCard key={`blog-post-${i}`} post={{} as MediumPost} loading />
                ))}
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            {currentPosts.map((post) =>
                <PostCard key={post.guid} post={post} />
            )}
        </div>
    )
}