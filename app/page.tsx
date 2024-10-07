"use client";
import React from "react";
import Image from "next/image";
import landing_desktop from "../public/landing_desktop.jpg";
import landing_mobile from "../public/mobile_landing.jpg";
import { useRouter } from "next/navigation";
import { AboutUs } from "@/components/AboutUs";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Remodeling } from "@/components/Remodeling";
import { Testimonials } from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";

const page = () => {
  const router = useRouter();
  return (
    <main className="mt-24 sm:mt-[100px] md:mt-[120px] lg:mt-[80px]">
      {" "}
      {/* Adjusted padding-top to match navbar height */}
      <section
        id="Home"
        className="flex flex-col gap-10 items-center justify-center md:min-h-screen  px-4"
      >
        <p className="lg:text-[130px] text-center text-5xl md:text-6xl ">
          ELITE SPACES
        </p>
        <p className="text-[#7C7C7C] text-xl font-normal mb-5 text-center">
          A one stop solution for all your renovation needs
        </p>
        <div className="lg:hidden block">
          <button
            className="border border-gray-300 px-6 py-2 rounded- text-md font-medium bg-[#D72323] text-white font-bold hover:border-[#D72323] hover:bg-white hover:text-[#D72323] transition duration-300"
            onClick={() => router.push("#Form")}
          >
            FREE CONSULTATION
          </button>
        </div>
        <Image
          src={landing_desktop}
          alt="landing img"
          className="hidden md:block"
        />
        <Image src={landing_mobile} alt="landing img" className="md:hidden" />
      </section>
      <section className="min-h-screen mt-20">
        <AboutUs />
      </section>
      <section className="min-h-screen md:mt-20 mt-14">
        <Projects />
      </section>
      <section className="min-h-screen md:mt-20 mt-14">
        <Services />
      </section>
      <section className="md:mt-20 mt-14">
        <Remodeling />
      </section>
      <section className="md:mt-20 mt-14">
        <Testimonials />
      </section>
      <section className="md:mt-20 mt-14 flex flex-col gap-[4vh]"
      id="Form">
        <p className="md:text-6xl text-4xl flex justify-center">
          CONTACT US NOW
        </p>
        <AppointmentForm />
      </section>
    </main>
  );
};

export default page;
