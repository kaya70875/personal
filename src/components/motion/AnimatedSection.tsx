'use client';

import React from 'react'
import { motion } from 'motion/react'

interface AnimatedSectionProps {
    className?: string;
    ref?: React.Ref<HTMLElement>;
    children: React.ReactNode;
}

export default function AnimatedSection({ className, children, ref }: AnimatedSectionProps) {

    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5 },
    };

    return (
        <motion.section ref={ref} className={className} {...fadeInUp}>
            {children}
        </motion.section>
    )
}
