import React from "react";
import ResetForm from "@/components/ResetForm";

export default function ResetPage() {
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
        className="text-[60px] font-bold text-white mt-[216px] px-[38px] "
        style={{
          background:
            "linear-gradient(45deg, #144EE3, #EB568E,#A353AA,#144EE3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Shorten Your Loooong Links :)
      </h1>
      <ResetForm />
    </div>
  );
}
