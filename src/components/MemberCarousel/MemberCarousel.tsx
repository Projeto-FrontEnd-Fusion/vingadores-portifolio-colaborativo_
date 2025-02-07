import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MemberCard from "../MemberCard/MemberCard";
import useMembersHandler from "../../hooks/useMembersHandler";

const MemberCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { members } = useMembersHandler();

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
      {members?.map((member, index) => (
        <SwiperSlide key={index}>
          <MemberCard
            photo={member.profile_image}
            name={member.name}
            role={member.stack}
            isActive={index === activeIndex}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MemberCarousel;
