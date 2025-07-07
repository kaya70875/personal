import React from 'react'
import AnimatedSection from '@/components/motion/AnimatedSection';
import { compareDesc } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import BlogCard from './components/BlogCard';

export default function Page() {

    interface Blog {
        date: string;
        [key: string]: any;
    }

    const blogs: Blog[] = (allBlogs as Blog[]).sort((a: Blog, b: Blog) => compareDesc(new Date(a.date), new Date(b.date)));

    return (
        <AnimatedSection className='flex flex-col gap-8 items-center justify-center w-full h-screen text-text dark:text-dark-text'>
            <div className="mx-auto max-w-xl py-8">
                <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
                {blogs.map((blog, idx) => (
                    <BlogCard key={idx} blog={blog} />
                ))}
            </div>
        </AnimatedSection>
    )
}
