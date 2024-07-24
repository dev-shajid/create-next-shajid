import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import wait from '@/lib/wait'
import { BookCheck } from 'lucide-react'
import React from 'react'

export default async function PostCards() {
    await wait(3000)
    return (
        <ul className='grid gap-3 w-full' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {[1, 2, 3, 4, 5, 6].map((post, i) => (
                <Card key={i} className='p-4 text-center space-y-2'>
                    <BookCheck className='size-10 mx-auto' />
                    <h3 className='text-lg font-semibold'>Post {post}</h3>
                </Card>
            ))}
        </ul>
    )
}

export function PostCardsLoading() {
    return (
        <ul className='grid gap-3 w-full' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {[1, 2, 3, 4, 5, 6].map((post, i) => (
                <Card key={i} className='p-4 text-center space-y-2'>
                    <Skeleton className='size-12 mx-auto' />
                    <Skeleton className='h-5 max-w-20 mx-auto' />
                </Card>
            ))}
        </ul>
    )
}