import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";
import Drop from "./Drop";

export default async function Model() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="p-2 border border-[#353C4A] w-[191px] sm:h-[60px] h-[48px] shadow-lg rounded-[48px] bg-[#181E29] ">
        <div className="text-[#FFFFFF] ml-[34.41px] mr-[34.59px] flex justify-between items-center ">
          <div>
            <p className="text-[10px] ">Welcome</p>
            <div>{session?.user?.name}</div>
          </div>
          <div>
            <Drop />
          </div>
        </div>
      </div>
    </div>
  );
}
