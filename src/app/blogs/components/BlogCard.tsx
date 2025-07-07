import Link from 'next/link'
import React from 'react'
import { Blog } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns'

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="mb-8">
            <h2 className="mb-1 text-xl">
                <Link href={blog.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
                    {blog.title}
                </Link>
            </h2>
            <time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(blog.date), 'LLLL d, yyyy')}
            </time>
            <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: blog.body.html }} />
        </div>
    )
}
