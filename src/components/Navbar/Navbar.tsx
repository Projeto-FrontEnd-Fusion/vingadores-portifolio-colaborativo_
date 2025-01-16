import { useState } from 'react';
import { Button } from '../Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(): JSX.Element {

  const [isOpen, setisOpen] = useState<boolean>(false)

  return (
    <nav className="flex items-center justify-between">
      {/* Logotipo alinhado ao canto superior esquerdo */}
      <div className="">
        <img
          src="/assets/logotipo_frontend_fusion.png"
          alt="Logotipo Frontend Fusion"
          className="relative z-50 h-8 px-3" // Ajuste o tamanho conforme necessário
        />
      </div>

      <button className="relative z-50 md:hidden space-y-2 justify-end" onClick={() => setisOpen(!isOpen)}>
        {isOpen ?
          <CloseIcon fontSize="large" className="text-white" />
          : <MenuIcon fontSize="large" className="text-white" />}
      </button>

      {/* Links alinhados à direita */}
      <ul className={`${isOpen ? 'top-[80px]' : 'top-[-400px]'} 
                    absolute left-0 w-full
                    flex 
                    flex-col
                    items-center 
                    justify-end 
                    bg-[#0a0920]
                    md:static
                    md:flex-row
                    transition-all ease-in-out duration-500
                    `}>
        <li className="md:px-6 p-2 md:p-0">
          <a
            className="text-gray-50 hover:text-blue-300 hover:underline underline-offset-8 decoration-2 transition-colors duration-300 ease-in-out"
            href="#equipes"
          >
            equipes
          </a>
        </li>
        <li className="md:px-6 p-2 md:p-0">
          <a
            className="text-gray-50 hover:text-blue-300 hover:underline underline-offset-8 decoration-2 transition-colors duration-300 ease-in-out"
            href="#projetos"
          >
            projetos
          </a>
        </li>
        <li className="md:px-6 p-2 md:p-0">
          <a
            className="text-gray-50 hover:text-blue-300 hover:underline underline-offset-8 decoration-2 transition-colors duration-300 ease-in-out"
            href="#tecnologias"
          >
            tecnologias
          </a>
        </li>
        <li className="md:px-6 p-2 md:p-0">
          <Button isNavbar={true} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
