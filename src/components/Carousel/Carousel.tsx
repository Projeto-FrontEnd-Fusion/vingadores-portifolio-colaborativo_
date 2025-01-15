import React, { useState } from 'react';
import { members } from '../Database';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? members.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === members.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentMember = members[currentIndex];

    return (
        <div className="bg-gradient-to-r from-[#1A175699] via-[#646DF038] to-[#1A175699] relative w-full max-w-xs mx-auto p-4 rounded-lg">
            <img 
                src={currentMember.photo}
                alt={currentMember.name}
                className="w-24 h-24 mx-auto rounded-full" 
            />
            <h2 className="text-xl text-white font-semibold mt-4 text-center">
                {currentMember.name}
            </h2>
            <p className="text-white text-center">{currentMember.role}</p>

            <div className="flex justify-center mt-4 space-x-2">
                {currentMember.technologies.map((tech, index) => (
                    <img
                        key={index}
                        src={tech}
                        alt="Technology"
                        className="w-8 h-7 object-contain"  // Definindo o tamanho dos ícones
                    />
                ))}
            </div>

            <div className="flex justify-center space-x-4 mt-4">
                {currentMember.socialLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={link.icon} 
                            alt={link.type} 
                            className="w-20 h-8 object-contain hover:opacity-75"  // Definindo o tamanho dos ícones
                        />
                    </a>
                ))}
            </div>

            {/* Botões de Navegação */}
            <div className="flex justify-center mt-6 space-x-4">
                <button
                    onClick={handlePrev}
                    className="bg-[#1A175699] hover:bg-[#646DF038] text-white p-2 rounded-full"
                >
                    {'<'}
                </button>
                
                <button
                    onClick={handleNext}
                    className="bg-[#1A175699] hover:bg-[#646DF038] text-white p-2 rounded-full"
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Carousel;