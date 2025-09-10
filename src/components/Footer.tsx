import React from 'react'
import { GithubIcon, LinkedinIcon, Mail, MailIcon } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#080c17] py-12 px-4 border-t border-gray-800">
            {/* TODO: refactor this footer component later. */}
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <a href="#" className="flex items-center gap-2 mb-6 md:mb-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-600 rounded-lg flex items-center justify-center font-bold text-gray-900">
                            A
                        </div>
                        <h2 className="text-xl font-bold">
                            <span className="text-accent">ahmetky</span>
                            <span className='text-white'>.dev</span>
                        </h2>
                    </a>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <GithubIcon size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <LinkedinIcon size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <MailIcon size={20} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Ahmet K. All rights reserved.
                    </p>
                    <nav className="flex gap-6">
                        <a
                            href="#home"
                            className="text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#contact"
                            className="text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
