// "use client";

// import Input from "@/components/Input";
// import axios from "axios";
// import { signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// export default function RegisterForm() {
//   useEffect(() => {
//     signOut({
//       redirect: false,
//     });
//   }, []);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const register = async () => {
//     setLoading(true);
//     try {
//       await axios.post("/api/register", {
//         email,
//         password,
//       });

//       toast.success("Successfully registered");

//       router.push("/signin");
//     } catch (err: any) {
//       console.log(err);
//       toast.error(err?.response?.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-5 flex flex-col items-center">
//       <Input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         disabled={loading}
//       />
//       <Input
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         disabled={loading}
//         type="password"
//       />
//       <div
//         onClick={register}
//         className="px-10 py-3 bg-[#FFB1B1] rounded-full text-white disabled:opacity-70 cursor-pointer"
//       >
//         Register
//       </div>
//     </div>
//   );
// }
// 
// 
// 
// 
// "use client";

// import Input from "@/components/Input";
// import { signIn, signOut } from "next-auth/react";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// export default function RegisterForm() {
//   useEffect(() => {
//     signOut({
//       redirect: false,
//     });
//   }, []);

//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);

//   const login = async () => {
//     setLoading(true);

//     const login = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (login?.ok) {
//       toast.success("Correct login");
//       window.location.assign("/");
//     } else if (login?.error) {
//       toast.error(login?.error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <Input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         disabled={loading}
//       />
//       <Input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         disabled={loading}
//         type="name"
//       />
//       <Input
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         disabled={loading}
//         type="password"
//       />
//       <Input
//         placeholder="Confirm Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         disabled={loading}
//         type="password"
//       />
//       <div
//         onClick={login}
//         className="px-[101.52px] py-[21px] bg-[#144EE3] rounded-[48px] text-white disabled:opacity-70 cursor-pointer"
//       >
//         Register
//       </div>
//     </div>
//   );
// }
// 
// 
// 
// 
"use client";

import Input from "@/components/Input";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const register = async () => {
    setLoading(true);
    try {
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      await axios.post("/api/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      toast.success("Successfully registered");

      router.push("/signin");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        type="password"
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={loading}
        type="password"
      />
      <div
        onClick={register}
        className="px-[101.52px] py-[21px] bg-[#144EE3] rounded-[48px] text-white disabled:opacity-70 cursor-pointer"
      >
        Register
      </div>
    </div>
  );
}
