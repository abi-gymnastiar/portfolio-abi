import React from "react";

type ArtCardProps = {
    title: string;
    img: string;
    description: string;
    link: string;
};

const ArtCard: React.FC<{ art: ArtCardProps }> = ({ art }) => {
    return (
        <a
            href={art.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            style={{ width: 'auto', height: '250px' }} // Set a fixed height here
        >
            {/* Background Image - Always Fills Card */}
            <div className="relative w-full h-full">
                <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover" // Ensure the image covers the card
                />
            </div>

            {/* Hover Overlay with Title & Description */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="text-white text-xl font-bold mb-2">{art.title}</h3>
                <p className="text-gray-300 text-sm text-justify">{art.description}</p>
            </div>
        </a>
    );
};

export default ArtCard;
