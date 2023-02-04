import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
    postedAt: string;
    buttonText: string;
    onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({image, title, description, postedAt, buttonText, onButtonClick}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-800">
            <img src={image} alt={title} className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {postedAt}
        </span>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={onButtonClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Card;
