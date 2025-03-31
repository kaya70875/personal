import React from 'react'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { navLinks } from './Navbar'
import NavLink from './NavLink'
import Socials from './Socials'

export default function Footer() {
    return (
        <footer className='w-full bg-text p-8 flex  flex-col gap-4'>
            <div className='default-container text-white flex justify-around'>
                <section className="contact-info flex flex-col gap-8">
                    <p>Contact Info</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <MdEmail size={24} color='white' />
                            <p>kaya70875@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdLocationOn size={24} color='white' />
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
                    <Socials className='!text-white' />
                </section>
            </div>
            <section className="copyw flex flex-col gap-4 items-center justify-center w-full">
                <div className="line w-full flex items-center justify-center !bg-white" />
                <p className='text-white font-semibold'>@ 2025 ahmetky.dev</p>
            </section>

        </footer>
    )
}
