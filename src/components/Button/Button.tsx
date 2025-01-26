import { ComponentProps, Dispatch } from "react";

interface ButtonProps extends ComponentProps<"a"> {
  setIsOpen: Dispatch<boolean>;
}

export const Button = ({ setIsOpen, ...props }: ButtonProps) => {
  return (
    <a
      {...props}
      className="register-button"
      href="#formulario"
      aria-label="Ir para o formulário de inscrição"
      onClick={() => setIsOpen(false)}
    >
      Inscreva-se aqui
    </a>
  );
};
