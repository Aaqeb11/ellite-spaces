import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const router = useRouter();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      review:
        "We were trying to decide between moving or remodeling and... remodeling won! Our new kitchen is so beautiful! It's so fund to cook in and just spend time in. The work done was high quality and maximized the potential of the space... ",
      name: "Susan1",
    },
    {
      review:
        "We were trying to decide between moving or remodeling and... remodeling won! Our new kitchen is so beautiful! It's so fund to cook in and just spend time in. The work done was high quality and maximized the potential of the space... ",
      name: "Susan2",
    },
    {
      review:
        "We were trying to decide between moving or remodeling and... remodeling won! Our new kitchen is so beautiful! It's so fund to cook in and just spend time in. The work done was high quality and maximized the potential of the space... ",
      name: "Susan3",
    },
    {
      review:
        "We were trying to decide between moving or remodeling and... remodeling won! Our new kitchen is so beautiful! It's so fund to cook in and just spend time in. The work done was high quality and maximized the potential of the space... ",
      name: "Susan4",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);
  const remainingTestimonials = testimonials.filter(
    (_, index) => index !== currentTestimonialIndex
  );

  return (
    <div className="flex md:flex-row flex-col  gap-[4vh]">
      <p className="text-4xl text-center block md:hidden">TESTIMONIALS</p>
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:border-y-[1px] md:border-[#C4C4C4] md:mt-10 flex mx border-r-[1px] hidden md:block">
          <div className="flex flex-col gap-[12vh] hidden md:flex w-full">
            <div className="p-6">
              <p className="text-6xl ">TESTIMONIALS</p>
            </div>
            <div className="flex flex-col gap-8 p-6 min-h-[300px]">
              <div key={currentTestimonialIndex} className="animate-fade-in">
                <p className="text-3xl font-medium mb-4">
                  "{testimonials[currentTestimonialIndex].review}"
                </p>
                <p>{testimonials[currentTestimonialIndex].name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:border-y-[1px] md:border-[#C4C4C4] md:mt-10 flex flex-col gap-16 hidden md:block">
          <div className="flex flex-col gap-6 md:gap-10 p-6">
            {remainingTestimonials.map((review, index) => (
              <div key={index} className="flex flex-col gap-4">
                <p className="text-xl font-light">{review.review}</p>
                <p>{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden w-full px-4 ">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          pauseOnHover
          className="md:hidden"
          itemClass="px-2"
        >
          {testimonials.map((review, index) => (
            <div key={index} className="border-[1px] border-[#C4C4C4] h-full">
              <div className="p-6 flex flex-col items-center">
                <p className="text-xl mb-4 italic font-medium">{`"${review.review}"`}</p>
                <p className="text-md">{review.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
