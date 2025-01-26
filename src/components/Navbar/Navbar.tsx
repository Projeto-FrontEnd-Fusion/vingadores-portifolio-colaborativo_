import { useState } from 'react';
import { Button } from '../Button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from '../NavLinks/NavLinks.tsx';

function Navbar(): JSX.Element {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className="flex items-center justify-between p-6">
      <div className="">
        <img
          src="/assets/logotipo_frontend_fusion.png"
          alt="Logotipo Frontend Fusion"
          className="z-50 relative"
        />
      </div>

      <button className="z-[50] mobile-nav:z-[-1] mobile-nav:absolute" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ?
          <CloseIcon fontSize="large" className="text-white" />
          : <MenuIcon fontSize="large" className="text-white" />}
      </button>

      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Navbar;
