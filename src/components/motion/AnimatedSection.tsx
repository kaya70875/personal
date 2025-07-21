'use client';

import React from 'react'
import { motion } from 'motion/react'
import SectionBackgroundWrapper from '../sections/SectionBackgroundWrapper';

interface AnimatedSectionProps {
    className?: string;
    ref?: React.Ref<HTMLElement>;
    children: React.ReactNode;
    highlight?: boolean;
}

export default function AnimatedSection({ className, children, ref, highlight }: AnimatedSectionProps) {

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5 },
    };

    return (
        <SectionBackgroundWrapper className={`${highlight ? 'bg-gray-200 dark:bg-primary border-t border-b border-gray-400 dark:border-gray-700' : ''}`}>
            <motion.section ref={ref} className={`${className} mx-0 2xl:mx-24 default-container`} {...fadeInUp}>
                {children}
            </motion.section>
        </SectionBackgroundWrapper>
    )
}
