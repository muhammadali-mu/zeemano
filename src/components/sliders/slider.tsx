"use client";
import { useState } from "react";

const slides = [
  { src: "/images/slider/slider-1.webp", href: "/" },
  { src: "/images/slider/slider-2.webp", href: "/" },
  { src: "/images/slider/slider-3.webp", href: "/" },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlideHandller = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  const nextSlideHandller = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(() => slideIndex);
  };

  return (
    <div className="max-w-[752px] w-full h-80 relative m-5 rounded-xl overflow-hidden group transition-all">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
        className="w-full h-full bg-center bg-cover duration-500 "
      ></div>

      {/* Right Arrow */}
      <span
        role="button"
        className="hidden group-hover:flex items-center justify-center absolute top-[calc(50%-24px)] right-1 w-8 h-12 bg-slate-900 backdrop-filter backdrop-blur-md bg-opacity-25 backdrop-brightness-95 hover:bg-opacity-50 transition-all
         rounded"
        onClick={() => nextSlideHandller()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6667 3L22 12.3333L12.6667 21.6667M2 3L11.3333 12.3333L2 21.6667"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Left Arrow */}
      <span
        role="button"
        className="hidden group-hover:flex items-center justify-center absolute top-[calc(50%-24px)] left-1 w-8 h-12 bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 backdrop-brightness-95 hover:bg-opacity-50 transition-all
         rounded"
        onClick={() => prevSlideHandller()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3333 22L2 12.6667L11.3333 3.33333M22 22L12.6667 12.6667L22 3.33333"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="hidden group-hover:flex absolute w-auto h-6 justify-center items-center gap-2 px-6 rounded-xl bottom-2 right-[50%] translate-x-[50%] bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 backdrop-brightness-95 hover:bg-opacity-50 transition-all">
          {slides.map((slide, index) => (
            <span
              key={index}
              role="button"
              className={`block h-3 bg-slate-100  rounded-md transition-all ${
                currentSlide === index
                  ? "w-6 bg-white opacity-100"
                  : "w-3 opacity-75"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
