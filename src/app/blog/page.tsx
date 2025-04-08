import Image from 'next/image'
import React from 'react'
import comingSoon from '../../..//public/images/ill.jpg';
import AnimatedSection from '@/components/motion/AnimatedSection';

export default function Page() {
    return (
        <AnimatedSection className='flex flex-col gap-8 items-center justify-center w-full h-screen text-text dark:text-dark-text'>
            <Image className='rounded-lg' src={comingSoon} alt='cs' width={312} height={312} />
            <h1>Coming Soon !</h1>
        </AnimatedSection>
    )
}
