import React from "react";

function TargetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-500"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-500"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10"></polygon>
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-full h-72">
      {/* Image Section */}
      <div className="relative h-36 overflow-hidden rounded-t-xl">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 h-36 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
            {project.title}
          </h3>
          <TargetIcon />
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{project.desc}</p>

        {/* Footer Section */}
        <div className="flex items-center space-x-2">
          <ZapIcon />
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Nexus
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
