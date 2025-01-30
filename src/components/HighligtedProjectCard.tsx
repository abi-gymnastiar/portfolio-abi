import React from "react";
import { Link } from "react-router-dom";

type HighlightedProjectProps = {
  id: Number
  title: string;
  description: string;
  img: string;
  link: string;
};

const HighlightedProjectCard: React.FC<{ project: HighlightedProjectProps }> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block w-full h-[300px] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
    >
      {/* Background Image - Always Fills Card */}
      <div className="absolute inset-0 w-full h-full">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      </div>

      {/* Hover Overlay with Title & Description */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm text-justify">{project.description}</p>
      </div>
    </Link>
  );
};

export default HighlightedProjectCard;
