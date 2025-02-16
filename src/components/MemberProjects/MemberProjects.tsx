import ProjectCard from "../ProjectCard/ProjectCard";

const MemberProjects = () => {
  return(
    <section className="flex flex-col gap-16 mt-16 mb-28 font-fusion text-white">
      <h3 className="font-normal text-4xl text-center">Meus Projetos</h3>
      <ProjectCard />
    </section>
  )
};

export default MemberProjects;