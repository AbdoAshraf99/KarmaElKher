import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://donate.worldvision.org/wp-content/uploads/2017/08/D200-0933-23_cmyk-1.jpg",
    },
    {
      url: "https://www.compassion.com/multimedia/make-a-donation-children-in-togo.jpg",
    },
    {
      url: "https://lemooria.org/wp-content/uploads/2022/04/Charity-donation-to-support-a-child-in-need-930x620.jpg",
    },
    {
      url: "https://childrenleftbehind.org/wordpress/wp-content/uploads/2015/12/home-banner-1.jpg",
    },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastIndex = currentIndex == slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const setSlideIndex = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full md:h-[450px] h-[250px] m-auto py-1 px-0 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-1xl bg-center bg-cover duration-500"
        ></div>
        {/* leftIcon */}
        <div className="hidden group-hover:block absolute top-[50%] left-5 cursor-pointer text-2xl">
          <BsChevronCompactLeft size={30} color="white" onClick={prevSlide} />
        </div>
        {/* rightIcon */}
        <div className="hidden group-hover:block absolute top-[50%] right-5 cursor-pointer text-2xl">
          <BsChevronCompactRight size={30} color="white" onClick={nextSlide} />
        </div>
        {/* dots */}

        <div className="flex justify-center items-center top-[90%] right-[50%] left-[50%] absolute">
          {slides.map((slides, slideIndex) => (
            <>
              <div key={slideIndex} className="cursor-pointer">
                {slideIndex == currentIndex ? (
                  <RxDotFilled size={50} color="teal" />
                ) : (
                  <RxDot
                    size={30}
                    color="teal"
                    onClick={() => {
                      setSlideIndex(slideIndex);
                    }}
                  />
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default SlideShow;
