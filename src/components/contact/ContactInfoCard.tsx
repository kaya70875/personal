import React from 'react'
import { MdEmail, MdLocationOn, MdOutlineCoffee } from 'react-icons/md';
import Socials from '../Socials';
import Link from 'next/link';

export default function ContactInfoCard() {

    const contactInfo = [
        {
            name: 'Email',
            value: 'kaya70875@gmail.com',
            icon: <MdEmail size={24} color='var(--color-text)' />
        },
        {
            name: 'Location',
            value: 'Istanbul, Turkey',
            icon: <MdLocationOn size={24} color='var(--color-text)' />
        }
    ] as const;

    return (
        <div className='flex flex-col items-start gap-4 p-6 rounded-lg shadow-lg w-1/2'>
            <h3>Contact Information</h3>
            {contactInfo.map((info, index) => (
                <div key={index} className="info flex items-center gap-6">
                    <div className="icon">{info.icon}</div>
                    <div className='flex flex-col gap-2'>
                        <p>{info.name}</p>
                        <p>{info.value}</p>
                    </div>
                </div>
            ))}
            <div className="line w-full" />
            <h2>Socials</h2>
            <Socials />
            <div className="line w-full" />

            <Link href={'https://buymeacoffee.com/kaya70875'} target='__blank' className='bg-accent text-text p-3 w-48 rounded-lg font-medium flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all ease-in duration-200'>
                <MdOutlineCoffee size={24} color='var(--color-text)' />
                <p>Buy me a coffee</p>
            </Link>
        </div>
    )
}
