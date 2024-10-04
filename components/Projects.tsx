import React from "react";
import { useRouter } from "next/navigation";
import project1 from "../public/project1.jpeg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";
import Image from "next/image";
export const Projects = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between gap-[10vh]  md:border-y-[1px] md:border-[#C4C4C4] ">
      <div className="flex flex-col gap-4  items-center justify-center">
        <p className="md:text-6xl text-4xl p-6 text-center">OUR PROJECTS</p>
        <p className="text-[#7C7C7C] text-xl font-normal mb-5 text-center">
          A one stop solution for all your renovation needs
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

      <div className="flex md:flex-row flex-col gap-6  md:px-10 px-4 pb-10">
        <div>
          <Image src={project1} alt="projects" className="h-[100%] " />
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <Image src={project2} alt="projects" className=" h-[100%]" />
          <Image src={project3} alt="projects" className=" h-[100%]" />
        </div>
      </div>
    </div>
  );
};
