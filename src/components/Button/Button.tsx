import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"a"> {
    isNavbar: boolean;
};

export const Button = ({ isNavbar, ...props } :  ButtonProps) => {
    return <a 
            {...props} 
            className={`bg-colorButton text-colorTextButton font-normal text-center transition duration-300 ease-in-out
                    hover:bg-[#23CFCE] 
                    active:bg-[#1A9998] 
                    ${isNavbar 
                        ? "w-[10.313rem] h-[2.563rem] rounded-[2.125rem] py-3 px-4 text-sm leading-[1.05rem]" 
                        : "w-[13.625rem] h-12 rounded-3xl py-3 px-8 text-xl leading-6"}`} 
            href="#formulario" 
            aria-label="Ir para o formulário de inscrição"
            >
                Inscreva-se aqui
            </a>;
};