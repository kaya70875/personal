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
        <div className="posts flex flex-col gap-4 p-4 w-full border border-secondary rounded-lg">
            <h2>
                <Link href={blog.url}>
                    {blog.title}
                </Link>
            </h2>
            <Image src={blog.thumbnail as string} width={600} height={600} alt={blog.title} />
            <time dateTime={blog.date}>
                {format(parseISO(blog.date), 'LLLL d, yyyy')}
            </time>
            <p className="description break-words">
                {blog.description}
            </p>
        </div>
    )
}
