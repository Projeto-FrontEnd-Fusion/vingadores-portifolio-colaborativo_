import { ComponentProps, Dispatch, useContext } from "react";
import clsx from "clsx"
import NavbarContext from "../../store/NavbarContext";

interface ButtonProps extends ComponentProps<"a"> {
  setIsOpen?: Dispatch<boolean>;
  isNavbar: boolean
}

export const Button = ({ isNavbar, ...props }: ButtonProps) => {
  const mobileSectionPresentationClasses = "bg-fusion-l-blue font-normal hover:bg-fusion-l-blue-hover active:bg-fusion-l-blue-active text-fusion-d-blue hover:text-fusion-d-blue"
  const { setIsOpen } = useContext(NavbarContext)

  return (
    <a
      {...props}
      className={clsx(`register-button`, {
        [mobileSectionPresentationClasses]: !isNavbar
      })}
      href="#formulario"
      aria-label="Ir para o formulário de inscrição"
      onClick={() => setIsOpen ? setIsOpen(false) : {}}
    >
      Inscreva-se aqui
    </a>
  );
};
