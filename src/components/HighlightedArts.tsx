import React from "react";
import ArtCard from "./ArtCard";
import artsData from "../data/Arts.json"; // Import JSON data

interface HighlightedArtsProps {
  highlightedIds: number[]; // Array of IDs to display
}

const HighlightedArts: React.FC<HighlightedArtsProps> = ({ highlightedIds }) => {
  // Filter only highlighted arts
  const highlightedArts = artsData.filter((art) => highlightedIds.includes(art.id));

  const handleViewMoreClick = () => {
    window.open("https://beta2x.artstation.com/", "_blank");
  };

  return (
    <section className="w-full mx-auto py-2 px-6">
      <div className="flex flex-wrap justify-center gap-6">
        {highlightedArts.map((art) => (
          <ArtCard 
            key={art.id} 
            art={art}
          />
        ))}
      </div>
      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 dark-cyan text-white rounded-lg shadow-md hover:bg-blue-950 transition"
          onClick={handleViewMoreClick}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default HighlightedArts;
