
const Footer = () => {
    return (

        <footer className="flex flex-col p-6 pb-24">
            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex justify-between items-end">
                <nav className="flex items-center space-x-6">
                    <img src="/assets/logotipo_frontend_fusion.png" alt="Logotipo Frontend Fusion" />
                    <ul className="flex flex-row space-x-4">
                        <li>
                            <a href="mailto:projetofrontendfusion@gmail.com" className="text-fusion-links-rodape">Contato</a>
                        </li>
                        <li>
                            <a href="#" className="text-fusion-links-rodape">Política de Privacidade</a>
                        </li>
                    </ul>
                </nav>

                <span className="text-fusion-rodape-redes-sociais self-end">
                    Acompanhe nossas redes sociais
                </span>
                <ul className="flex space-x-4 mt-2">
                    <li>
                        <a href="https://www.linkedin.com/company/comunidade-frontend-fusion/" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape">
                            <i className="devicon-linkedin-plain text-blue-600"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Projeto-FrontEnd-Fusion" target="_blank" rel="noopener noreferrer" className="text-fusion-links-rodape">
                            <i className="devicon-github-original text-white"></i>
                        </a>
                    </li>
                </ul>

            </div >

        </footer >

    );
}

export default Footer;