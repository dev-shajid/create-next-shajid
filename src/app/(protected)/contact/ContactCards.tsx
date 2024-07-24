import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import wait from '@/lib/wait'
import { EditIcon } from 'lucide-react'
import React, { Key } from 'react'

export default async function ContactCards() {
    await wait(3000)
    const contact: ContactType[] = [
        {
            _id: '1',
            user_id: '1',
            name: "GitHub",
            href: "https://dub.sh/dillion-github",
            icon: 'github',
            navbar: true,
        },
        {
            _id: '2',
            user_id: '1',
            name: "LinkedIn",
            href: "https://dub.sh/dillion-linkedin",
            icon: 'linkedin',
            navbar: true,
        },
        {
            _id: '3',
            user_id: '1',
            name: "Email",
            href: "sajidislam729@gmail.com",
            icon: 'email',
            navbar: false,
        },
        {
            _id: '4',
            user_id: '1',
            name: "Phone",
            href: "01879907444",
            icon: 'phone',
            navbar: false,
        },
    ]

    return (
        <div className='space-y-3 bg-transparent'>
            {
                contact.map((item, i) => (
                    <Card key={i} className='flex items-center justify-between gap-4 p-4'>
                        <div className='flex items-center gap-4'>
                            {Icons[item.icon]({ className: 'size-8' })}
                            <div className="flex flex-col gap-1">
                                <p className='font-medium'>{item.name}</p>
                                <p className='text-muted-foreground text-sm'>{item.href}</p>
                            </div>
                        </div>


                        <Button size='icon' variant='link'>
                            <EditIcon className='size-4' />
                        </Button>
                    </Card>
                ))
            }
        </div>
    )
}


export const ContactCardsLoading = () => {
    return (
        <div className='space-y-3 bg-transparent'>
            {
                [1, 2, 3, 4].map((_, i) => (
                    <Card key={i} className='flex items-center justify-between gap-4 p-4'>
                        <div className='flex items-center gap-4'>
                            <Skeleton className='size-10' />
                            <div className="flex flex-col gap-1">
                                <Skeleton className='h-4 w-20' />
                                <Skeleton className='h-4 w-40' />
                            </div>
                        </div>
                    </Card>
                ))
            }
        </div >
    )
}