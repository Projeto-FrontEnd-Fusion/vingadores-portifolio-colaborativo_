import React from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="flex w-full justify-end items-center">
      <ul className="flex h-full items-center">
        <li>
          <a className='px-4 text-gray-50' href="#equipes">equipes</a>
        </li>
        <li>
          <a className='px-4 text-gray-50' href="#projetos">projetos</a>
        </li>
        <li>
          <a className="px-4 text-gray-50" href="#tecnologias">tecnologias</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
