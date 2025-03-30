import React from 'react'
import { motion, useTime, useTransform } from 'framer-motion';

interface AnimatedBorderCardProps {
  prime?: boolean;
  children: React.ReactNode;
}

export default function AnimatedBorderCard({ prime = false, children }: AnimatedBorderCardProps) {

  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  })
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #FACC15 0%, #96a607 50%, #e6ff05 100%)`;
  })

  return (
    <motion.div className='relative w-full max-w-lg h-[580px]' whileHover={{ scale: 1.025 }} transition={{ duration: 0.25 }}>
      <div className='relative bg-bg p-8 w-full z-10 h-full rounded-lg text-text'>
        {children}
      </div>
      <motion.div style={{
        background: prime ? rotatingBg : '#0F172A'
      }} className='absolute -inset-[2px] rounded-lg' />
    </motion.div>
  )
}
