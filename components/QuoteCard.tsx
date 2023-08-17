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
            <p className="text-gray-400">#{rank}</p>
            <blockquote className="text-lg mb-2">{quote}</blockquote>
            <p className="text-gray-600 text-sm lowercase">@{source}</p>
        </div>
    );
};

export default QuoteCard;
