import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {type: 'string', required: true},
        description: {type: 'string', required: true},
        thumbnail: {type: 'string', required: false},
        tags: { type: 'list', of: { type: 'string' }, required: false },
        date: {type: 'date', required: true}
    },
    computedFields: {
        url: {type: 'string', resolve: (doc) => `/blog/${doc._raw.flattenedPath}`},
    },
}))

export default makeSource({contentDirPath: 'posts', documentTypes: [Post], mdx: {rehypePlugins: [rehypeHighlight]}});