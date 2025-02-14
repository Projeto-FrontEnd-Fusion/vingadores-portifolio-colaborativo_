import { createContext } from "react";
import { Dispatch } from "react";

interface INavbarContext {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean> | (() => void);
}

const NavbarContext = createContext({
  isOpen: false,
  setIsOpen: () => { }
} as INavbarContext)

export default NavbarContext

