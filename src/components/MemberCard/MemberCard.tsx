import clsx from "clsx";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IGetMemberResponse } from "../../types/membersApi";

interface MemberCardProps {
  member: IGetMemberResponse;
  isActive: boolean;
}

const MemberCard = ({ member, isActive }: MemberCardProps) => {

  const { name, profile_image, stack, professional_profile_url, skills } = member

  const swiper = useSwiper();

  return (
    <div className={clsx(
      "bg-[#1A175699] rounded-lg flex flex-col items-center justify-center gap-4 p-4 h-72 w-64 mx-4 transition-all duration-1000 ease-in-out",
      {
        "h-96 w-80": isActive,
      }
    )}>
      <img
        src={profile_image}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-all duration-300 ease-in-out transform hover:scale-110"
        alt={`Foto de ${name}`}
      />
      <div className="flex flex-col items-center justify-center gap-4 w-full font-fusion text-center">
        <span className="text-xl text-white text-center font-bold">{name}</span>
        <span className="text-sm text-white mb-4">{stack}</span>
      </div>

      {isActive && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center">
            {skills.map((skill) => {
              return <i key={skill} aria-label={skill} className={`devicon-${skill}-plain colored p-2`} style={{ fontSize: "20px" }}></i>
            })}
          </div>
          <div className="flex gap-4">
            {professional_profile_url?.map((site) => {
              return (
                <div key={site.url} className="bg-white rounded-md px-4 py-1 gap-3 flex font-bold text-center truncate transition-all duration-300 ease-in-out transform hover:scale-105">
                  <figure className="">
                    <i className={`devicon-${site.platform}-plain colored`} style={{ fontSize: "20px" }}></i>
                  </figure>

                  <a
                    href={site.url}
                    target="_blank"
                    className="hover:underline"
                    rel="noopener noreferrer"
                    aria-label={`Perfil do ${site.platform} de ${name}`}
                  >
                    {site.platform}
                  </a>
                </div>
              )
            })}
          </div>

          <div className="flex gap-4 text-white text-xl">
            <button
              className="hover:scale-125"
              aria-label="membro anterior"
              onClick={() => swiper.slidePrev()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="hover:scale-125"
              aria-label="próximo membro"
              onClick={() => swiper.slideNext()}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
