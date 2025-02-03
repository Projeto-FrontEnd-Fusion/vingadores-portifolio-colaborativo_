import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from 'swiper/modules'
import MemberCard from "../MemberCard/MemberCard";
import 'swiper/swiper-bundle.css'
import { useState } from "react";

const members = [
  {
    photo: "https://avatars.githubusercontent.com/u/94319702?v=4",
    name: "Maria de Fátima Nunes Alves",
    role: "Desenvolvedora Frontend",
    technologies: [],
    linkedin: "https://linkedin.com/in/maria-de-fatima-nunes-alves/",
    github: "https://github.com/alvesmariadefatima",
  },

  {
    photo: "https://avatars.githubusercontent.com/u/109109668?v=4",
    name: "Caroline Moraes",
    role: "Desenvolvedora Frontend",
    technologies: [],
    linkedin: "https://www.linkedin.com/in/carolinemmoraes/",
    github: "https://github.com/carolinedemoraes",
  },

  {
    photo: "https://avatars.githubusercontent.com/u/62396328?v=4",
    name: "Breno Matheus",
    role: "Desenvolvedor Frontend",
    technologies: [],
    linkedin: "https://www.linkedin.com/in/breno-mateus-8b9a99211/",
    github: "https://github.com/Breno-Mateus",
  },

  {
    photo: "https://avatars.githubusercontent.com/u/86496222?v=4",
    name: "Rafael Euzebio",
    role: "Desenvolvedor Full-Stack",
    technologies: [],
    linkedin: "https://linkedin.com/in/rafael-euzebio",
    github: "https://github.com/rafael-euzebio",
  },
];


const MemberCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const swiper = useSwiper();

  const handleSlideChange = () => {
    console.log(swiper)
  };

  return (
    <Swiper
      navigation
      loop
      modules={[Navigation]}
      slidesPerView={3}
      onSlideChange={handleSlideChange}
    >
      {members.map((member, index) => (
        <SwiperSlide key={index}>
          <MemberCard
            photo={member.photo}
            name={member.name}
            role={member.role}
            linkedin={member.linkedin}
            github={member.github}
            isActive={index === activeIndex}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MemberCarousel;
