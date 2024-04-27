import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import LinkImg from "@/public/assets/link.svg";
import Auto from "@/public/assets/auto.svg";
import showMore from "@/public/assets/showMore.svg";
import Link from "next/link";

export default async function ShowMorePage() {
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
        // justifyContent: "center",
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
          <Link href="/add">
            <div className="border-[4px] border-[#353C4A] bg-[#181E29] w-[1100px] h-[76px] rounded-[48px] flex flex-row items-center justify-between ">
              <div className="flex flex-row items-center ml-[25px] ">
                <Image src={LinkImg} alt="Link" />
                <h1 className="text-[#C9CED6] ml-[20px] ">
                  Enter the link here
                </h1>
              </div>
              <h1 className="text-[#FFFFFF] px-[36px] py-[21px] border-[1px] rounded-[48px] border-[#144EE3] bg-[#144EE3] ">
                Shorten Now!
              </h1>
            </div>
          </Link>
          <div>{session?.user?.email}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[#C9CED6] flex flex-row items-center mt-[26px] ">
            <Image src={Auto} alt="Auto" />
            <h1>Auto Paste from Clipboard</h1>
          </div>
          <div className="w-[] " >
            <Image
              src={showMore}
              alt="Show More"
              className="bg-[#181E29] py-[21px]  "
            />
          </div>
          <div className="mt-[40px] text-[#C9CED6] w-[1421px] ">
            <table>
              <thead className="bg-[#181E29] ">
                <tr>
                  <th className="p-[25px] " style={{ width: "330.76px" }}>
                    Short Link
                  </th>
                  <th style={{ width: "476.76px" }}>Original Link</th>
                  <th style={{ width: "137.76px" }}>QR Code</th>
                  <th style={{ width: "130.76px" }}>Clicks</th>
                  <th style={{ width: "187.76px" }}>Status</th>
                  <th style={{ width: "189.76px" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Short Link Content</td>
                  <td>Original Link Content</td>
                  <td>QR Code Content</td>
                  <td>Clicks Content</td>
                  <td>Status Content</td>
                  <td>Date Content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
