import { Button } from '../Button/Button';

function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full items-center justify-between">
      {/* Logotipo alinhado ao canto superior esquerdo */}
      <div className="absolute top-0 left-0 p-4">
          <img
            src="/assets/logotipo_frontend_fusion.png"
            alt="Logotipo Frontend Fusion"
            className="h-8 px-3" // Ajuste o tamanho conforme necessário
          />
      </div>

      {/* Links alinhados à direita */}
      <ul className="flex h-full items-center space-x-6 ml-auto">
        <li className="relative">
          <a
            className="text-gray-50 inline-flex relative transition-colors duration-300 ease-in-out hover:text-blue-300 
                       after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                       after:h-[2px] after:bg-blue-300 after:transition-transform after:duration-300 
                       after:w-0 hover:after:w-full"
            href="#equipes"
          >
            equipes
          </a>
        </li>
        <li className="relative">
          <a
            className="text-gray-50 inline-flex relative transition-colors duration-300 ease-in-out hover:text-blue-300 
                       after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                       after:h-[2px] after:bg-blue-300 after:transition-transform after:duration-300 
                       after:w-0 hover:after:w-full"
            href="#projetos"
          >
            projetos
          </a>
        </li>
        <li className="relative">
          <a
            className="text-gray-50 inline-flex relative transition-colors duration-300 ease-in-out hover:text-blue-300 
                       after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                       after:h-[2px] after:bg-blue-300 after:transition-transform after:duration-300 
                       after:w-0 hover:after:w-full"
            href="#tecnologias"
          >
            tecnologias
          </a>
        </li>
        <li>
          <Button isNavbar={true}/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
