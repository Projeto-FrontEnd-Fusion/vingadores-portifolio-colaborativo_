import { ComponentProps, Dispatch } from "react";
import clsx from "clsx"

interface ButtonProps extends ComponentProps<"a"> {
  setIsOpen?: Dispatch<boolean>;
  isNavbar: boolean
}

export const Button = ({ setIsOpen, isNavbar, ...props }: ButtonProps) => {
  const mobileSectionPresentationClasses = "bg-fusion-l-blue text-fusion-d-blue font-normal hover:bg-fusion-l-blue-hover active:bg-fusion-l-blue-active text-fusion-d-blue hover:text-fusion-d-blue"

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
