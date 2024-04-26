import LogoutBtn from "@/components/LogoutBtn";
import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div>{session?.user?.email}</div>
      <LogoutBtn />
    </main>
  );
}
