import React, { Dispatch } from 'react'
import { clsx } from 'clsx'
import { Button } from '../Button/Button'

interface NavLinksProps {
  isOpen: boolean,
  setIsOpen: Dispatch<boolean>
}

const NavLinks = ({ isOpen, setIsOpen }: NavLinksProps) => {
  const baseClass = 'bg-[#1C1A40] absolute top-0 left-0 flex flex-col h-lvh w-screen transition-all duration-1000 ease-in-out mobile-nav:flex-row nav:absolute mobile-nav:absolute'
  const openClass = 'max-h-lvh touch-none'
  const closedClass = 'max-h-0 overflow-hidden mobile-nav:relative mobile-nav:h-fit mobile-nav:max-h-fit mobile-nav:w-fit mobile-nav:bg-transparent'

  return (
    <ul
      className={clsx(baseClass, { [openClass]: isOpen, [closedClass]: !isOpen })}
    >
      <li className="m-3 mt-28 decoration-2 md:px-6 md:p-0 mobile-nav:mt-auto">
        <a
          className={`
          text-[#26EEEF] 
          ml-2 
          transition-colors
          duration-500
          hover:text-[#1AB8C8]
          active:text-[#1A9B9D]
          mobile-nav:text-gray-50 
          mobile-nav:hover:underline 
          mobile-nav:underline-offset-8 
          mobile-nav:decoration-2 
          mobile-nav:ease-in-out
        `}
          href="#equipes"
        >
          Equipes
        </a>
        <hr className="mt-2 border-[#26EEEF] mobile-nav:hidden" />
      </li>
      <li className="m-3">
        <a
          className={`
          text-[#26EEEF] 
          ml-2 
          transition-colors
          duration-500
          hover:text-[#1AB8C8]
          active:text-[#1A9B9D]
          mobile-nav:text-gray-50 
          mobile-nav:hover:underline 
          mobile-nav:underline-offset-8 
          mobile-nav:decoration-2 
          mobile-nav:ease-in-out
        `}
          href="#projetos"
        >
          Projetos
        </a>
        <hr className="mt-2 border-[#26EEEF] mobile-nav:hidden" />
      </li>
      <li className="m-3">
        <a
          className={`
          text-[#26EEEF] 
          ml-2 
          transition-colors
          duration-500
          hover:text-[#1AB8C8]
          active:text-[#1A9B9D]
          mobile-nav:text-gray-50 
          mobile-nav:hover:underline 
          mobile-nav:underline-offset-8 
          mobile-nav:decoration-2 
          mobile-nav:ease-in-out
          `}
          href="#tecnologias"
        >
          Tecnologias
        </a>
        <hr className="mt-2 border-[#26EEEF] mobile-nav:hidden" />
      </li>
      <li className="m-3 self-center">
        <Button setIsOpen={setIsOpen} type={'button'} />
      </li>
    </ul>

  )
}

export default NavLinks
