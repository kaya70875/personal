import React from 'react'
import AnimatedSection from '@/components/motion/AnimatedSection';
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { AnimatedPostCard } from './PostCard';

export default function Page() {

    const posts: Post[] = (allPosts as Post[]).sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <AnimatedSection className='flex flex-col gap-8 items-center justify-center w-full navbar-space text-text dark:text-dark-text'>
            <h1>All Articles</h1>
            <div className="grid grid-cols-3 gap-12 w-full justify-center">
                {posts.map((post, idx) => (
                    <AnimatedPostCard key={idx} post={post} />
                ))}
            </div>
        </AnimatedSection>
    )
}
