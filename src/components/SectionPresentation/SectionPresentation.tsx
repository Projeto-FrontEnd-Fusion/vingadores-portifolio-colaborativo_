import { Button } from "../Button/Button";

const SectionPresentation = () => {
  return (
    <section className="text-white flex items-center flex-col gap-11 px-1 py-11
                            lg:flex-row lg:items-start lg:px-11 lg:pt-24 lg:pb-44 lg:gap-24"
    >
      <div className="flex flex-col gap-8 items-center px-2
                            lg:w-1/2 lg:px-0"
      >
        <p className="font-presentation text-base font-normal leading-5 text-center">MEET THE</p>
        <h1>
          <img src="/assets/FRONTENDFUSION_2.png" alt="Frontend Fusion" />
        </h1>
        <p className="font-fusion text-sm font-normal leading-5 text-center
                              lg:text-base lg:leading-6"
        >Junte-se a nós como voluntário e colabore na criação de uma experiência de aprendizado inovadora para tecnologias web</p>
        <Button isNavbar={false} />
      </div>

      <div className="flex flex-col gap-4
                            lg:w-1/2"
      >
        <h2 className="text-[#646DF0] font-fusion text-[2rem] font-medium leading-[3rem] text-center
                              lg:text-left lg:text-[2.5rem] lg:leading-[3rem] lg:tracking-wide"
        >O que é o Frontend Fusion</h2>
        <p className="w-11/12 font-fusion text-base font-normal text-center
                              lg:text-left"
        >Nossa missão é a criação de uma plataforma de aprendizagem em desenvolvimento backend e frontend gratuita e acessível para todos. Desde 2023, nosso voluntariado já alcançou números incríveis.</p>

        <div className="w-fit flex flex-col gap-12 pt-16 justify-center self-center lg:pt-6 min-[610px]:max-lg:flex-row lg:self-start ">
          <div className="flex gap-6 items-center justify-start sm:max-lg:justify-center">
            <p className="font-fusion text-2xl font-bold leading-9">+100</p>
            <p className="font-fusion text-base font-normal">Voluntários ativos no projeto</p>
          </div>

          <div className="flex gap-6 items-center sm:max-lg:justify-center">
            <p className="font-fusion text-2xl font-bold leading-9 text-center">+300</p>
            <p className="font-fusion text-base font-normal leading-6 text-left">Projetos entregues</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPresentation;
