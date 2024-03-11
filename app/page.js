"use client";

import React, {useState, useEffect} from "react";
import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Featured from "./components/featured";
import SpecialOffers from "./components/specialOffers";
import {GetFood} from "./components/utils/groq";
import Link from "next/link";
function Page() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        <NavBar
          getToggle={(toggle) => {
            setToggle(toggle);
          }}
          mb={0}
        />
      </div>

      <div className={`${toggle ? "hidden" : "block"}  `}>
        <div className=" md:mx-[10%] md:mt-5 mb-24">
          <Banner />
          <Featured Food={GetFood} />
          <SpecialOffers />
          <div className=" flex justify-center items-center mt-20 ">
            <Link
              className=" text-center font-epilogue font-semibold text-lg p-5 border-2 hover:bg-[#F2330D] hover:text-[#ffffff] transition-transform ease-linear delay-75 cursor-pointer border-[#F2330D] rounded-md w-[80%] md:w-[40%] self-center "
              href={"/meals"}
            >
              <div>Browse More Meals</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
