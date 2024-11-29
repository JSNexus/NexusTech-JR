import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";
import ProjectCard from "../projects/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      {/* Section Title */}
      <div id="learnmore">
        <SectionTitle title="Nossos Serviços" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>

      {/* View All Services Button */}
      <div className="relative w-full mt-8 flex justify-center">
        <Link
          href="/projects"
          className="inline-block border border-fun-pink text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer px-8 py-3 rounded-full text-center"
        >
          Ver Todos os Serviços
        </Link>
      </div>
    </div>
  );
}

export default Projects;
