"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutBtn() {
  return (
    <div>
      <div
        className="text-center py-3 rounded-full text-white bg-[#FFB1B1] cursor-pointer"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </div>
    </div>
  );
}
