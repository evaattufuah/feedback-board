"use client";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { findFeedbackById } from "../actions/findFeedbackById";
import { toast } from "@/components/ui/use-toast";
import { deleteFeedback } from "../delete/deleteFeedback";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateFeedback } from "./updateFeedback";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type Feedback = {
  id: number;
  title: string;
  category: string;
  description: string;
  createdAt: Date;
};

const Editfeedback = () => {
  const [feedback, setFeedback] = useState<Feedback>();
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  const findFeedback = async () => {
    try {
      const res = await findFeedbackById(id);
      console.log(res);
      if (res) {
        setFeedback(res);
        setEditedTitle(res.title);
        setEditedDescription(res.description);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateFeedback = async () => {
    setIsLoading(true);
    try {
      const res = await updateFeedback(
        editedTitle,
        editedCategory,
        editedDescription,
        id
      );
      console.log(res);
      setIsLoading(false);
      toast({
        variant: "custom",
        description: "Your feedback has been updated successfully.",
      });
      router.push("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    findFeedback();
  }, []);

  console.log({
    editedTitle,
    editedDescription,
    editedCategory,
  });

  const deleteFeedbackById = async () => {
    setIsLoading(true);
    try {
      const res = await deleteFeedback(id);
      console.log(res);
      setIsLoading(false);
      toast({
        variant: "custom",
        description: "Your feedback has been deleted successfully.",
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
          <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1239)" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_1239"
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
        <h1 className="text-[#3A4374] text-2xl font-extrabold pb-16">
          Editing ‘Add a dark theme option’
        </h1>
        <p className="text-[#3A4374] bold text-base">Feedback Title</p>
        <p className="text-[#647196] pb-4 text-sm">
          Add a short, descriptive headline
        </p>
        {/* <div className=" w-[456px] mt-3 h-[48px] p-2 bg-[#F7F8FD] drop-shadow-md "> */}
        {/* <p className="text-[#647196] text-sm">{feedback?.title}</p> */}
        <input
          onChange={(e) => setEditedTitle(e.target.value)}
          value={editedTitle}
          type="text"
          className="bg-[#F7F8FD] drop-shadow-md w-[456px] h-[48px] mt-6 mb-6 px-2"
        />
        {/* </div> */}
        <p className="text-[#3A4374] mt-6 font-extrabold text-sm">Category</p>
        <p className="text-[#647196] text-sm mb-6">
          Choose a category for your feedback
        </p>
        {/* <div className=' text-black w-[456px] h-[48px] p-2 bg-[#F7F8FD] drop-shadow-md '>
                    <DropdownMenuDemo2 onSelect={("item")=> {}} />
                </div>  */}
        <Select onValueChange={(value) => setEditedCategory(value)}>
          <SelectTrigger className="w-[456px]">
            <SelectValue placeholder={feedback?.category} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Features">Features</SelectItem>
              <SelectItem value="UI">UI</SelectItem>
              <SelectItem value="UX">UX</SelectItem>
              <SelectItem value="Enhancement">Enhancement</SelectItem>
              <SelectItem value="Bugs">Bugs</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* <p className="text-[#3A4374] mt-6 font-extrabold text-sm">
          Update Status
        </p>
        <p className="text-[#647196] text-sm mb-6">Change feature state</p>
        <div className=" text-black w-[456px] h-[48px] p-2 bg-[#F7F8FD] drop-shadow-md ">
          <Select>
            <SelectTrigger className="w-[456px]">
              <SelectValue placeholder="Update staus" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Planned</SelectLabel>
                <SelectItem value="apple">Suggestion</SelectItem>
                <SelectItem value="banana">In-Progress</SelectItem>
                <SelectItem value="blueberry">Live</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div> */}
        <p className="text-[#3A4374] font-extrabold mt-6 text-base">
          Feedback Detail
        </p>
        <p className="text-[#647196] text-base mb-6">
          Include any specific comments on what should be improved, added, etc.
        </p>
      </div>
      {/* <input
        type="text"
        className="bg-[#F7F8FD] drop-shadow-md w-[456px] h-[96px] mt-6 mb-6"
        value={feedback?.description}
      /> */}
      <textarea
        name="description"
        id="description"
        className="bg-[#F7F8FD] drop-shadow-md w-[456px] h-[96px] mt-6 mb-6 p-2"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      ></textarea>

      <div className="justify-end flex p-4 flex-row gap-5">
        <div className="mr-auto">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-[#D73737] rounded text-[#F2F4FE]  w-28 h-12 p-4 text-center flex items-center justify-center">
                Delete
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle> Delete Content</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this Content
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4"></div>
              <DialogFooter>
                <button
                  className="bg-[#D73737] rounded text-[#F2F4FE] w-24 h-9 p-4 text-center flex items-center justify-center"
                  type="submit"
                  onClick={deleteFeedbackById}
                >
                  {isLoading ? "Deleting..." : "Delete"}{" "}
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="bg-[#3A4374]  rounded text-[#F2F4FE]  w-28 h-12 p-4 text-center flex items-center justify-center"
        >
          Cancel
        </button>
        <button
          className="bg-[#AD1FEA]  rounded text-[#F2F4FE]  w-30 h-12 p-4 text-center flex items-center justify-center"
          type="button"
          onClick={handleUpdateFeedback}
        >
          {isLoading ? "Updating..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default Editfeedback;
