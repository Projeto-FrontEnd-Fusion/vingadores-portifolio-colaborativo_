import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from '../NavLinks/NavLinks.tsx';

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between p-6">
      <div>
        <img
          src="/assets/logotipo_frontend_fusion.png"
          alt="Logotipo Frontend Fusion"
          className="z-50 relative"
        />
      </div>

      <button
        className="z-[50] lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <CloseIcon fontSize="large" className="text-white" />
        ) : (
          <MenuIcon fontSize="large" className="text-white" />
        )}
      </button>

      <div
        className={`absolute lg:relative top-0 left-0 w-full lg:w-auto lg:h-auto bg-[#1C1A40] lg:bg-transparent transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } lg:translate-y-0 lg:flex lg:items-center`}
      >
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}

export default Navbar;