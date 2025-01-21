import React, { useRef, useState } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (activeIndex < childrenArray.length - 1) {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      const scrollPosition = index * cardWidth - (carouselRef.current.offsetWidth / 2 - cardWidth / 2);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-[80%]">
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-hidden overflow-y-hidden p-4 snap-x snap-mandatory justify-center"
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`snap-center shrink-0 w-[260px] transition-transform duration-300 ${
                index === activeIndex
                  ? "scale-110 opacity-100 bg-[#1A1756]"
                  : "scale-100 opacity-60 bg-[#1A1756] dark:bg-[#2A2A2A]"
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