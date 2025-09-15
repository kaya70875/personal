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
        <SectionBackgroundWrapper className={`${highlight ? 'bg-[#0a0f1d]/70 border-t border-b border-gray-700' : ''}`}>
            <motion.section ref={ref} className={`${className} px-4 2xl:px-24 py-8 md:py-14`} {...fadeInUp}>
                {children}
            </motion.section>
        </SectionBackgroundWrapper>
    )
}
