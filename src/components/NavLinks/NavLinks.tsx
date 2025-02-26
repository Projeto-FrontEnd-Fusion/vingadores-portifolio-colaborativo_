import { useContext } from 'react'
import { clsx } from 'clsx'
import { Button } from '../Button/Button'
import NavbarContext from '../../store/NavbarContext'

const NavLinks = () => {
  const baseClass = 'bg-[#1C1A40] absolute top-0 left-0 flex flex-col h-lvh w-screen transition-all duration-1000 ease-in-out mobile-nav:flex-row nav:absolute mobile-nav:absolute'
  const openClass = 'max-h-lvh touch-none'
  const closedClass = 'max-h-0 overflow-hidden mobile-nav:relative mobile-nav:h-fit mobile-nav:max-h-fit mobile-nav:w-fit mobile-nav:bg-transparent'
  const links = ['Equipes', 'Projetos', 'Tecnologias']

  const { isOpen } = useContext(NavbarContext)

  return (
    <ul
      className={clsx(baseClass, { [openClass]: isOpen, [closedClass]: !isOpen })}
    >
      {
        links.map((link) => {
          return (
            <li key={link} className={clsx("m-3 first:mt-28 decoration-2 mobile-nav:mt-auto transition-opacity duration-1000 ease-in-out mobile-nav:opacity-100 mobile-nav:first:mt-auto ",
              { 'opacity-100': isOpen, 'opacity-0': !isOpen })}>
              <a
                className={`
                text-fusion-l-blue
                ml-2 
                transition-colors
                duration-500
                hover:text-fusion-l-blue-hover
                active:text-fusion-blue-active
                mobile-nav:text-gray-50 
                mobile-nav:hover:underline 
                mobile-nav:underline-offset-8 
                mobile-nav:decoration-2 
                mobile-nav:ease-in-out
                `}
                href={`#${link}`}>
                {link}
              </a>
              <hr className="mt-2 border-fusion-l-blue mobile-nav:hidden" />
            </li>
          )
        })
      }
      <li className={clsx("m-3 self-center transition-opacity duration-1000 ease-in-out mobile-nav:opacity-100", { 'opacity-100': isOpen, 'opacity-0': !isOpen })}>
        <Button isNavbar={true} />
      </li>
    </ul>

  )
}

export default NavLinks
