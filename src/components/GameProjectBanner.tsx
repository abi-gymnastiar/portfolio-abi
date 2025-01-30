import React from "react";
import HighlightedProjects from "./HighlightedProjects";

const GameProjectsBanner: React.FC = () => {
  return (
    <div>
      <div className="relative w-full pt-10 bg-gradient-to-b from-cyan-900 via-transparent to-transparent text-white text-center">
        <h2 className="text-5xl font-bold drop-shadow-lg">🎮 Game Projects</h2>
        <p className="text-lg mt-4 opacity-90 max-w-3xl mx-auto">
          A collection of games I've worked on, featuring programming, design, and 3D art.
        </p>
        <HighlightedProjects />
      </div>
    </div>
  );
};

export default GameProjectsBanner;
