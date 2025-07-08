import Link from 'next/link'
import React from 'react'
import { Blog } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns'
import Image from 'next/image';

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <Link href={blog.url} className="posts flex flex-col w-full bg-white shadow-lg rounded-lg cursor-pointer border border-gray-200">
            <div className='flex flex-col gap-4 h-60 relative'>
                <Image fill className='rounded-t-lg border-b border-b-gray-200 object-cover' priority src={blog.thumbnail as string} alt={blog.title} />
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <h2 className='text-2xl text-text font-bold'>
                    {blog.title}
                </h2>
                <time className='opacity-80' dateTime={blog.date}>
                    {format(parseISO(blog.date), 'LLLL d, yyyy')}
                </time>
                <p className="description break-words">
                    {blog.description}
                </p>
            </div>
        </Link>
    )
}
