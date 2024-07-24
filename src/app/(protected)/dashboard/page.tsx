
import { Metadata } from 'next';
import React, { Suspense } from 'react'
import PostCards, { PostCardsLoading } from './PostCards';
import Section from '@/components/Section';

export const metadata: Metadata = {
    title: "Dashboard | Template",
};

export default function page() {
    return (
        <Section>
            <h4 className="">Dashboard</h4>

            <Suspense fallback={<PostCardsLoading />}>
                <PostCards />
            </Suspense>
        </Section>
    )
}
