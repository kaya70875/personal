import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function loading() {
    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <BeatLoader color='var(--color-accent)' />
        </div>
    )
}
