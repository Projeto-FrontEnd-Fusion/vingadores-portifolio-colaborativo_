interface Project {
  id: string;
  project_cover: string;
  project_name: string;
  description: string;
  project_url: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-6 mobile-nav:flex-row mobile-nav:justify-center">
      <img
        src={project.project_cover || "https://via.placeholder.com/400"}
        className="w-auto aspect-auto h-auto rounded-md max-h-80"
        alt={project.project_name}
      />
      <div className="flex flex-col text-center gap-3 py-6 text-white mobile-nav:w-2/5 mobile-nav:text-left">
        <h4 className="text-xl font-bold">{project.project_name}</h4>
        <p>{project.description}</p>

        <a className="hover:text-fusion-purple-hover active:text-fusion-purple-active transition-colors duration-500 ease-in-out"
          href={project.project_url || "#"}
          target="_blank" rel="noopener noreferrer" >
          MAIS DETALHES
        </a>
        <hr />
      </div>
    </div>
  );
};

export default ProjectCard;
