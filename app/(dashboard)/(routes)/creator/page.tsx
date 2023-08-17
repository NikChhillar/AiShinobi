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
            <div className=" py-4 px-2 md:p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite Animes...</h2>
                {/* Display your top 5 favorite animes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    <AnimeCard rank={1} animeName='That time I got reincarnated as a slime' imageUrl='/i/tensura.jpg' />
                    <AnimeCard rank={2} animeName='Fruit Basket' imageUrl='/i/fb.jpg' />
                    <AnimeCard rank={3} animeName='Bocchi the Rock' imageUrl='/i/bocchi.jpg' />
                    <AnimeCard rank={4} animeName='Love is War' imageUrl='/i/lw.jpg' />
                    <AnimeCard rank={5} animeName='Bungou Stray Dogs' imageUrl='/i/bsd.jpg' />
                </div>
            </div>
            <Separator className='mt-4' />
            <div className=" py-4 px-2 md:p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite characters...</h2>
                {/* Display your top 5 favorite characters */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    <CharacterCard characterName='Ranpo Edogawa' rank={1} animeName='Bungou Stray Dogs' imageUrl='/i/ranpo.jpg' />
                    <CharacterCard characterName='Kiyotaka Ayanokouji' rank={2} animeName='Classroom of the Elite' imageUrl='/i/ak.png' />
                    <CharacterCard characterName='Hachiman Hikigaya' rank={3} animeName='Oregairu' imageUrl='/i/hh.jpg' />
                    <CharacterCard characterName='Eren Yeager' rank={4} animeName='Attack on titans' imageUrl='/i/eren.jpg' />
                    <CharacterCard characterName='Killua Zoldyck' rank={5} animeName='Hunter X Hunter' imageUrl='/i/killua.jpg' />
                </div>
            </div>
            <Separator className='mt-4' />

            <div className=" py-4 px-2 md:p-8">
                <h2 className="text-2xl font-semibold mb-4">Favorite lines...</h2>
                {/* Display your top 5 favorite quotes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <QuoteCard rank={1} source='Kiyotaka Ayanokouji' quote={`All people are nothing but tools. It doesn’t matter how its done. It doesn’t matter what needs to be sacrificed. In this world, winning is everything. As long as I win in the end…That’s all that matters...`} />
                    <QuoteCard rank={2} source='one piece' quote={`Beneath the moon we'll meet again, the wind's our lullaby...`} />
                    <QuoteCard rank={3} source='Osamu Dazai' quote={`You can't do a double suicide alone... `} />
                    <QuoteCard rank={4} source='Kiyotaka Ayanokouji' quote={`Coincidence can be freaky...`} />
                    <QuoteCard rank={5} source='Saturo Gojo' quote={`Throughout heaven and Earth, I alone am the honored one...`} />
                </div>
            </div>
        </div>
    )
}

export default CreatorPage