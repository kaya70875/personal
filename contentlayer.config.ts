import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/*.md`,
    fields: {
        title: {type: 'string', required: true},
        description: {type: 'string', required: true},
        thumbnail: {type: 'string', required: false},
        tags: { type: 'list', of: { type: 'string' }, required: false },
        date: {type: 'date', required: true}
    },
    computedFields: {
        url: {type: 'string', resolve: (blog) => `/blogs/${blog._raw.flattenedPath}`},
    },
}))

export default makeSource({contentDirPath: 'blogs', documentTypes: [Blog]});