import { Button } from '@/components/ui/button'
import React, { Suspense } from 'react'
import ContactCards, { ContactCardsLoading } from './ContactCards'

export default async function Contact() {
  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h4>Contact</h4>
        <Button>Add new</Button>
      </div>


      <Suspense fallback={<ContactCardsLoading />}>
        <ContactCards />
      </Suspense>

    </div>
  )
}
