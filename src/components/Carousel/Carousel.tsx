import React, { useEffect, useState, ReactNode } from "react";

type CarouselProps = {
  children: []
};

const Carousel = ({ children }) => {
  const items = React.Children.toArray(children)
  const totalItems = React.Children.count(children)
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeCard = (direction: number): void => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction
      if (newIndex < 0) {
        return totalItems - 1
      }
      if (newIndex >= totalItems) {
        return 0
      }
      return newIndex
    })
  }

  return (
    <div className="flex overflow-x-hidden justify-center h-fit py-10">
      <button onClick={() => { changeCard(-1) }} className={`relative z-[1] text-white`}>&lt;</button>
      <div className="flex transition-transform duration-500">
        {items.map((item, index) => {
          return (
            <div key={index} className={`relative ${index === currentIndex ? 'flex [&>div]:scale-110' : ''}`}>
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={() => { changeCard(1) }} className={`relative text-white z-[1]`}>&gt;</button>
    </div>
  );
};

export default Carousel;

