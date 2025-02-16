const Footer = () => {
    return (
        <footer className="flex flex-col p-6">
            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex justify-between items-end">
                <nav className="flex items-center space-x-6">
                    <img src="/assets/logotipo_frontend_fusion.png" alt="Logotipo Frontend Fusion" />
                    <ul className="flex flex-row space-x-4">
                        <li>
                            <a href="#" className="text-fusion-links-rodape">Contato</a>
                        </li>
                        <li>
                            <a href="#" className="text-fusion-links-rodape">Política de Privacidade</a>
                        </li>
                    </ul>
                </nav>

                <span className="text-fusion-rodape-redes-sociais self-end">
                    Acompanhe nossas redes sociais
                </span>
            </div>
        </footer>        
    );
}

export default Footer;