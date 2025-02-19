const Footer = () => {
    return (
        <footer className="flex flex-col p-6 pb-24">
            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex justify-between items-center">
                <nav className="flex items-center space-x-6" aria-label="Navegação principal">
                    <img src="/assets/logotipo_frontend_fusion.png" alt="Logotipo Frontend Fusion" />
                    <ul className="flex flex-row space-x-4">
                        <li>
                            <a href="mailto:projetofrontendfusion@gmail.com" className="text-gray-400">Contato</a>
                        </li>
                        <li>
                            <a href="https://seasoned-toucan-88d.notion.site/Pol-tica-de-Privacidade-do-Projeto-Frontend-Fusion-dd0ee78762374f89a395a54ac20407fe" target="_blank" rel="noopener noreferrer" className="text-gray-400">Política de Privacidade</a>
                        </li>
                    </ul>
                </nav>
                <section className="flex items-center space-x-4" aria-label="Redes sociais">
                    <span className="text-gray-400">Acompanhe nossas redes sociais</span>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="https://www.linkedin.com/company/comunidade-frontend-fusion/" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape" aria-label="LinkedIn">
                                <i className="devicon-linkedin-plain text-fusion-purple text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Projeto-FrontEnd-Fusion" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape" aria-label="GitHub">
                                <i className="devicon-github-original text-fusion-purple text-2xl"></i>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;