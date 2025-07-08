import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import BlogContent from '../components/BlogContent'

export const generateStaticParams = async () =>
    allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
    const blog = allBlogs.find((b) => b._raw.flattenedPath === params.slug)
    if (!blog) return notFound()

    return {
        title: blog.title,
        description: blog.description,
    }
}

export default function BlogPage({ params }: { params: { slug: string } }) {
    const blog = allBlogs.find((b) => b._raw.flattenedPath === params.slug)
    if (!blog) return notFound()

    return (
        <article className="prose prose-lg dark:prose-invert max-w-prose mx-auto navbar-space">
            <header className="mb-6">
                <h1 className="mb-2">{blog.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(parseISO(blog.date), 'LLLL d, yyyy')}
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{blog.description}</p>
            </header>
            {/* ✅ Pass the MDX code to a Client Component */}
            <BlogContent code={blog.body.code} />
        </article>
    )
}
