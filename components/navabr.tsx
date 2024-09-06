import Link from "next/link";
import React from "react";
import { Dispatch, SetStateAction } from "react";

import DropdownMenuDemo from "../components/Dropdown";

type NavbarProps = {
  setCategory: Dispatch<SetStateAction<string>>;
};

function Navbar({ setCategory }: NavbarProps) {
  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="header sm:p-10">
      <nav className="rounded-none sm:rounded-md sm:container sm:block sm:ml-1 bg-gradient-to-r from-skye via-plur to-redd sm:w-[225px] h-24 py-3 w-full ">
        <div className="flex mt-2">
          <div className=" sm:flex h-full sm:w-64 px-4 w-full text-white ">
            <div className="sm:pt-1">
              <h2 className="font-bold text-base">Frontend Mentor</h2>
              <p className="text-xs">Feedback Board</p>
            </div>
          </div>
          <div className="sm:hidden">
            {" "}
            <DropdownMenuDemo />
          </div>
        </div>
      </nav>

      <div className="uppercase border-b border-white  text-bluee font-bold hidden sm:flex">
        <div className=" sm:gap-2 sm: flex-col sm:h-[485px]  sm:w-[225px] p-3 pt-5 shadow-lg  sm:bg-white text-xs">
          <div className="sm:h-[185px] flex-wrap  flex gap-2 sm:w-[205px]">
            <div className="">
              <button
                type="button"
                className="hover:bg-blue-500 hover:text-white  bg-light  p-3 rounded "
                onClick={() => handleCategoryClick("All")}
              >
                ALL
              </button>
            </div>
            <div className="">
              <button
                type="button"
                className="hover:bg-blue-500 bg-light p-3 rounded hover:text-white "
                onClick={() => handleCategoryClick("UI")}
              >
                UI
              </button>
            </div>
            <div>
              <button
                type="button"
                className="hover:bg-blue-500 hover:text-white  bg-light p-3 rounded"
                onClick={() => handleCategoryClick("UX")}
              >
                UX
              </button>
            </div>
            <div className="">
              <button
                type="button"
                className="hover:bg-blue-500 hover:text-white  rounded bg-light p-3"
                onClick={() => handleCategoryClick("Enhancement")}
              >
                Enhancement
              </button>
            </div>
            <div>
              <button
                type="button"
                className="hover:bg-blue-500  hover:text-white  rounded bg-light p-3 "
                onClick={() => handleCategoryClick("Bug")}
              >
                Bug
              </button>
            </div>
            <div>
              <button
                type="button"
                className="hover:bg-blue-500 hover:text-white  bg-light p-3 rounded"
                onClick={() => handleCategoryClick("Features")}
              >
                Features
              </button>
            </div>
          </div>

          <div className="sm:h-[185px] mt-6 flex-col flex  sm:w-[205px]">
            <div className="flex gap-11 mb-6 ">
              <p className="hover:bg-blue-500 text-dark text-lg">Roadmap</p>
              <p className="hover:bg-blue-500 text-blue-400 mt-2">View</p>
            </div>
            <div className="flex gap-9 text-base font-normal mb-2">
              <p className="rounded bg-orangee p-1 h-[8px] w-[8px] mt-2"></p>
              <p className="hover:bg-blue-500 text-greey ">Planned</p>
              <p className="hover:bg-blue-500  text-blue-400">2</p>
            </div>
            <div className="flex gap-5 text-base font-normal mb-2">
              <p className="rounded bg-pluee p-1 h-[8px] w-[8px] mt-2"></p>
              <p className="hover:bg-blue-500 text-greey ">In-Progress</p>
              <p className="hover:bg-blue-500 text-blue-400">3</p>
            </div>
            <div className="flex gap-10 text-base font-normal mb-2 ">
              <p className="rounded bg-skye p-1 h-[8px] w-[8px] mt-2"></p>
              <p className="hover:bg-blue-500  text-greey ">Live</p>
              <p className="hover:bg-blue-500 text-blue-400 ml-8">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
