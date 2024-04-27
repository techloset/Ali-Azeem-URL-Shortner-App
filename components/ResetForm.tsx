"use client";

import Input from "@/components/Input";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ResetForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [currnt, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      currnt,
      newPassword,
      confirmPassword,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Input
        placeholder="Current Password"
        value={currnt}
        onChange={(e) => setCurrent(e.target.value)}
        disabled={loading}
      />
      <Input
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={loading}
      />
      <Input
        placeholder="Confirm new Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={loading}
      />
      <div
        onClick={login}
        className="px-[112.52px] py-[21px] bg-[#144EE3] rounded-[48px] text-white disabled:opacity-70 cursor-pointer"
      >
        Reset Password
      </div>
    </div>
  );
}
