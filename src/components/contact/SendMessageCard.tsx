import React from 'react'
import InputField from '../InputField'

export default function SendMessageCard() {
    return (
        <div className='flex flex-col items-start gap-4 p-6 rounded-lg shadow-lg w-full'>
            <h3>Send me a message</h3>
            <div className='flex items-center gap-4 w-full'>
                <InputField label='Name' placeholder='Your Name' />
                <InputField label='Email' placeholder='Your Email' />
            </div>

            <InputField label='Subject' className='w-full' placeholder='Please provide a subject' />

            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="msg" placeholder='Write your message' className='border border-text p-4 rounded-lg w-full min-h-48' />
            </div>

            <button className='bg-text text-white p-3 w-48 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-all ease-in duration-200'>
                <p>Send Message</p>
            </button>
        </div>
    )
}
