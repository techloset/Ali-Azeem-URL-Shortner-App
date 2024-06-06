import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";
import Model from "./Model";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="w-screen flex flex-col items-center ">
        <div className="flex flex-row items-center text-[blue] sm:px-[52px] px-[26px] mt-[40px] w-full justify-between ">
          <Link href="/">
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
          </Link>
          <div>
            <Model />
          </div>
        </div>
      </div>
    </div>
  );
}
