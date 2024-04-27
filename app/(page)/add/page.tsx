import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div
      style={{
        backgroundImage: "url('/assets/BackgroundImage.svg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="w-screen flex flex-col items-center">
        <div className="flex flex-row items-center text-[blue] px-[52px] mt-[40px] w-full justify-between ">
          <h1
            className="text-[36.91px] font-bold"
            style={{
              background:
                "linear-gradient(45deg, #144EE3, #EB568E,#A353AA,#144EE3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Linkly
          </h1>
          <div>{session?.user?.email}</div>
        </div>
        <div className="flex flex-col items-center mt-[352px] ">
          <div className="relative  ">
            <img
              className="absolute top-1/3 left-4 transform -translate-y-1/2"
              src="/assets/Link.svg"
              alt="Link Icon"
            />
            <input
              className="outline-none p-[24px] pl-[48px] border-[4px] border-[#353C4A] w-[1100px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-[#181E29] drop-shadow-[#0000001A] text-[white] text-[25px]"
              placeholder="Enter the link to shorten here"
            />
          </div>
          <div className="relative  ">
            <img
              className="absolute top-1/3 left-4 transform -translate-y-1/2"
              src="/assets/Link.svg"
              alt="Link Icon"
            />
            <input
              className="outline-none p-[24px] pl-[48px] border-[4px] border-[#353C4A] w-[1100px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-[#181E29] drop-shadow-[#0000001A] text-[white] text-[25px]"
              placeholder="Enter custom slug"
            />
          </div>
          <div
            // onClick={login}
            className="px-[112.52px] py-[21px] bg-[#144EE3] rounded-[48px] text-white disabled:opacity-70 cursor-pointer"
          >
            Shorten Now!
          </div>
          <div className="relative">
            <h1 className="absolute text-white  top-1/3 left-[600px] transform -translate-y-1/2 border-[1px] border-[#353C4A] pr-[16px]">
              Link
            </h1>
            <input
              className="outline-none p-[24px] pl-[48px] border-[4px] border-[#353C4A] w-[659px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-[#181E29] drop-shadow-[#0000001A] text-[white] text-[25px]"
              placeholder="Enter the link to shorten here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
