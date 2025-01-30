import React from "react";
import HighlightedArts from "./HighlightedArts";

const ArtProjectBanner: React.FC = () => {
  return (
    <section className="relative w-full py-10 bg-gradient-to-t from-cyan-900 via-transparent to-transparent text-white text-center">
      <h1 className="text-5xl font-bold drop-shadow-lg">🎨 3D Artworks</h1>
      <p className="text-lg mt-4 opacity-90 max-w-3xl mx-auto">
        A collection of my 3D renders, models, and visual art pieces, created mostly using Blender.
      </p>

      {/* Highlighted Artworks Section */}
      <div className="mt-12">
        <HighlightedArts highlightedIds={[4, 5, 6, 2, 3, 7, 1]} /> 
        {/* Pass IDs of artworks to display */}
      </div>
    </section>
  );
};

export default ArtProjectBanner;
