type MemberCardProps = {
    photo: string;
    key: string;
    name: string;
    role: string;
    linkedin: string;
    github: string;
  };
  
  const MemberCard = ({ photo, name, role, linkedin, github }: MemberCardProps) => {
    return (
      <div className="bg-[#1A175699] shadow-md rounded-lg p-6 w-full max-w-sm mx-auto">
        <img
          src={photo || "https://github.com/membro"}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />

        <div className="flex flex-col items-center justify-center">
          <span className="font-fusion text-bold text-white text-center">{name}</span>
          <span className="text-sm text-white mb-4 justify-center">{role}</span>
        </div>
        
        <div className="flex flex-row justify-center space-x-2">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-md px-3 py-1 text-blue-600 text-sm hover:underline max-w-[120px] text-center truncate"
          >
            LinkedIn
          </a>
      
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-md px-3 py-1 text-gray-800 text-sm hover:underline max-w-[120px] text-center truncate"
          >
            GitHub
          </a>
        </div>
      </div>
    );
  };
  
  export default MemberCard;  