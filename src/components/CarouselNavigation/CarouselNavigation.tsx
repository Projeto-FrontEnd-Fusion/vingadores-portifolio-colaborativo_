import clsx from 'clsx'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

interface CarouselNavigationProps {
  margin?: boolean
  label: string
}


const CarouselNavigation = ({ margin, label }: CarouselNavigationProps) => {

  const swiper = useSwiper()
  return (
    <div className={clsx('flex w-full gap-4 justify-center text-2xl text-white', { 'mt-8': margin })}>
      <button
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        aria-label={`${label} anterior`}
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        aria-label={`próximo ${label}`}
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  )
}

export default CarouselNavigation
