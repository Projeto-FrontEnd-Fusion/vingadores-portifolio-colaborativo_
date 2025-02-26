import { useMemberStore } from "../../store/useMemberStore";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import CarouselNavigation from "../CarouselNavigation/CarouselNavigation";
import "swiper/swiper-bundle.css";

const MemberProjects = () => {
  const selectedMember = useMemberStore((state) => state.selectedMember);

  return (
    <section className="mt-20">
      <h3 className="text-white font-normal text-4xl text-center">Meus Projetos</h3>
      <div className="mt-16 font-fusion">

        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
        >
          {selectedMember?.projects.map((project) => (
            <SwiperSlide key={project.id} >
              <ProjectCard project={project} />
            </SwiperSlide>

          ))}
          <CarouselNavigation margin={true} label="projeto" />
        </Swiper>
      </div>
    </section>
  );
};

export default MemberProjects;
