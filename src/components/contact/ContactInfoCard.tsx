import React from 'react'
import Socials from '../Socials';
import { Mail, MapPin } from 'lucide-react';

export default function ContactInfoCard() {

    const contactInfo = [
        {
            name: 'Email',
            value: 'kaya70875@gmail.com',
            icon: <Mail size={24} className='text-text dark:text-dark-text' />
        },
        {
            name: 'Location',
            value: 'Istanbul, Turkey',
            icon: <MapPin size={24} className='text-text dark:text-dark-text' />
        }
    ] as const;

    return (
        <div className='flex flex-col items-start gap-4 p-6 rounded-lg shadow-lg w-full card-border bg-gray-200 dark:bg-[#0C1223] outer-glow'>
            <h2>Contact Information</h2>
            {contactInfo.map((info, index) => (
                <div key={index} className="info flex items-center gap-4">
                    <div className="bg-accent w-[2.5px] h-[80%]"></div>
                    <div className="icon">{info.icon}</div>
                    <div className='flex flex-col gap-2'>
                        <p>{info.name}</p>
                        <p>{info.value}</p>
                    </div>
                </div>
            ))}
            <div className="line w-full card-border" />
            <h2>Socials</h2>
            <Socials gap='gap-4' />
        </div>
    )
}
