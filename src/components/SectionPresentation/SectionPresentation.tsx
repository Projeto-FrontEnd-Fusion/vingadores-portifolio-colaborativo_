import { Button } from "../Button/Button";

const SectionPresentation = () => {
    return (
        <section className="text-white flex items-center flex-col gap-[2.813rem] px-[0.313rem] py-[2.813rem]
                            md:flex-row md:items-start md:px-[2.844rem] md:pt-24 md:pb-[11.125rem] md:gap-24"
        >
            <div className="flex flex-col gap-8 items-center px-[0.656rem]
                            md:w-1/2 md:px-0"
            >
                <p className="font-presentation text-base font-normal leading-[1.2rem] text-center">MEET THE</p>
                <img src="/assets/FRONTENDFUSION_2.png"/>
                <p className="font-fusion text-[0.875rem] font-normal leading-[1.313rem] text-center
                              md:text-[0.938rem] md:leading-[1.406rem]"
                >Junte-se a nós como voluntário e colabore na criação de uma experiência de aprendizado inovadora para tecnologias web</p>
                <Button isNavbar={false}/>
            </div>

            <div className="flex flex-col gap-4 px-[1.594rem]
                            md:px-0 md:w-1/2"
            >
                <h2 className="text-[#646DF0] font-fusion text-[2rem] font-medium leading-[2.4rem] text-center
                              md:text-left md:text-[2.5rem] md:leading-[3rem]"
                >O que é o Frontend Fusion</h2>
                <p className="font-fusion text-base font-normal text-center
                              md:text-left"
                >Nossa missão é a criação de uma plataforma de aprendizagem em desenvolvimento backend e frontend gratuita e acessível para todos. Desde 2023, nosso voluntariado já alcançou números incríveis.</p>
                
                <div className="flex flex-col gap-12 pt-16
                                md:pt-6"
                >
                    <div className="flex gap-6 items-center">
                        <p className="font-fusion text-2xl font-bold leading-9 text-center">+100</p>
                        <p className="font-fusion text-base font-normal text-left">Voluntários ativos no projeto</p>
                    </div>

                    <div className="flex gap-6 items-center">
                        <p className="font-fusion text-2xl font-bold leading-9 text-center">+300</p>
                        <p className="font-fusion text-base font-normal leading-6 text-left">Projetos entregues</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionPresentation;
