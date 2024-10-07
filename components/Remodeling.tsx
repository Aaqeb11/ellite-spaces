import React from "react";
import Image from "next/image";
import remod1 from "../public/remod1.jpeg";
import remod2 from "../public/remod2.jpeg";
import Service from "../public/Services.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Remodeling = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col gap-[2vh]">
      {/* Header Section */}
      <div className="flex items-center justify-center w-full md:border-y-[1px] md:border-[#C4C4C4]">
        <p className="md:text-6xl text-4xl p-6 text-center">REMODELING</p>
      </div>

      {/* Carousel Section - Desktop */}
      <div className="md:block hidden flex-1 flex items-center justify-center">
        <div className="w-full max-w-[80%] mx-auto">
          <Slider {...carouselSettings}>
            <div className="flex justify-center items-center px-4">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={Service}
                  alt="about us1"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>

            <div className="flex justify-center items-center px-4">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={remod1}
                  alt="about us1"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>

            <div className="flex justify-center items-center px-4">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={remod2}
                  alt="about us1"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Carousel Section - Mobile */}
      <div className="md:hidden block w-full">
        <Slider {...carouselSettings}>
          <div className="flex justify-center items-center px-4">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={remod2}
                alt="projects"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>

          <div className="flex justify-center items-center px-4">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={remod1}
                alt="projects"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>

          <div className="flex justify-center items-center px-4">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={Service}
                alt="projects"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
