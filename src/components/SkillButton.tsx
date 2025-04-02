'use client';

import React, { useState } from 'react'
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

interface SkillButtonProps {
    name: string;
    icon: StaticImageData;
}

export default function SkillButton({ name, icon }: SkillButtonProps) {

    const [borderSize, setBorderSize] = useState(0);
    return (
        <motion.button
            onHoverStart={() => setBorderSize(56)}
            onHoverEnd={() => setBorderSize(0)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.25 }}
            className='flex flex-col items-center justify-center gap-2 cursor-pointer p-3 bg-bg shadow-lg rounded-lg text-text font-medium'>
            <div className='flex items-center gap-2'>
                <div className="icon">
                    <Image src={icon} alt='sk' />
                </div>
                <p>{name}</p>
            </div>

            <motion.div className='bg-text h-[2px]' initial={{ width: 0 }} animate={{ width: borderSize }} transition={{
                duration: 0.3,
                ease: "easeInOut"
            }} />
        </motion.button>
    )
}
