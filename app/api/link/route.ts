import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/AuthOptions";
const prismaClient = new PrismaClient();

export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const urls = await prisma.url.findMany();
    return new NextResponse(JSON.stringify(urls), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  try {
    const { longUrl } = await req.json();

    const shortUrl = Math.random().toString(36).substring(2, 16);

    const userEmail = session?.user?.email;

    const addUrl = await prismaClient.url.create({
      data: {
        longUrl,
        shortUrl,
        clickCount: 0,
        userEmail: userEmail,
      },
    });

    return NextResponse.json({
      message: "Url created successfully",
      longUrl: longUrl,
      shortId: addUrl.shortUrl,
      id: addUrl.id,
      email: userEmail,
      clickCount: addUrl.clickCount,
    });
  } catch (err) {
    console.error("Error creating url:", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { id } = await req.json();
    console.log("Received id:", id);

    const url = await prismaClient.url.findUnique({
      where: { id },
    });
    console.log(id);

    if (!url) {
      return NextResponse.json({ message: "URL not found" });
    }

    await prismaClient.url.delete({
      where: { id },
    });
    console.log(id);

    console.log("Deleted URL with id:", id);

    return NextResponse.json({
      message: "URL deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting URL:", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
