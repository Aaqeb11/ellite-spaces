import React from "react";
import Image from "next/image";
import Service from "../public/Services.jpeg";
import { useRouter } from "next/navigation";

export const Services = () => {
  const router = useRouter();
  return (
    <div className="flex md:flex-row flex-col mt-14 md:mt-20 gap-4 md:gap-0">
      <p className="text-4xl text-center block md:hidden">SERVICES</p>
      <div className="w-full md:border-y-[1px] md:border-[#C4C4C4] md:mt-10 flex items-center justify-center mx border-r-[1px]">
        <Image
          src={Service}
          alt="about us"
          className="md:px-0 md:py-0 md:h-[90%] p-2 px-4"
        />
      </div>
      <div className="w-full md:border-y-[1px] md:border-[#C4C4C4] md:mt-10 flex flex-col gap-16">
        <div className="hidden md:block">
          <p className="text-6xl p-6 border-b-[1px] border-[#C4C4C4]">
            SERVICES
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 p-6">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Consultation</p>
            <p>
              The consultation fee is $200; however, if you proceed with us for
              your project, this fee will be credited toward your overall
              project cost, making the consultation at no charge
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Kitchen Remodelling</p>
            <p>
              Whether you want a complete makeover or subtle updates, our expert
              team will guide you through the process, from selecting the
              perfect layout to choosing modern finishes and appliances. We
              create kitchens that inspire and enhance your daily living.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Bathroom Remodelling</p>
            <p>
              Whether you’re looking to refresh a guest bathroom or create a
              spa-like retreat in your master bath, EliteSpaces provides
              innovative design solutions tailored to your needs, ensuring a
              seamless blend of form and function.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium">Renovations</p>
            <p>
              EliteSpaces offers full-scale home renovations designed to
              revitalize your entire living space. From structural updates to
              aesthetic improvements, we work closely with you to understand
              your goals and bring your dream home to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
