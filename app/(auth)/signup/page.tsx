import React from "react";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export default function LoginPage() {
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
      <h1
        className="text-[36.91px] font-bold text-white mt-[40px] "
        style={{
          background:
            "linear-gradient(45deg, #144EE3, #EB568E,#A353AA,#144EE3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Linkly
      </h1>
      <h1
        className="text-[60px] font-bold text-white mt-[126px] px-[38px] "
        style={{
          background:
            "linear-gradient(45deg, #144EE3, #EB568E,#A353AA,#144EE3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Shorten Your Loooong Links :)
      </h1>

      <p className="text-[#C9CED6] mt-[20px] mb-[46px] ">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>
      <RegisterForm />
      <div className=" flex text-center text-[#C9CED6] mt-[156px] ">
        <Link href="/signin">
          <h1 className=" text-[#144EE3] underline mr-[5px] ">Sign In </h1>
        </Link>
        if already registered
      </div>
    </div>
  );
}
