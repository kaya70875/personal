'use client';
import { motion } from 'framer-motion'
import React from 'react'

export function withAnimation<P extends object>(Component: React.ComponentType<P>) {
    return function AnimatedComponent(props: P) {
        return (
            <motion.div
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.25 }}
            >
                <Component {...props} />
            </motion.div>
        )
    }
}