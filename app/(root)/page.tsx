import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Urls from "@/components/Urls/HomeUrls";
import { Images } from "@/constants/constants";

export default function HomePage() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1
          className="sm:text-[60px] text-[35px] font-bold text-white mt-[130px] px-[38px] text-center "
          style={{
            background:
              "linear-gradient(45deg, #144EE3, #EB568E,#A353AA,#144EE3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shorten Your Loooong Links :)
        </h1>
        <p className="text-[#C9CED6] mt-[20px] text-center mx-[45.2px] ">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
        <Link href="/add">
          <div className="border-[4px] border-[#353C4A] sm:w-[659px] sm:mt-[46px] mt-[24px] w-[378px] sm:h-[76px] h-[60px] rounded-[48px] flex flex-row items-center justify-between bg-[#181E29] ">
            <div className="flex flex-row items-center ml-[25px] ">
              <Image src={Images.LinkIcon} alt="Link" />
              <h1 className="text-[#C9CED6] ml-[20px] ">Enter the link here</h1>
            </div>
            <h1 className="text-[#FFFFFF] px-[36px] py-[21px] border-[1px] rounded-[48px] border-[#144EE3] bg-[#144EE3] sm:flex hidden ">
              Shorten Now!
            </h1>
            <div className="text-[#FFFFFF] px-[15.48px] py-[13.5px] border-[1px] rounded-[48px] border-[#144EE3] bg-[#144EE3] sm:hidden ">
              (---)
            </div>
          </div>
        </Link>
        <div className="text-[#C9CED6] flex flex-row items-center mt-[32px] ">
          <Image src={Images.Auto} alt="Auto" />
          <h1>Auto Paste from Clipboard</h1>
        </div>
        <div className="text-[#C9CED6] mt-[25px] text-center mx-[59px] ">
          You can create <span className="text-[#EB568E] ">05</span> more links.
          <br className="sm:hidden " />
          <b className="underline">Register Now</b> to enjoy Unlimited usage
        </div>
        <div className="mt-[40px] text-[#C9CED6] sm:mx-[154px] ">
          <span className="sm:hidden ">
            <Urls displayCount={2} />
          </span>
          <span className="hidden sm:block ">
            <Urls displayCount={4} />
          </span>
        </div>
        <div className=" flex text-center text-[#C9CED6] sm:mt-[50px] mt-[30px] ">
          <Link href="/seeMore">
            <h1 className=" text-[#144EE3] underline mr-[5px] ">See More </h1>
          </Link>
          if you want
        </div>
      </div>
    </div>
  );
}
