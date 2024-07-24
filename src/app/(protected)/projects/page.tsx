
import { LinkButton } from '@/components/ui/linkButton'
import React, { Suspense } from 'react'
import ProjectCards, { ProjectCardsLoading } from './ProjectCards'

export default function Projects() {
  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h4>Projects</h4>
        <LinkButton href='#'>Add new</LinkButton>
      </div>

      <Suspense fallback={<ProjectCardsLoading />}>
        <ProjectCards />
      </Suspense>
    </div>
  )
}
