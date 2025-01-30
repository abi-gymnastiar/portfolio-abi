import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import projectsData from "../data/projects.json";
import { Project } from "../types/Project";
import rehypeRaw from "rehype-raw"; // Allows raw HTML parsing

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projectsData.find((p) => p.id === Number(id));

  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    if (project?.pageContent) {
      fetch(project.pageContent)
        .then((res) => res.text())
        .then((data) => setMarkdown(data));
    }
  }, [project]);

  if (!project) {
    return <div className="text-center text-2xl mt-20">Project not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 bg-black bg-opacity-5">
      <h1 className="text-4xl font-bold text-gray-900 text-center">{project.title}</h1>
      <p className="text-gray-900 mt-4">{project.description}</p>
      <img src={project.bannerImg} alt={project.title} className="w-full h-80 object-cover mt-6 shadow-lg" />
      {/* Render Markdown Content */}
      <div className="prose prose-lg prose-gray mt-10 max-w-none w-full text-gray-900 mb-4">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
      <div className="mt-6 text-gray-800 text-sm">
        <p><strong>--------------------------------------------</strong></p>
        <p><strong>Type:</strong> {project.projectType}</p>
        <p><strong>Status:</strong> {project.projectStatus}</p>
        <p><strong>Team:</strong> {project.projectTeam}</p>
        <p><strong>--------------------------------------------</strong></p>
      </div>

      <div className="text-center">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
            View Project Page
          </a>
        )}
      </div>

      {/* Screenshots Section */}
      {project.screenShots && project.screenShots.length > 0 && (
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.screenShots.map((screenshot, index) => (
              <img 
                key={index} 
                src={screenshot} 
                alt={`Screenshot ${index + 1}`} 
                className="w-full h-48 object-cover shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(screenshot)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Image Modal (Enlarge on Click) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Enlarged Screenshot" 
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
    
  );
};

export default ProjectPage;
