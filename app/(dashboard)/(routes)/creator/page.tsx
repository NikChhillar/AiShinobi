import { Heading } from '@/components/Heading'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { StarIcon } from 'lucide-react'
import React from 'react'

const CreatorPage = () => {
    return (
        <div>
            <Heading
                title="My Top Picks"
                description="Discover the Creator's Favorite Animes, Characters, and Quotes...."
                icon={StarIcon}
                iconColor="text-yellow-500"
                bgColor="bg-yellow-500/10"
            />
            <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite Animes</h2>
                {/* Display your top 5 favorite animes */}
            </div>
            <Separator className='mt-4' />
            <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite characters</h2>
                {/* Display your top 5 favorite characters */}
            </div>
            <Separator className='mt-4' />

            <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite quotes</h2>
                {/* Display your top 5 favorite quotes */}
            </div>
        </div>
    )
}

export default CreatorPage