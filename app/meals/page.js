"use client";

import React, {useState, useEffect} from "react";
import NavBar from "../components/navBar";
// import {GetFood} from "./components/utils/groq";
import Meals from "../components/meals";
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
          <Meals />
        </div>
      </div>
    </div>
  );
}

export default Page;
