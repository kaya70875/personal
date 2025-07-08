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
        <AnimatedSection className='flex flex-col gap-8 items-center justify-center w-full navbar-space text-text dark:text-dark-text'>
            <h1>All Articles</h1>
            <div className="grid grid-cols-3 gap-12 w-full justify-center">
                {blogs.map((blog, idx) => (
                    <BlogCard key={idx} blog={blog} />
                ))}
            </div>
        </AnimatedSection>
    )
}
