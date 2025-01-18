type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4">
      {children}
    </div>
  );
};

export default Carousel;
