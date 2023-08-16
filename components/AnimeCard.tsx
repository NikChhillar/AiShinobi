import Image from 'next/image';
import React from 'react';

interface AnimeCardProps {
    rank: number;
    animeName: string;
    imageUrl: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ rank, animeName, imageUrl }) => {
    return (
        <div
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        >
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={imageUrl}
                    alt="character-card"
                    fill
                    className="aspect-square object-cover rounded-md"
                />
            </div>

            <div className='flex gap-1'>
                <span className='text-gray-500 text-sm'>#{rank}</span>
                <p className="text-gray-700 text-sm"> {animeName}</p>
            </div>


        </div>
    );
};

export default AnimeCard;
