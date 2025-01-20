import React, { useState } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < childrenArray.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-auto">
        <div className="flex gap-4 overflow-x-hidden p-4 snap-x snap-mandatory justify-center">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`snap-center shrink-0 transition-transform duration-300 ${
                index === activeIndex
                  ? "opacity-100 bg-[#1A1756]" 
                  : "opacity-60 bg-[#1A1756] dark:bg-[#2A2A2A]"
              }`}
            >
              {React.cloneElement(child as React.ReactElement, {
                handlePrev,
                handleNext,
                activeIndex,
                totalCards: childrenArray.length,
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;