import React, { useState } from 'react'
import InputField from '../InputField'
import toast, { Toaster } from 'react-hot-toast';

export default function SendMessageCard() {

    const [form, setForm] = useState({
        name: '',
        email: '',
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

    const inputStyles = 'bg-gray-300 dark:bg-primary hover:border-gray-300 focus:border-accent transition-all duration-100 ease-in outline-none';

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4 p-6 rounded-lg shadow-lg w-full card-border bg-gray-200 dark:bg-[#0C1223] outer-glow'>
            {/* Initialize Toaster */}
            <Toaster />

            <h2>Send Me A Message</h2>
            <div className='flex flex-col items-center gap-4 w-full'>
                <InputField label='Name' placeholder='Your Name' onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputStyles} />
                <InputField label='Email' placeholder='Your Email' onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputStyles} />
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="message">Message</label>
                <textarea name="message" onChange={(e) => setForm({ ...form, message: e.target.value })} id="msg" placeholder='Write your message' className={`card-border p-4 rounded-lg w-full min-h-48 ${inputStyles}`} />
            </div>

            <button disabled={loading} type='submit' className='bg-text dark:bg-dark-text disabled:opacity-70 text-white dark:text-primary p-3 w-48 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-all ease-in duration-200'>
                <p>Send Message</p>
            </button>
        </form>
    )
}
