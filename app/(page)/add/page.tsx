import LinkForm from "@/components/LinkForm";
import Navbar from "@/components/Navbar";
import React from "react";

export default async function HomePage() {
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
        <LinkForm />
      </div>
    </div>
  );
}
