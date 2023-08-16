import Image from 'next/image';
import React from 'react';

interface CharacterCardProps {
    rank: number;
    characterName: string;
    animeName: string;
    imageUrl: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ rank, characterName, animeName, imageUrl }) => {
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

            <div>
                <p className="text-gray-700 text-sm"> <span className='text-gray-500'>#{rank}</span> {characterName}</p>
                <p className="text-sm text-gray-500">{animeName}</p>
            </div>


        </div>
    );
};

export default CharacterCard;
