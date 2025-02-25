import { useMemberStore } from "../../store/useMemberStore";
import ProjectCard from "../ProjectCard/ProjectCard";

const MemberProjects = () => {
  const selectedMember = useMemberStore((state) => state.selectedMember);

  return (
    <section className="flex flex-col gap-16 mt-16 mb-28 font-fusion text-white">
      <h3 className="font-normal text-4xl text-center">Meus Projetos</h3>

      {selectedMember?.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};


export default MemberProjects;
