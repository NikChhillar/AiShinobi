import React from 'react';

interface QuoteCardProps {
    rank: number;
    quote: string;
    source: string;
}
const bgColors = [
    'bg-purple-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-orange-100',
    'bg-red-100',
];

// Choose a background color based on the rank
const QuoteCard: React.FC<QuoteCardProps> = ({ rank, quote, source }) => {

    const bgColor = bgColors[(rank - 1) % bgColors.length];

    return (
        <div className={`rounded-lg border border-gray-300 shadow p-4 ${bgColor}`}>
            <p className="text-gray-400">Rank #{rank}</p>
            <blockquote className="text-lg italic mb-2">{quote}</blockquote>
            <p className="text-gray-600">{source}</p>
        </div>
    );
};

export default QuoteCard;
