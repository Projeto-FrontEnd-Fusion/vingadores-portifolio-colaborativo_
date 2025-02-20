interface Project {
  id: string;
  project_cover: string;
  project_name: string;
  description: string;
  project_url: string;
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex mx-[14%] gap-6">
      <img
        src={project.project_cover || "https://via.placeholder.com/400"}
        className="w-1/2 rounded-md"
        alt={project.project_name}
      />

      <div className="flex flex-col gap-3 py-6 text-white">
        <h4 className="text-xl font-bold">{project.project_name}</h4>
        <p>{project.description}</p>

        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" >
          MAIS DETALHES
        </a>

        <hr />
      </div>
    </div>
  );
};

export default ProjectCard;
