"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutBtn() {
  return (
    <div>
      <div
        className="text-white cursor-pointer"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </div>
    </div>
  );
}
