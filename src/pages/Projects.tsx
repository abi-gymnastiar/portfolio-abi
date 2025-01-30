// src/pages/Projects.tsx

import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
//import { ProjectType, ProjectStatus, ProjectTeam } from "../types/projectEnums";
import projectsData from "../data/projects.json"; // Import the JSON file

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<{ id: number; title: string; projectType: string; projectStatus: string; projectTeam: string; description: string; pageContent: string; img: string; bannerImg: string; screenShots: string[]; link: string; }[]>([]);

  useEffect(() => {
    setProjects([...projectsData].reverse());
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
