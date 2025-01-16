const Carousel = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A175699] via-[#646DF038] to-[#1A175699] relative w-full max-w-xs mx-auto p-4 rounded-lg">
      <img
        src="https://github.com/alvesmariadefatima.png"
        alt="Maria de Fátima Nunes Alves"
        className="w-24 h-24 mx-auto rounded-full"
      />
      <p className="text-xl text-white font-semibold mt-4 text-center">
        Maria de Fátima Nunes Alves
      </p>

      <p className="text-white text-center">Desenvolvedora Frontend</p>

      <div className="flex justify-center mt-4 space-x-2">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/typescript.png"
          alt="react"
          className="w-8 h-7 object-contain"
        />

        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/react.png"
          alt="react"
          className="w-8 h-7 object-contain"
        />

        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/tailwindcss.png"
          alt="tailwindcss"
          className="w-8 h-7 object-contain"
        />

        <img
          width="40"
          height="40"
          src="https://img.icons8.com/fluency/48/node-js.png"
          alt="nodejs"
          className="w-8 h-7 object-contain"
        />
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/alvesmariadefatima"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="Github Maria de Fátima Nunes Alves"
            className="w-20 h-8 object-contain hover:opacity-75"  // Definindo o tamanho dos ícones
          />
        </a>

        <a
          href="https://www.linkedin.com/in/maria-de-fatima-nunes-alves/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="Linkedin Maria de Fátima Nunes Alves"
            className="w-20 h-8 object-contain hover:opacity-75"  // Definindo o tamanho dos ícones
          />
        </a>
      </div>



      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => { }}
          className="bg-[#1A175699] hover:bg-[#646DF038] text-white p-2 rounded-full"
        >
          {'<'}
        </button>

        <button
          onClick={() => { }}
          className="bg-[#1A175699] hover:bg-[#646DF038] text-white p-2 rounded-full"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
