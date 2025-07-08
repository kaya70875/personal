'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

export default function BlogContent({ code }: { code: string }) {
    const Component = useMDXComponent(code)
    return <Component />
}
