"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Images } from "@/constants/constants";
import { Url } from "@/constants/setUrl";
export default function LinkForm() {
  const [link, setLink] = useState("");

  const handleCreateTask = async () => {
    console.log(link);
    try {
      const response = await axios.post(
        `${Url}/api/link`,
        { longUrl: link },

        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col items-center mt-[352px] ">
          <div className="relative  ">
            <Image
              className="absolute top-1/3 left-4 transform -translate-y-1/2"
              src={Images.LinkIcon}
              alt="Link Icon"
            />
            <input
              className="outline-none p-[24px] pl-[48px] border-[4px] border-[#353C4A] w-[1100px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-[#181E29] drop-shadow-[#0000001A] text-[white] text-[25px]"
              placeholder="Enter the link to shorten here"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="relative  ">
            <Image
              className="absolute top-1/3 left-4 transform -translate-y-1/2"
              src={Images.LinkIcon}
              alt="Link Icon"
            />
            <input
              className="outline-none p-[24px] pl-[48px] border-[4px] border-[#353C4A] w-[1100px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-[#181E29] drop-shadow-[#0000001A] text-[white] text-[25px]"
              placeholder="Enter custom slug"
            />
          </div>
          <div>
            <Link href="/seeMore">
              <div
                onClick={handleCreateTask}
                className="px-[112.52px] py-[21px] bg-[#144EE3] rounded-[48px] text-white disabled:opacity-70 cursor-pointer"
              >
                Shorten Now!
              </div>
            </Link>
            ;
          </div>
        </div>
      </div>
    </div>
  );
}
