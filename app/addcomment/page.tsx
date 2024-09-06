import React from "react";
import { DropdownMenuDemo1 } from "@/components/menu";
import { ChevronUp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Suggestions = () => {
  return (
    <div className="absolute top-10 left-[50%] transform -translate-x-1/2">
      <div className="flex ">
        <Link href="/">Go Back</Link>
        <div className="sm:ml-auto ml-10 bg-[#7C91F9] p-2 rounded-lg -mt-2">
          <Link href="/editfeedback">
            <button className="text-white text-sm font-bold ">
              Edit Feedback
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:w-[825px] mt-5  w-[600px] h-[160px] flex sm:h-[151px] sm:flex shadow-lg border-stroke p-5 bg-white mb-6">
        <div className="bg-[#CFD7FF] w-[30px] h-[35px] rounded bgpluee  text-[#4661E6] mt-20 sm:-mt-1 text-center">
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
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <p className="bg-light mt-3 text-[#4661E6] font-semibold text-xs rounded-sm w-[70px] h-[19px]">
            Feature
          </p>
        </div>
        <div className=" flex text-[#CDD2EE] ml-auto gap-1 mt-20 sm:-mt-1">
          <MessageCircle size={18} />
          <p className="text-[#3A4374] font-bold text-base -mt-1 ">4</p>
        </div>
      </div>

      <h1 className="text-lg font-bold">4 comments</h1>

      <div className="w-[825px] mt-5 h-[250px] flex shadow-lg border-stroke p-5 bg-white  mb-6">
        <div className=" rounded text-[#ffff] text-center">
          <Image
            src="man.png"
            className="sm:block hidden sm:w-[65px] sm:h-[35px]"
            width={25}
            height={50}
            alt="Hand massage"
          />
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">Elijah Moss </p>
          <p className="text-[#647196] text-sm mb-5">@hexagon.bestagon.</p>
          <p className="text-sm">
            Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device’s dark mode turns on without the bright background
            it currently has.
          </p>
          <div>
            <input
              type="text"
              className="bg-[#F7F8FD] drop-shadow-md w-[461px] h-[70px] mt-6 mb-6"
            />
            <button className="text-white bg-pluee p-3 rounded text-sm font-bold ml-8">
              Post Reply{" "}
            </button>
          </div>
        </div>
        <div className=" flex ml-auto gap-1">
          <button className="text-[#4661E6] font-bold text-base -mt-24">
            Reply
          </button>
        </div>
      </div>
      <div className="w-[825px] mt-5 h-[250px] flex shadow-lg border-stroke p-5 bg-white  mb-6">
        <div className=" rounded text-[#ffff] text-center">
          <Image
            src="man.png"
            className="sm:block hidden sm:w-[65px] sm:h-[35px]"
            width={25}
            height={50}
            alt="Hand massage"
          />
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">James Skinner </p>
          <p className="text-[#647196] text-sm mb-5">@hummingbird1</p>
          <p className="text-sm">
            Second this! I do a lot of late night coding and reading. Adding a
            dark theme can be great for preventing eye strain and the headaches
            that result. It’s also quite a trend with modern apps and apparently
            saves battery life.
          </p>
        </div>
        <div className=" flex ml-auto gap-1">
          <button className="text-[#4661E6] font-bold text-base -mt-24">
            Reply
          </button>
        </div>
      </div>

      <div className="w-[825px] mt-5 h-[250px] flex shadow-lg border-stroke p-5 bg-white  mb-6">
        <div className=" rounded text-[#ffff] text-center">
          <Image
            src="woman-oval.png"
            className="sm:block hidden sm:w-[65px] sm:h-[35px]"
            width={25}
            height={50}
            alt="Hand massage"
          />
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">Anne Valentine</p>
          <p className="text-[#647196] text-sm mb-5">@annev1990</p>
          <p className="text-sm">
            <span className="text-pluee">@hummingbird1</span> While waiting for
            dark mode, there are browser extensions that will also do the job.
            Search for dark theme followed by your browser. There might be a
            need to turn off the extension for sites with naturally black
            backgrounds though.
          </p>
        </div>
        <div className="flex ml-auto gap-1">
          <button className="text-[#4661E6] font-bold text-base mt-24">
            Reply
          </button>
        </div>
      </div>

      <div className="w-[825px] mt-5 h-[250px] flex shadow-lg border-stroke p-5 bg-white  mb-6">
        <div className=" rounded text-[#ffff] text-center">
          <img
            src="man-oval.png"
            className="sm:block hidden sm:w-[65px] sm:h-[35px]"
            width={25}
            height={50}
            alt="Hand massage"
          />
        </div>
        <div className="ml-10">
          <p className="text-[#3A4374] font-bold text-base">Ryan Welles</p>
          <p className="text-[#647196] text-sm mb-5">@hexagon.bestagon.</p>
          <p className="text-sm">
            <span className="text-pluee">@annev1990</span> Good point! Using any
            kind of style extension is great and can be highly customizable,
            like the ability to change contrast and brightness. I'd prefer not
            to use one of such extensions, however, for security and privacy
            reasons.
          </p>
          <div>
            <input
              type="text"
              className="bg-[#F7F8FD] drop-shadow-md w-[461px] h-[70px] mt-6 mb-6"
            />
            <button className="text-white bg-pluee p-3 rounded text-sm font-bold ml-8">
              Post Reply
            </button>
          </div>
        </div>
        <div className=" flex ml-auto gap-1">
          <button className="text-[#4661E6] font-bold text-base -mt-24">
            Reply
          </button>
        </div>
      </div>
      <div>
        <p className="font-bold p-3 text-base text-[#3A4374]">Add Comment</p>
        <Textarea />
        <div className="flex justify-between py-4">
          <p>225 characters left</p>
          <button className="text-white bg-pluee p-3 rounded text-sm font-bold ml-8">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
