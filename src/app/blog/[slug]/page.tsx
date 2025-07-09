'use client';

import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { use } from 'react';


export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = allPosts.find((p) => p._raw.flattenedPath === slug);
    if (!post) return notFound()

    const MDXContent = useMDXComponent(post.body.code)

    return (
        <article className="prose prose-lg dark:prose-dark max-w-prose mx-auto navbar-space">
            <div className='w-full flex items-center justify-center flex-col'>
                <Image src={post.thumbnail as string} alt={post.title} width={350} height={350} />
            </div>
            <header>
                <h1>{post.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </p>
                <h4>{post.description}</h4>
            </header>

            <MDXContent />
        </article>
    )
}
