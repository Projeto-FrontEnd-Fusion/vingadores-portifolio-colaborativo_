import { ComponentProps, Dispatch } from "react";

interface ButtonProps extends ComponentProps<"a"> {
  setIsOpen: Dispatch<boolean>
};

export const Button = ({ setIsOpen, ...props }: ButtonProps) => {

  return (
    <a
      {...props}
      className="
      bg-transparent 
      text-[#26EEEF] 
      font-bold
      text-lg
      text-center 
      transition-colors
      duration-500
      hover:text-[#1AB8C8]
      active:text-[#1A9B9D]
      ease-in-out 
      w-fit 
      h-fit 
      rounded-[2.125rem] 
      py-3 
      px-4 
      mobile-nav:text-sm
      mobile-nav:bg-[#26EEEF]
      mobile-nav:text-[#1A1756] 
      mobile-nav:font-normal 
      hover:mobile-nav:bg-[#1CC4D4] 
      active:mobile-nav:bg-[#1A9998] 
      "
      href="#formulario"
      aria-label="Ir para o formulário de inscrição"
      onClick={() => { setIsOpen(false) }}
    >
      Inscreva-se aqui
    </a>
  );
};

