
export function FormDescription() {
  return (
    <div className="w-2/3 p-4">
      <h2 className="text-white text-3xl font-fusion text-center lg:text-left">
        Inscreva-se agora
      </h2>

      <p className="text-white py-4 font-fusion text-center lg:text-left">
        Desenvolva suas habilidades trabalhando em prol do acesso à educação em tecnologia.
      </p>

      <p className="text-white font-fusion text-center lg:text-left">
        Durante nossa trajetória, nossos voluntários puderam se beneficiar de:
      </p>

      <div className="space-y-6 font-fusion-text py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 text-center lg:text-left">
          <span className="text-cyan-400 text-xl text-fusion font-bold">+100</span>
          <p className="text-white text-sm lg:text-base">
            horas de discussão e networking
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center md:space-x-4 text-center lg:text-left">
          <span className="text-cyan-400 text-xl sm:text-fusion font-bold">+50</span>
          <p className="text-white text-sm lg:text-base">
            mentorias de carreira gratuita
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center md:space-x-4 text-center lg:text-left">
          <span className="text-cyan-400 text-xl sm:text-fusion font-bold">+5</span>
          <p className="text-white text-sm lg:text-base">
            palestras e webinars
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormDescription;
