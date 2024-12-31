import React from 'react';

function Navbar(): JSX.Element {
    return (
        <>
        <div className='text-right'>
            <nav>
                <a className='px-4' href="#equipes">equipes</a>
                <a className='px-4'
                href="#projetos">projetos</a>
                <a href="#tecnologias">tecnologias</a>
            </nav>
        </div>
        </>
    );
}

export default Navbar;
