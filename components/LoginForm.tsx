"use client";

import Input from "@/components/Input";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
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
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Input
        placeholder="Name"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        type="password"
      />
      <div
        onClick={login}
        className="px-[112.52px] py-[21px] bg-[#144EE3] rounded-[48px] text-white disabled:opacity-70 cursor-pointer"
      >
        Login
      </div>
    </div>
  );
}
