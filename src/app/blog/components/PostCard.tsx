'use client';

import Link from 'next/link'
import React from 'react'
import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns'
import Image from 'next/image';
import { withAnimation } from '@/components/hoc/WithAnimation';

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    return (
        <Link href={post.url} className="posts flex flex-col w-full bg-white dark:bg-dark-bg shadow-lg rounded-lg cursor-pointer border border-gray-200 dark:border-dark-primary max-w-md">
            <div className='flex flex-col gap-4 h-60 relative'>
                <Image fill className='rounded-t-lg border-b border-b-gray-200 dark:border-b-dark-primary object-cover' priority src={post.thumbnail as string} alt={post.title} />
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <h2 className='text-2xl text-text dark:text-dark-text font-bold'>
                    {post.title}
                </h2>
                <time className='opacity-80' dateTime={post.date}>
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <p className="description break-words">
                    {post.description}
                </p>
            </div>
        </Link>
    )
}

export const AnimatedPostCard = withAnimation(PostCard);
