import React from 'react'
import NavLink from './NavLink'
import Socials from './Socials'
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {

    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Resume',
            url: '/resume'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
    ];

    return (
        <footer className='w-full p-2 lg:p-8 flex flex-col gap-4 bg-primary border-y border-gray-700'>
            <div className='default-container text-white flex flex-col sm:flex-row justify-center lg:justify-around gap-4 lg:gap-0'>
                <section className="contact-info flex flex-col gap-8">
                    <p>Contact Info</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <Mail size={24} color='white' />
                            <p>kaya70875@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MapPin size={24} color='white' />
                            <p>Remote / Available Worlwide</p>
                        </div>
                    </div>
                </section>

                <section className="quick-links flex flex-col gap-8">
                    <p>Quick Links</p>
                    <ul className='flex flex-col gap-4'>
                        {navLinks.map((link, index) => (
                            <NavLink href={link.url} key={index}>{link.name}</NavLink>
                        ))}
                    </ul>
                </section>

                <section className="connect flex flex-col gap-8">
                    <p>Connect</p>
                    <Socials gap='gap-4' className='!text-white' />
                </section>
            </div>
        </footer>
    )
}
