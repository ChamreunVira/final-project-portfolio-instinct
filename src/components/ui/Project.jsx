import { useCallback, useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiImage, FiX } from "react-icons/fi";
import { getProjects } from "../../lib/api";

function ImageViewer({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images?.length ? project.images : [];

  const previous = useCallback(() => setImageIndex((current) => (current - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setImageIndex((current) => (current + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [next, onClose, previous]);

  if (!images.length) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-primary/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${project.title} image gallery`} onMouseDown={onClose}>
      <div className="relative w-full max-w-6xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between text-white">
          <div><p className="font-mono text-sm text-accent">Project preview</p><h2 className="text-xl font-bold md:text-2xl">{project.title}</h2></div>
          <button type="button" onClick={onClose} className="rounded-full bg-white/10 p-3 transition hover:bg-white/20" aria-label="Close image viewer"><FiX className="text-2xl" /></button>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
          <img src={images[imageIndex]} alt={`${project.title} preview ${imageIndex + 1}`} className="max-h-[68vh] min-h-64 w-full object-contain" />
          {images.length > 1 && <><button type="button" onClick={previous} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-accent hover:text-primary" aria-label="Previous image"><FiChevronLeft className="text-2xl" /></button><button type="button" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-accent hover:text-primary" aria-label="Next image"><FiChevronRight className="text-2xl" /></button></>}
        </div>
        <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-1">
          {images.map((image, index) => <button type="button" key={image} onClick={() => setImageIndex(index)} className={`h-14 w-20 flex-none overflow-hidden rounded-lg border-2 transition ${index === imageIndex ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"}`} aria-label={`View image ${index + 1}`}><img src={image} alt="" className="h-full w-full object-cover" /></button>)}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onView }) {
  const heroImage = project.images?.[0];
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-[#1c1c22]">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        {heroImage && <img src={heroImage} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 to-transparent p-5">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{project.category}</span>
          <span className="flex items-center gap-1 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white"><FiImage /> {project.images?.length || 0} images</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary dark:text-white">{project.title}</h3>
        <p className="mt-3 min-h-14 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack?.map((item) => <span key={item} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300">{item}</span>)}</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => onView(project)} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-primary transition hover:bg-accent-hover"><FiImage /> View project</button>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent dark:border-gray-700 dark:text-white"><FaExternalLinkAlt /> Live</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent dark:border-gray-700 dark:text-white"><FaGithub /> Code</a>}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => { getProjects().then(setProjects); }, []);

  return <>
    <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id || project._id} project={project} onView={setActiveProject} />)}</div>
    {activeProject && <ImageViewer project={activeProject} onClose={() => setActiveProject(null)} />}
  </>;
}

export default Projects;
