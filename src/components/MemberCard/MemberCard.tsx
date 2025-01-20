type MemberCardProps = {
  photo: string;
  name: string;
  role: string;
  linkedin: string;
  github: string;
  handlePrev: () => void;
  handleNext: () => void;
  activeIndex: number;
  totalCards: number;
};

const MemberCard = ({
  photo,
  name,
  role,
  linkedin,
  github,
  handlePrev,
  handleNext,
  activeIndex,
  totalCards,
}: MemberCardProps) => {
  return (
    <div className="bg-[#1A175699] shadow-none rounded-lg p-6 w-full max-w-sm mx-auto transition-all duration-500 ease-in-out transform hover:scale-105">
      <img
        src={photo || "https://github.com/membro"}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-all duration-300 ease-in-out transform hover:scale-110"
      />

      <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="font-fusion text-bold text-white text-center">{name}</span>
        <span className="text-sm text-white mb-4">{role}</span>
      </div>

      <div className="flex flex-row justify-center space-x-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-md px-3 py-1 text-blue-600 text-sm hover:underline max-w-[120px] text-center truncate transition-all duration-300 ease-in-out transform hover:scale-105"
          aria-label={`LinkedIn profile of ${name}`}
        >
          LinkedIn
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-md px-3 py-1 text-gray-800 text-sm hover:underline max-w-[120px] text-center truncate transition-all duration-300 ease-in-out transform hover:scale-105"
          aria-label={`GitHub profile of ${name}`}
        >
          GitHub
        </a>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`bg-[#1A175699] text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform ${
            activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1A175699] hover:scale-105"
          }`}
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === totalCards - 1}
          className={`bg-[#1A175699] text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform ${
            activeIndex === totalCards - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#1A175699] hover:scale-105"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MemberCard;