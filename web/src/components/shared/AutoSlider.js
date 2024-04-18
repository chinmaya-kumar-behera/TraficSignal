import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function AutoSlider({ data }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, delay);

    return () => {
      resetTimeout();
    };
  }, [index, data]);

  return (
    <div className="mx-auto overflow-hidden w-full">
      <div className="relative">
        <div className="">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 p-1 backdrop-blur-md z-10 flex items-center justify-center rounded-full">
            <button className="sliderArrow left" onClick={prevSlide}>
              <MdKeyboardArrowLeft className="text-xl text-white" />
            </button>
          </div>
          <div
            className="whitespace-nowrap transition-transform ease-in-out duration-1000"
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {data.map((value, idx) => (
              <div
                className="inline-block h-[180px] w-full rounded"
                key={idx}
              >
                <img
                  src={value}
                  alt={value}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1 backdrop-blur-md z-10 flex items-center justify-center rounded-full">
            <button className="sliderArrow right" onClick={nextSlide}>
              <MdKeyboardArrowRight className="text-xl text-white" />
            </button>
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot ${index === idx ? "active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoSlider;
