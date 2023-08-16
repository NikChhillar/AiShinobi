import { Heading } from '@/components/Heading'
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

        </div>
    )
}

export default CreatorPage