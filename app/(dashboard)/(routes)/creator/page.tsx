import AnimeCard from '@/components/AnimeCard'
import CharacterCard from '@/components/CharacterCard'
import { Heading } from '@/components/Heading'
import QuoteCard from '@/components/QuoteCard'
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <AnimeCard rank={1} animeName='That time I got reincarnated as a slime' imageUrl='/logo.png' />
                    <AnimeCard rank={2} animeName='Fruit Basket' imageUrl='/logo.png' />
                    <AnimeCard rank={3} animeName='Bocchi the Rock' imageUrl='/logo.png' />
                    <AnimeCard rank={4} animeName='Love is War' imageUrl='/logo.png' />
                    <AnimeCard rank={5} animeName='Fullmetal Alchemist Brotherhood' imageUrl='/logo.png' />
                </div>
            </div>
            <Separator className='mt-4' />
            <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite characters</h2>
                {/* Display your top 5 favorite characters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <CharacterCard characterName='X' rank={1} animeName='One piece' imageUrl='/logo.png' />
                    <CharacterCard characterName='X' rank={2} animeName='One piece' imageUrl='/logo.png' />
                    <CharacterCard characterName='X' rank={3} animeName='One piece' imageUrl='/logo.png' />
                    <CharacterCard characterName='X' rank={4} animeName='One piece' imageUrl='/logo.png' />
                    <CharacterCard characterName='X' rank={5} animeName='One piece' imageUrl='/logo.png' />
                </div>
            </div>
            <Separator className='mt-4' />

            <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite quotes</h2>
                {/* Display your top 5 favorite quotes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <QuoteCard rank={1} source='one piece' quote='Kindness is a lie' />
                    <QuoteCard rank={2} source='one piece' quote='Power is not will. It is the phenomenon of physically making things happen..' />
                    <QuoteCard rank={3} source='one piece' quote='Kindness is a lie' />
                    <QuoteCard rank={4} source='one piece' quote='Kindness is a lie' />
                    <QuoteCard rank={5} source='one piece' quote='Kindness is a lie' />
                </div>
            </div>
        </div>
    )
}

export default CreatorPage