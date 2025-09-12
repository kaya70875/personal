'use client';

import React from 'react'
import { motion, useTime, useTransform } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface AnimatedBorderCardProps {
  prime?: boolean;
  children: React.ReactNode;
}

export default function AnimatedBorderCard({ prime = false, children }: AnimatedBorderCardProps) {

  const { theme } = useTheme();

  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  })
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #FACC15 0%, #ffdd00 50%, #bfff00 75%, #e6ff05 100%)`;
  })

  return (
    <motion.div className='relative w-full max-w-lg' whileHover={{ scale: 1.025 }} transition={{ duration: 0.25 }}>
      <div className='relative bg-dark-bg p-3 md:p-8 w-full z-10 h-full rounded-lg text-dark-text'>
        {children}
      </div>
      <motion.div style={{
        background: prime ? rotatingBg : `${theme === 'light' ? '#0F172A' : 'white'}`
      }} className='absolute -inset-[2px] rounded-lg' />
    </motion.div>
  )
}
