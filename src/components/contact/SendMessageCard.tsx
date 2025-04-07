import React, { useState } from 'react'
import InputField from '../InputField'
import toast, { Toaster } from 'react-hot-toast';

export default function SendMessageCard() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'Any',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!form.name || !form.email || !form.message) return toast.error('Please fill all fields.');

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            setLoading(false);
            return console.log('An error happened while sending message.');
        }
        setLoading(false);

        toast.success('Message sended successfully.');

    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4 p-6 rounded-lg shadow-lg w-full'>
            {/* Initialize Toaster */}
            <Toaster />

            <h3>Send me a message</h3>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
                <InputField label='Name' placeholder='Your Name' onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <InputField label='Email' placeholder='Your Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>

            <InputField label='Subject' className='w-full' placeholder='Please provide a subject' onChange={(e) => setForm({ ...form, subject: e.target.value })} />

            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="message">Message</label>
                <textarea name="message" onChange={(e) => setForm({ ...form, message: e.target.value })} id="msg" placeholder='Write your message' className='border border-text p-4 rounded-lg w-full min-h-48' />
            </div>

            <button disabled={loading} type='submit' className='bg-text disabled:opacity-70 text-white p-3 w-48 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-all ease-in duration-200'>
                <p>Send Message</p>
            </button>
        </form>
    )
}
