export function FormDescription() {
  return (
    <>
      <div className="p-4 md:p-8 lg:p-12">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-fusion text-center md:text-left">
          Inscreva-se agora
        </h1>

        <p className="text-white py-4 text-xs sm:text-sm md:text-base font-fusion text-center md:text-left">
          Desenvolva suas habilidades trabalhando em prol do acesso à educação em tecnologia.
        </p>

        <p className="text-white text-xs sm:text-sm md:text-base font-fusion text-center md:text-left">
          Durante nossa trajetória, nossos voluntários puderam se beneficiar de:
        </p>

        <div className="space-y-6 font-fusion-text py-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center md:text-left">
            <span className="text-cyan-400 text-xl sm:text-fusion font-bold">+100</span>
            <p className="text-white text-sm md:text-base">
              horas de discussão e networking
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center md:text-left">
            <span className="text-cyan-400 text-xl sm:text-fusion font-bold">+50</span>
            <p className="text-white text-sm md:text-base">
              mentorias de carreira gratuita
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center md:text-left">
            <span className="text-cyan-400 text-xl sm:text-fusion font-bold">+5</span>
            <p className="text-white text-sm md:text-base">
              palestras e webinars
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormDescription;
