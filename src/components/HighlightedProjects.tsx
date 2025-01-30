import React from "react";
import HighlightedProjectCard from "./HighligtedProjectCard"; // Import the new component
import projectsData from "../data/projects.json"; // Import project data
import { useNavigate } from "react-router-dom";

const highlightedProjectIDs = [1, 4, 5]; // Select which projects to highlight

const HighlightedProjects: React.FC = () => {
  const navigate = useNavigate();
  const highlightedProjects = projectsData.filter((project) =>
    highlightedProjectIDs.includes(project.id)
  );

  return (
    <section className="max-w-7xl mx-auto py-16">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {highlightedProjects.map((project) => (
          <HighlightedProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 dark-cyan text-white rounded-lg shadow-md hover:bg-blue-950 transition"
          onClick={() => navigate("/projects")}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default HighlightedProjects;
