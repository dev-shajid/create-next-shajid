import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import wait from '@/lib/wait'
import Link from 'next/link'
import React from 'react'

export default async function ProjectCards() {
    await wait(5000)

    const projects: ProjectType[] = [
        {
            _id: '1',
            user_id: '1',
            isPublished: true,
            image: '',
            title: 'Chittagong University of Engineerng and Technology',
            date: 'Jan 2024 - Feb 2024',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consequatur?',
            tags: ['HTML', 'CSS', 'JAVASCRIPT'],
            links: [
                {
                    label: 'Website',
                    href: 'http://dev-shajid.vercel.app',
                    icon: 'globe',
                },
                {
                    label: 'Github',
                    href: 'http://github.com',
                    icon: 'github',
                },
            ],
        },
        {
            _id: '2',
            user_id: '1',
            isPublished: true,
            image: '',
            title: 'Chittagong University of Engineerng and Technology',
            date: 'Jan 2024 - Feb 2024',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consequatur?',
            tags: ['HTML', 'CSS', 'JAVASCRIPT'],
            links: [
                {
                    label: 'Website',
                    href: 'http://dev-shajid.vercel.app',
                    icon: 'globe',
                },
                {
                    label: 'Github',
                    href: 'http://github.com',
                    icon: 'github',
                },
            ],
        },
        {
            _id: '3',
            user_id: '1',
            isPublished: true,
            image: '',
            title: 'Chittagong University of Engineerng and Technology',
            date: 'Jan 2024 - Feb 2024',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consequatur?',
            tags: ['HTML', 'CSS', 'JAVASCRIPT'],
            links: [
                {
                    label: 'Website',
                    href: 'http://dev-shajid.vercel.app',
                    icon: 'globe',
                },
                {
                    label: 'Github',
                    href: 'http://github.com',
                    icon: 'github',
                },
            ],
        },
        {
            _id: '4',
            user_id: '1',
            isPublished: true,
            image: '',
            title: 'Chittagong University of Engineerng and Technology',
            date: 'Jan 2024 - Feb 2024',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consequatur?',
            tags: ['HTML', 'CSS', 'JAVASCRIPT'],
            links: [
                {
                    label: 'Website',
                    href: 'http://dev-shajid.vercel.app',
                    icon: 'globe',
                },
                {
                    label: 'Github',
                    href: 'http://github.com',
                    icon: 'github',
                },
            ],
        },
    ]

    return (
        <div className='space-y-3'>
            {
                projects.map((project, i) => (
                    <Card className='overflow-hidden p-2 flex justify-between items-center gap-4 flex-wrap' key={i}>
                        <div className='flex items-center gap-4 flex-1'>
                            <div
                                className='bg-muted-foreground aspect-video max-w-28 w-full rounded-sm overflow-hidden'
                            />
                            <div className='space-y-2'>
                                <Link href={`/admin/projects/${project._id}`}><h6>{project.title}</h6></Link>
                                <div className='flex gap-2 flex-wrap'>
                                    {
                                        project?.tags?.map((tag: string, i: number) => (
                                            <Badge key={tag + i} variant='secondary' className='rounded-sm text-xs'>{tag}</Badge>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}

export function ProjectCardsLoading() {
    return (
        <div className='space-y-3'>
            {
                [1, 2, 3, 4].map((i) => (
                    <Card className='overflow-hidden p-2 flex justify-between items-center gap-4 flex-wrap' key={i}>
                        <div className='flex items-center gap-4 flex-1'>
                            <Skeleton className='aspect-video max-w-28 w-full' />
                            <div className='space-y-2'>
                                <Skeleton className='h-4 w-40' />
                                <div className='flex gap-2 flex-wrap'>
                                    {
                                        [1, 2, 3].map((i) => (
                                            <Skeleton key={i} className='h-4 w-10' />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}
