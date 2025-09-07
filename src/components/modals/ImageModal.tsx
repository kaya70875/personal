'use client';

import { useModal } from '@/context/ImageModalContext'
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from 'motion/react';
import { BeatLoader } from 'react-spinners';
import { X } from 'lucide-react';

export default function ImageModal() {

    const { modalImage, setModalImage } = useModal();
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, scale: 0 }}
            className='fixed z-20 w-full md:w-[75%] top-1/2 left-1/2 p-2 md:p-6 mt-8 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark-primary flex flex-col gap-4 rounded-lg'>
            <div className='w-full flex items-center justify-between' onClick={() => setModalImage({ ...modalImage, open: false })}>
                <p className='font-semibold'>Full View</p>
                <X size={24} className='cursor-pointer text-text dark:text-dark-text hover:opacity-80' />
            </div>

            <Image onLoad={() => setIsLoaded(true)} src={modalImage.image || ''} alt='modalImage' className='shadow-lg rounded-lg' />

            {!isLoaded && (
                <div className='flex items-center justify-center w-full'>
                    <BeatLoader className='text-dark-bg dark:text-bg' color='var(--color-accent)' />
                </div>
            )}

        </motion.div>
    )
}
