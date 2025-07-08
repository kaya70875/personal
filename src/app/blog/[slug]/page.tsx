import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import PostContent from '../components/PostContent'

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
        <article className="prose prose-lg dark:prose-invert max-w-prose mx-auto navbar-space">
            <header className="mb-6">
                <h1 className="mb-2">{post.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{post.description}</p>
            </header>
            {/* ✅ Pass the MDX code to a Client Component */}
            <PostContent code={post.body.code} />
        </article>
    )
}
