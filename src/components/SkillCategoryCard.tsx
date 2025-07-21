import { SKILLS } from '@/data/skills';
import React from 'react'
import SkillButton from './SkillButton';

interface SkillCategoryCard {
  category: string;
}

export default function SkillCategoryCard({ category }: SkillCategoryCard) {

  const currentCategory = SKILLS.filter((skill) => skill.category === category)

  return (
    <div className='bg-white shadow-md dark:bg-dark-primary border h-full border-gray-300 dark:border-gray-500 p-6 flex flex-col gap-6 rounded-lg w-full max-w-lg'>
      <h2 className='capitalize font-bold text-xl!'>{category}</h2>
      <div className="line bg-gray-400" />
      <div className="skill-buttons grid grid-cols-2 gap-4">
        {currentCategory.map((skill, index) => (
          <SkillButton name={skill.name} icon={skill.icon} key={index} />
        ))}
      </div>
    </div>
  )
}
