const Footer = () => {
    return (
        <footer className="flex flex-col p-6 pb-24">
            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex justify-between items-center">
                <nav className="flex items-center space-x-6">
                    <img src="/assets/logotipo_frontend_fusion.png" alt="Logotipo Frontend Fusion" />
                    <ul className="flex flex-row space-x-4">
                        <li>
                            <a href="mailto:projetofrontendfusion@gmail.com" className="text-fusion-links-rodape">Contato</a>
                        </li>
                        <li>
                            <a href="https://seasoned-toucan-88d.notion.site/Pol-tica-de-Privacidade-do-Projeto-Frontend-Fusion-dd0ee78762374f89a395a54ac20407fe" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape">Política de Privacidade</a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-4">
                    <span className="text-fusion-rodape-redes-sociais">Acompanhe nossas redes sociais</span>
                    <a href="https://www.linkedin.com/company/comunidade-frontend-fusion/" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape">
                        <i className="devicon-linkedin-plain text-[#646DF0] text-2xl"></i>
                    </a>
                    <a href="https://github.com/Projeto-FrontEnd-Fusion" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape">
                        <i className="devicon-github-original text-[#646DF0] text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;