"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { DropdownMenuDemo2 } from "../../components/Drop";
import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";
import { addNewFeedback } from "./addNewFeed";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const NewFeed = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Features");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleAddFeedback = async () => {
    setIsLoading(true);
    try {
      const res = await addNewFeedback(title, category, description);
      console.log(res);
      setTitle("");
      setDescription("");
      setIsLoading(false);
      toast({
        variant: "custom",
        description: "Your feedback has been added.",
      });
      router.push("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="absolute top-10 left-[50%] transform -translate-x-1/2">
      <div>
        <Link href="/"> Go Back</Link>
      </div>

      <div className="pt-6 pb-6 ">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_2017)" />
          <path
            d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_2017"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)"
            >
              <stop stop-color="#E84D70" />
              <stop offset="0.530886" stop-color="#A337F6" />
              <stop offset="1" stop-color="#28A7ED" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div>
        <h1 className="text-[#3A4374] text-2xl font-extrabold pb-7">
          Create New Feedback
        </h1>
        <p className="text-[#3A4374] bold text-base">Feedback Title</p>
        <p className="text-[#647196] text-base">
          Add a short, descriptive headline
        </p>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="bg-[#F7F8FD] drop-shadow-md w-[456px] h-[48px] mt-6 mb-6"
        />

        <p className="text-[#3A4374] font-extrabold text-base">Category</p>
        <p className="text-[#647196] text-base mb-6">
          Choose a category for your feedback
        </p>
        <div className=" text-black w-[456px] h-[48px] p-2 bg-[#F7F8FD] drop-shadow-md ">
          <DropdownMenuDemo2 onSelect={setCategory} />
        </div>
        <p className="text-[#3A4374] font-extrabold mt-6 text-base">
          Feedback Detail
        </p>
        <p className="text-[#647196] text-base mb-6 flex-wrap flex">
          Include any specific comments on what should be improved, added, etc.
        </p>
      </div>
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        className="bg-[#F7F8FD] drop-shadow-md w-[456px] h-[96px] mt-6 mb-6"
      />

      <div className="justify-end items-center flex p-4 flex-row gap-5">
        <button className="bg-[#3A4374] rounded text-[#F2F4FE] w-28 h-12 p-4">
          Cancel
        </button>
        <button
          onClick={handleAddFeedback}
          className="bg-[#AD1FEA] rounded text-[#F2F4FE] w-30 h-12 p-2"
        >
          {isLoading ? "Submitting..." : "Add Feedback"}
        </button>

        {/* <Link href='/addcomment'>
                  <button
                      onClick={() => {
                          addNewFeedback()
                      }}
                      className='bg-[#AD1FEA] rounded text-[#F2F4FE] w-30 h-12 p-4'>Add Feedback</button>
              </Link> */}
      </div>
    </div>
  );
};

export default NewFeed;
