import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import PostContent from '../components/PostContent'
import "prismjs/themes/prism.css";
import Image from 'next/image';

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((b) => b._raw.flattenedPath === params.slug)
    if (!post) return notFound()

    return {
        title: post.title,
        description: post.description,
    }
}

export default function PostPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find((b) => b._raw.flattenedPath === params.slug)
    if (!post) return notFound()

    return (
        <article className="prose prose-xl dark:prose-dark max-w-prose mx-auto navbar-space">
            <div className='w-full flex items-center justify-center flex-col'>
                <Image className='' src={post.thumbnail as string} alt={post.title} width={350} height={350} />
            </div>
            <header>
                <h1>{post.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </p>
                <h4>{post.description}</h4>
            </header>
            {/* ✅ Pass the MDX code to a Client Component */}
            <div className='prose prose-md dark:prose-dark max-w-4xl'>
                <PostContent code={post.body.code} />
            </div>
        </article>
    )
}
