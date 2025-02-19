const Footer = () => {
    return (
        <footer className="p-6 pb-24">
            <hr className="border-t border-gray-300 mb-4" />

            <nav className="flex flex-col md:flex-row justify-between w-full items-start md:items-center" aria-label="Rodapé">


                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto">
                    <img src="/assets/logotipo_frontend_fusion.png" alt="Logotipo Frontend Fusion" className="w-40 self-start md:self-auto" />

                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 self-start md:self-auto">
                        <li>
                            <a href="mailto:projetofrontendfusion@gmail.com" className="text-gray-400" target="_blank" rel="noopener noreferrer" aria-label="E-mail">Contato</a>
                        </li>
                        <li>
                            <a href="https://seasoned-toucan-88d.notion.site/Pol-tica-de-Privacidade-do-Projeto-Frontend-Fusion-dd0ee78762374f89a395a54ac20407fe" target="_blank" rel="noopener noreferrer" className="text-gray-400">Política de Privacidade</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 gap-2 md:gap-4">
                    <span className="text-gray-400 text-left">Acompanhe nossas redes sociais</span>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://www.linkedin.com/company/comunidade-frontend-fusion/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="devicon-linkedin-plain text-fusion-purple text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Projeto-FrontEnd-Fusion" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="devicon-github-original text-fusion-purple text-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </footer>
    );
}

export default Footer;
