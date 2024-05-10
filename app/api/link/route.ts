// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// // GET
// export const GET = async (req: NextRequest) => {
//   try {
//     const url = await rismaClient.
//   } catch (error) {

//   }
// }
// // POST
// export const POST = async (request: NextRequest) => {
//   const prisma = new PrismaClient();

//   try {
//     const { longUrl } = await request.json();

//     if (!longUrl) {
//       return new NextResponse("Missing something", {
//         status: 400,
//       });
//     }
//     try {
//       const linkList = await prisma.url.create({
//         data: {
//           longUrl,
//         },
//       });

//       console.log("Created link list:", linkList);
//       return new NextResponse(
//         JSON.stringify({ data: linkList, success: true }),
//         {
//           status: 200,
//         }
//       );
//     } catch (error) {
//       console.error("Error creating link list:", error);
//       return new NextResponse(JSON.stringify(error), { status: 400 });
//     }
//   } catch (error) {
//     console.error("Error parsing request:", error);
//     return new NextResponse("Internal Server Error", {
//       status: 500,
//     });
//   }
// };
//
//
//
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
    // console.log("Received longUrl:", longUrl);

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
    // console.log("addUrl =>", addUrl);

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

// export const PUT = async (req: NextRequest) => {
//   try {
//     const { shortId } = await req.json();
//     // console.log("Received shortId:", shortId);

//     const url = await prismaClient.url.findUnique({
//       where: { shortUrl },
//     });

//     if (!url) {
//       return NextResponse.json({ message: "URL not found" });
//     }

//     const updatedUrl = await prismaClient.url.update({
//       where: { shortUrl },
//       data: { clickCount: url.clickCount + 1 },
//     });

// console.log("Updated URL =>", updatedUrl);

//     return NextResponse.json({
//       message: "URL accessed successfully",
//       longUrl: updatedUrl.longUrl,
//       shortId: updatedUrl.shortUrl,
//       clickCount: updatedUrl.clickCount,
//       id: updatedUrl.id,
//     });
//   } catch (err) {
//     console.error("Error accessing URL:", err);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };

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
