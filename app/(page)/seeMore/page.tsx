import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MoreUrls from "@/components/Urls/MoreUrls";
import { Images } from "@/constants/constants";

export default async function ShowMorePage() {
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
        <Navbar />
        <Link href="/add">
          <div className="border-[4px] border-[#353C4A] bg-[#181E29] w-[1100px] h-[76px] rounded-[48px] flex flex-row items-center justify-between mt-[-70px] ">
            <div className="flex flex-row items-center ml-[25px] ">
              <Image src={Images.LinkIcon} alt="Link" />
              <h1 className="text-[#C9CED6] ml-[20px] ">Enter the link here</h1>
            </div>
            <h1 className="text-[#FFFFFF] px-[36px] py-[21px] border-[1px] rounded-[48px] border-[#144EE3] bg-[#144EE3] ">
              Shorten Now!
            </h1>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <div className="text-[#C9CED6] flex flex-row items-center mt-[26px] ">
            <Image src={Images.Auto} alt="Auto" />
            <h1>Auto Paste from Clipboard</h1>
          </div>
          <div className="w-[1728px] bg-[#181E29] mt-[38px] ">
            <Image
              src={Images.showMore}
              alt="Show More"
              className=" py-[21px] px-[20px] mx-[650px]  "
            />
          </div>
          <div className="mt-[41.5px] text-[#C9CED6] w-[1421px] font-bold ">
            <div className="text-[#C9CED6] text-[20px] w-full mb-[42.5px] flex flex-row items-center justify-between ">
              <p>History ()</p>
              <Image src={Images.Filter} alt="Filter" />
            </div>
            <MoreUrls />
          </div>
        </div>
      </div>
    </div>
  );
}
