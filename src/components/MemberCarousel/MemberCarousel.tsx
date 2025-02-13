import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MemberCard from "../MemberCard/MemberCard";
import { useMemberStore } from "../../store/useMemberStore";
import useMembersHandler from "../../hooks/useMembersHandler";
import useSelectedMember from "../../hooks/useSelectedMember";

const MemberCarousel = () => {
  useMembersHandler();
  const [activeIndex, setActiveIndex] = useState(0);
  const members = useMemberStore((state) => state.members);
  useSelectedMember(activeIndex, members);

  return (
    <Swiper
      loop={true}
      initialSlide={0}
      centeredSlides={true}
      slidesPerView={1}
      className="h-96"
      breakpoints={{
        320: { slidesPerView: 1, centeredSlides: true },
        768: { slidesPerView: 3, centeredSlides: true, spaceBetween: 30 },
        1024: { slidesPerView: 3, centeredSlides: true, spaceBetween: 5 },
        1280: { slidesPerView: 4, centeredSlides: false, spaceBetween: 5 },
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {members?.map((member, index) => (
        <SwiperSlide key={member.id}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <MemberCard
            member={member}
            isActive={index === activeIndex}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MemberCarousel;
