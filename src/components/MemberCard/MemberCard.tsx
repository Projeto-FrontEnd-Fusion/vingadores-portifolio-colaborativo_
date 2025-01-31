interface MemberCardProps {
  photo: string;
  name: string;
  role: string;
  linkedin?: string;
  github?: string;

}

const MemberCard = ({
  photo,
  name,
  role,
  linkedin,
  github,
}: MemberCardProps) => {
  return (
    <div className="bg-[#1A175699] shadow-none rounded-lg p-6 h-80 w-64 mx-4 transition-all duration-500 ease-in-out">
      <img
        src={photo || "https://github.com/membro"}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-all duration-300 ease-in-out transform hover:scale-110"
        alt={`Foto de ${name}`}
      />
      <div className="flex flex-col items-center justify-center w-full">
        <span className="font-fusion text-bold text-white text-center">{name}</span>
        <span className="text-sm text-white mb-4">{role}</span>
      </div>

      <div className="flex flex-row justify-center space-x-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-md px-3 py-1 text-blue-600 text-sm hover:underline max-w-[120px] text-center truncate transition-all duration-300 ease-in-out transform hover:scale-105"
          aria-label={`Perfil do Linkedin de ${name}`}
        >
          LinkedIn
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-md px-3 py-1 text-gray-800 text-sm hover:underline max-w-[120px] text-center truncate transition-all duration-300 ease-in-out transform hover:scale-105"
          aria-label={`Perfil do Github de ${name}`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
