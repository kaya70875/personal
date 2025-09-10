import { DownloadIcon, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollaborationCard() {
  return (
    <div className='flex flex-col gap-4 w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-[#0C1223]'>
      <h2>
        Lets Collaborate
      </h2>

      <p className='font-light'>Looking for a developer to bring your ideas to life? I'm currently available for full time work and possible collaborations.</p>

      <Link href={'/api/resume'} className='text-accent hover:opacity-80 flex items-center w-full gap-2'>
        <p>Download My Resume</p>
        <DownloadIcon />
      </Link>
    </div>
  )
}
