import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MemberCard from "../MemberCard/MemberCard";

const members = [
  {
    photo: "https://avatars.githubusercontent.com/u/94319702?v=4",
    name: "Maria de Fátima Nunes Alves",
    role: "Desenvolvedora Frontend",
    linkedin: "https://linkedin.com/in/maria-de-fatima-nunes-alves/",
    github: "https://github.com/alvesmariadefatima",
  },
  {
    photo: "https://avatars.githubusercontent.com/u/109109668?v=4",
    name: "Caroline Moraes",
    role: "Desenvolvedora Frontend",
    linkedin: "https://www.linkedin.com/in/carolinemmoraes/",
    github: "https://github.com/carolinedemoraes",
  },
  {
    photo: "https://avatars.githubusercontent.com/u/62396328?v=4",
    name: "Breno Mateus",
    role: "Desenvolvedor Frontend",
    linkedin: "https://www.linkedin.com/in/breno-mateus-8b9a99211/",
    github: "https://github.com/Breno-Mateus",
  },
  {
    photo: "https://avatars.githubusercontent.com/u/86496222?v=4",
    name: "Rafael Euzebio",
    role: "Desenvolvedor Full-Stack",
    linkedin: "https://linkedin.com/in/rafael-euzebio",
    github: "https://github.com/rafael-euzebio",
  },
  {
    photo: "https://avatars.githubusercontent.com/u/86496222?v=4",
    name: "Rafael Euzebio",
    role: "Desenvolvedor Full-Stack",
    linkedin: "https://linkedin.com/in/rafael-euzebio",
    github: "https://github.com/rafael-euzebio",
  },
  {
    photo: "https://avatars.githubusercontent.com/u/86496222?v=4",
    name: "Rafael Euzebio",
    role: "Desenvolvedor Full-Stack",
    linkedin: "https://linkedin.com/in/rafael-euzebio",
    github: "https://github.com/rafael-euzebio",
  },
];

const MemberCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      loop={true}
      initialSlide={0}
      centeredSlides={true}
      slidesPerView={1}
      breakpoints={{
        320: { slidesPerView: 1, centeredSlides: true },
        480: { slidesPerView: 2, centeredSlides: false },
        768: { slidesPerView: 3, centeredSlides: true },
        1024: { slidesPerView: 4, centeredSlides: false },
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
