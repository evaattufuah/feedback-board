"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DropdownMenuDemo1 } from "@/components/menu";
import { ChevronUp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import prisma from "@/lib/prisma";
import { findFeedbacks } from "@/app/actions/findFeedbacks";
import Image from "next/image";
import { Vector } from "@/assets/images";

type SuggestionsProps = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

type Feedback = {
  id: number;
  title: string;
  category: string;
  description: string;
  createdAt: Date;
};

const Suggestions = ({ category, setCategory }: SuggestionsProps) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>();

  const findCurrentFeedbacks = async (selectedCategory: string) => {
    try {
      const res = await findFeedbacks(selectedCategory);
      setFeedbacks(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findCurrentFeedbacks(category);
  }, [category]);

  return (
    <div>
      <div className=" sm:bg-deep sm:flex header w-375px bg-red-300 sm:mt-10 sm:w-500px sm:h-16 sm:rounded-lg p-4 flex cursor-pointer text-center gap-6">
        <Image
          src={Vector}
          className="sm:block hidden  mb-2 sm:w-[25px] sm:h-[50px]"
          width={25}
          height={50}
          alt="Hand massage"
        />

        <p className="text-black text-lg font-bold mt-1  hidden sm:block sm:text-white">
          {" "}
          6 Suggestions
        </p>
        <div className="flex flex-row mt-3 ">
          {" "}
          <DropdownMenuDemo1 />
        </div>
        <Button className="bg-pluee flex justify-end ml-auto">
          <Link href="/newfeed">+ Add Feedback</Link>
        </Button>
      </div>
      {feedbacks?.map((feedback) => (
        <Link
          href={`/editfeedback?id=${feedback.id}`}
          className="sm:w-[825px] mt-5  w-[600px] h-[160px] flex sm:h-[151px] sm:flex shadow-lg border-stroke p-5 bg-white mb-6 cursor-pointer"
          key={feedback.id}
        >
          <div className="bg-white w-[30px] h-[35px] rounded text-[#4661E6] mt-20 sm:-mt-1 text-center">
            <p className="ml-2 mb-1">
              <ChevronUp size={8} />
            </p>
            <p className="text-[#3A4374] text-xs  font-bold">112</p>
          </div>
          <div className="ml-10">
            <p className="text-[#3A4374] font-bold text-base">
              {feedback.title}
            </p>
            <p className="text-[#647196] text-base "> {feedback.description}</p>
            <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[86px] h-[19px]">
              {feedback.category}
            </p>
          </div>
          <div className=" flex text-[#CDD2EE] ml-auto gap-1 mt-20 sm:-mt-1">
            <MessageCircle size={18} />
            <p className="text-[#3A4374] font-bold text-base -mt-1 ">2</p>
          </div>
        </Link>
      ))}
      {/* <div className="sm:w-[825px] mt-5  w-[600px] h-[160px] flex sm:h-[151px] sm:flex shadow-lg border-stroke p-5 bg-white mb-6">
        <div className="bg-white w-[30px] h-[35px] rounded text-[#4661E6] mt-20 sm:-mt-1 text-center">
          <p className="ml-2 mb-1">
            <ChevronUp size={8} />
          </p>
          <p className="text-[#3A4374] text-xs  font-bold">99</p>
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">
            Add a dark theme option
          </p>
          <p className="text-[#647196] text-base">
            {" "}
            Challenge-specific Q&A would make for easy reference.
          </p>
          <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[86px] h-[19px]">
            Enhancement
          </p>
        </div>
        <div className=" flex text-[#CDD2EE] ml-auto gap-1 mt-20 sm:-mt-1">
          <MessageCircle size={18} />
          <p className="text-[#3A4374] font-bold text-base -mt-1 ">4</p>
        </div>
      </div>
      <div className="sm:w-[825px] mt-5  w-[600px] h-[160px] flex sm:h-[151px] sm:flex shadow-lg border-stroke p-5 bg-white mb-6">
        <div className="bg-white w-[30px] h-[35px] rounded text-[#4661E6] mt-20 sm:-mt-1 text-center">
          <p className="ml-2 mb-1">
            <ChevronUp size={8} />
          </p>
          <p className="text-[#3A4374] text-xs  font-bold">65</p>
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">
            Q&A within the challenge hubs
          </p>
          <p className="text-[#647196] text-base">
            {" "}
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[86px] h-[19px]">
            Features
          </p>
        </div>
        <div className=" flex text-[#CDD2EE] ml-auto gap-1 mt-20 sm:-mt-1">
          <MessageCircle size={18} />
          <p className="text-[#3A4374] font-bold text-base -mt-1 ">1</p>
        </div>
      </div>

      <div className="w-[825px] mt-5 h-[151px] flex shadow-lg border-stroke p-5 bg-white  mb-6">
        <div className="bg-[#4661E6] w-[30px] h-[35px] rounded text-[#ffff] text-center">
          <p className="ml-2 mb-1">
            <ChevronUp size={8} />
          </p>
          <p className="text-[#ffff] text-xs font-bold">52 </p>
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">
            Allow image/video upload{" "}
          </p>
          <p className="text-[#647196] text-base ">
            {" "}
            Images and screencasts can enhance comments on solutions.
          </p>
          <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[86px] h-[19px]">
            Enhancement
          </p>
        </div>
        <div className=" flex text-[#CDD2EE] ml-auto gap-1">
          <MessageCircle size={18} />
          <p className="text-[#3A4374] font-bold text-base -mt-1 ">2</p>
        </div>
      </div>
      <div className="sm:w-[825px] mt-5  w-[600px] h-[160px] flex sm:h-[151px] sm:flex shadow-lg border-stroke p-5 bg-white mb-6">
        <div className="bg-white w-[30px] h-[35px] rounded text-[#4661E6] mt-20 sm:-mt-1 text-center">
          <p className="ml-2 mb-1">
            <ChevronUp size={8} />
          </p>
          <p className="text-[#3A4374] text-xs  font-bold">42</p>
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">
            Ability to follow others
          </p>
          <p className="text-[#647196] text-base ">
            {" "}
            Stay updated on comments and solutions other people post.
          </p>
          <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[86px] h-[19px]">
            Enhancement
          </p>
        </div>
        <div className=" flex text-[#CDD2EE] ml-auto gap-1 mt-20 sm:-mt-1">
          <MessageCircle size={18} />
          <p className="text-[#3A4374] font-bold text-base -mt-1 ">3</p>
        </div>
      </div>

      <div className="sm:w-[825px] mt-5  w-[600px] h-[160px] flex sm:h-[151px] sm:flex shadow-lg border-stroke p-5 bg-white mb-6">
        <div className="bg-white w-[30px] h-[35px] rounded text-[#4661E6] mt-20 sm:-mt-1 text-center">
          <p className="ml-2 mb-1">
            <ChevronUp size={8} />
          </p>
          <p className="text-[#3A4374] text-xs  font-bold">3</p>
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">
            Preview images not loading
          </p>
          <p className="text-[#647196] text-base ">
            {" "}
            Challenge preview images are missing when you apply a filter.
          </p>
          <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[20px] h-[19px]">
            Bug
          </p>
        </div>
        <div className=" flex text-[#CDD2EE] ml-auto gap-1 mt-20 sm:-mt-1">
          <MessageCircle size={18} />
          <p className="text-[#3A4374] font-bold text-base -mt-1 ">0</p>
        </div>
      </div> */}
    </div>
  );
};

export default Suggestions;
