"use client";

import React, {useState} from "react";
import Link from "next/link";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBar(props) {
  const [toggle, setToggle] = useState(false);
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Meals",
      path: "/meals",
    },
    {
      name: "How it works",
      path: "/how-it-works",
    },

    {
      name: "Cart",
      path: "/cart",
    },
  ];
  return (
    <div className={`mb-[${props.mb}px] `}>
      {/* desktop tab */}
      <div className="p-8  w-full px-16 hidden md:flex justify-between border-2 border-b-slate-300">
        <div>
          <Link
            href={"/"}
            className="items-center font-expletus font-bold text-2xl"
          >
            Meal Buddy
          </Link>
        </div>
        <div className="flex flex-row items-center ">
          {routes.map((e) => {
            return (
              <div
                key={e.path}
                className="  transition-transform ease-linear delay-15 hover:scale-110 ml-[44px] hover:underline underline-offset-4 font-epilogue"
              >
                <Link href={e.path}>{e.name}</Link>
              </div>
            );
          })}
          <div className="transition-transform ease-linear delay-15 hover:scale-110 ml-[44px] hover:underline underline-offset-4 font-epilogue  font-bold">
            <Link href={"/"}>Login</Link>
          </div>
          <div className="transition-transform ease-linear delay-15 hover:scale-110 ml-[44px] hover:underline underline-offset-4 font-epilogue  font-bold bg-[#F2330D] px-5 py-2 rounded-xl text-white">
            <Link href={"/"}>Sign Up</Link>
          </div>
        </div>
      </div>
      {/* phone */}
      <div
        className={`p-8 py-6 md:p-8 md:px-16 flex md:hidden justify-between border-2 border-b-slate-300`}
      >
        <div>
          <Link
            href={"/"}
            className="items-center font-expletus font-bold text-xl md:text-2xl"
          >
            Meal Buddy
          </Link>
        </div>
        <div className="flex flex-row items-center z-10 ">
          <button
            onClick={() => {
              setToggle(!toggle);
              props.getToggle(!toggle);
            }}
          >
            {toggle ? (
              <FontAwesomeIcon
                height={24}
                width={24}
                icon={faXmark}
                color={toggle ? "white" : "black"}
              />
            ) : (
              <FontAwesomeIcon
                height={24}
                width={24}
                icon={faBars}
                color={toggle ? "white" : "black"}
              />
            )}
          </button>
        </div>
        <div
          className={`flex top-0 transition-transform ease-linear delay-0 w-full h-full bg-black p-12 flex-col items-center justify-center absolute ${
            // toggle ? " translate-x-0 overflow-y-hidden" : " translate-x-full "
            toggle ? " right-0 overflow-y-hidden" : " right-[10000vw] "
          }`}
        >
          {routes.map((e) => {
            return (
              <div
                key={e.path}
                className="transition-transform ease-linear delay-15 hover:scale-110 mt-4 text-xl text-white hover:underline underline-offset-4 font-epilogue "
              >
                <Link href={e.path}>{e.name}</Link>
              </div>
            );
          })}
          <div className="transition-transform ease-linear delay-15 hover:scale-110 mt-4 text-xl text-white hover:underline underline-offset-4 font-epilogue  font-bold">
            <Link href={"/"}>Login</Link>
          </div>
          <div className="transition-transform ease-linear delay-15 hover:scale-110 mt-4 text-xl hover:underline underline-offset-4 font-epilogue  font-bold bg-[#F2330D] px-5 py-2 rounded-xl text-white">
            <Link href={"/"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
