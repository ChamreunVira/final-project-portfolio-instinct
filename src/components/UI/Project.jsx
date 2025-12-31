import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import imgProject1 from "../../../src/assets/project1.png";
import imgProject2 from "../../../src/assets/project2.png";
import imgProject3 from "../../../src/assets/project3.png";
import imgProject4 from "../../../src/assets/project4.png";

const projects = [
  {
    title: "Portfolio Website",
    category: "Frontend",
    image: imgProject1,
    link: "https://ch-vira.vercel.app/",
    github: "#",
  },
  {
    title: "Vira Academy",
    category: "Education",
    image: imgProject2,
    link: "https://viraacadamy.vercel.app/",
    github: "#",
  },
  {
    title: "E-Commerce Shop",
    category: "Full Stack",
    image: imgProject3,
    link: "https://kat0zy.vercel.app/",
    github: "#",
  },
  {
    title: "Calculator App",
    category: "Utility",
    image: imgProject4,
    link: "https://caculatorbyvira.vercel.app/",
    github: "#",
  },
];

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextProject = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const project = projects[slideIndex];

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-2xl bg-white dark:bg-[#1c1c22] border border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300">
        
        {/* Image Area */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
             <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent text-primary rounded-full hover:bg-white transition-colors"
            >
              <FaExternalLinkAlt size={20} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-black transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
             <div>
                <span className="text-accent text-sm font-bold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{project.title}</h3>
             </div>
             <span className="text-gray-400 font-mono text-sm">0{slideIndex + 1}/0{projects.length}</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute top-1/2 -left-4 -translate-y-1/2 p-3 bg-white dark:bg-primary text-gray-800 dark:text-white rounded-full shadow-lg hover:bg-accent hover:text-primary transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 dark:border dark:border-gray-700"
        >
          <IoChevronBack size={24} />
        </button>
        <button
          onClick={nextProject}
          className="absolute top-1/2 -right-4 -translate-y-1/2 p-3 bg-white dark:bg-primary text-gray-800 dark:text-white rounded-full shadow-lg hover:bg-accent hover:text-primary transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 dark:border dark:border-gray-700"
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
           <button 
             key={index}
             onClick={() => setSlideIndex(index)}
             className={`w-3 h-3 rounded-full transition-all duration-300 ${index === slideIndex ? 'bg-accent w-6' : 'bg-gray-300 dark:bg-gray-700'}`}
           />
        ))}
      </div>
    </div>
  );
};

export default Projects;
