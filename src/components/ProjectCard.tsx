// src/components/ProjectCard.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../types/Project";

const ProjectCard: React.FC<{project: Project}> = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div 
      className="w-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={handleCardClick}
    >
      <div className="relative w-full h-64">
        <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-cyan-500 text-center">{project.title}</h2>
        
        {/* Project Type */}
        <p className="mt-2 text-sm text-gray-300">Type: {project.projectType}</p>
        
        {/* Project Status */}
        <p className="mt-1 text-sm text-gray-300">Status: {project.projectStatus}</p>
        
        {/* Team */}
        <p className="mt-1 text-sm text-gray-300">Team: {project.projectTeam}</p>
        
        {/* Description */}
        <p className="mt-2 text-sm text-gray-400 text-justify">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
