import React from "react";
import Image from "next/image";
import BannerImage from "../../public/assets/banner4.jpg";

function Banner() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col ">
        <div className="relative md:h-[70vh] h-[50vh] w-full">
          <Image
            src={BannerImage}
            alt="bannerImage"
            fill
            className=" md:rounded-xl object-cover"
            placeholder="blur"
          />
        </div>
      </div>
      {/* <div className="font-epilogue text-left px-4 md:px-8  text-white relative md:-top-[35vh] -top-[35vh]"> */}
      <div className="font-epilogue text-left px-4 md:px-8 md:w-[80vw] text-white absolute md:top-[50vh] top-[35vh]">
        <p className=" text-xl md:text-4xl lg:text-5xl font-semibold md:font-bold mb-3 drop-shadow-lg ">
          Your perfect meals are waiting
        </p>
        <p className=" text-sm md:text-lg font-normal md:font-semibold  ">
          Start crafting a meal plan that&apos;s personalised to your taste,
          lifestyle and you goals. Your first three meals are on us !
        </p>
        <div className=" flex flex-row rounded-md w-[90%] md:w-[50%] mt-3 md:mt-5 bg-[#FCFAF7] p-1 md:p-2">
          <input
            type="text"
            className=" text-sm md:text-lg border-none outline-none text-[#9C574A] placeholder:text-[#9C574A] p-2 md:py-2 md:px-5 w-2/3 rounded-md "
            placeholder="Enter your email"
          />
          <div className=" cursor-pointer hover:scale-105 transition-transform ease-linear flex bg-[#F2330D] justify-center items-center w-1/3 rounded-md">
            <p className=" font-epilogue font-medium text-sm md:text-lg">
              Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
