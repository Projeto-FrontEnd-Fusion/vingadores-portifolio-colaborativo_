import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from '../NavLinks/NavLinks.tsx';
import NavbarContext from '../../store/NavbarContext.ts';

function Navbar(): JSX.Element {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const value = { isOpen, setIsOpen }


  return (
    <NavbarContext.Provider value={value}>
      <nav className="flex items-center justify-between p-6">
        <div className="">
          <img
            src="/assets/logotipo_frontend_fusion.png"
            alt="Logotipo Frontend Fusion"
            className="z-50 relative"
          />
        </div>

        <button
          className="z-[50] hb:z-[-1] hb:absolute hb:hidden"
          aria-expanded={isOpen}
          aria-label="menu"
          tabIndex={1}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            <CloseIcon fontSize="large" className="text-white" />
            : <MenuIcon fontSize="large" className="text-white" />}
        </button>

        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
