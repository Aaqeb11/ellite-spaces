import React from "react";
import Image from "next/image";
import Aboutus from "../public/Aboutus.jpeg";
import { useRouter } from "next/navigation";

export const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="flex md:flex-row flex-col mt-20 md:mt-0 gap-4 md:gap-0">
      <p className="text-4xl text-center block md:hidden">ABOUT US</p>
      <div className="w-full md:border-y-[1px] md:border-[#C4C4C4] md:mt-10 flex items-center jusitfy-center border-r-[1px]">
        <Image
          src={Aboutus}
          alt="about us"
          className="md:px-14 md:py-2 md:h-[90%] p-6"
        />
      </div>
      <div className="w-full md:border-y-[1px] md:border-[#C4C4C4] md:mt-10 flex flex-col gap-16">
        <div className="hidden md:block">
          <p className="text-6xl p-6 border-b-[1px] border-[#C4C4C4]">
            ABOUT US
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 p-6">
          <p>
            At EliteSpaces, we specialize in transforming homes through expert
            kitchen and bathroom renovations, as well as stunning home
            additions. With a track record of over 100 successful projects, we
            take pride in creating functional, beautiful spaces tailored to our
            clients' unique needs and lifestyles.
          </p>
          <p>
            From concept to completion, our team of experienced professionals is
            dedicated to delivering top-quality craftsmanship and exceptional
            service on every project. Whether you’re looking to upgrade your
            kitchen, refresh your bathroom, or expand your living space,
            EliteSpaces is committed to making your vision a reality.
          </p>
          <div className="">
            <button
              className="border border-gray-300 px-6 py-2 rounded- text-md font-medium bg-[#D72323] text-white font-bold hover:border-[#D72323] hover:bg-white hover:text-[#D72323] transition duration-300"
              onClick={() => router.push("#contact")}
            >
              FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
