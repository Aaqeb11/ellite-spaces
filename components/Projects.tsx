import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import project1 from "../public/project1.jpeg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

export const Projects = () => {
  const router = useRouter();

  // State to track whether the component has mounted
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Media query hook to detect if it's mobile view
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const images = [project1, project2, project3];

  // Settings for the Slick slider in mobile view
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Avoid rendering content until the component is mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-between gap-[10vh] md:border-y-[1px] md:border-[#C4C4C4]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="md:text-6xl text-4xl p-6 text-center">OUR PROJECTS</p>
        <p className="text-[#7C7C7C] text-xl font-normal mb-5 text-center">
          A one stop solution for all your renovation needs
        </p>
        <div>
          <button
            className="border border-gray-300 px-6 py-2 rounded- text-md font-medium bg-[#D72323] text-white font-bold hover:border-[#D72323] hover:bg-white hover:text-[#D72323] transition duration-300"
            onClick={() => router.push("#Form")}
          >
            FREE CONSULTATION
          </button>
        </div>
      </div>

      <div className="md:px-10 px-4 pb-10 w-full">
        {/* Mobile View: Show Slick Carousel */}
        {isMobile ? (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify w-[300px] h-[300px] items-center">
                <Image
                  src={image}
                  alt={`project-${index}`}
                  className="h-[100%] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        ) : (
          // Desktop View: Static layout of images
          <div className="flex md:flex-row flex-col gap-6">
            <div>
              <Image src={project1} alt="projects" className="h-[100%] w-full object-cover" />
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <Image src={project2} alt="projects" className="h-[100%] w-full object-cover" />
              <Image src={project3} alt="projects" className="h-[100%] w-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
