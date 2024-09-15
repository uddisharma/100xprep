import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session || !session.user) {
      return NextResponse.redirect(new URL("/invalidsession", req.url));
    }

    await prisma.handbookRequest.deleteMany();
    await prisma.handbook.deleteMany();
    await prisma.job.deleteMany();
    const emailres = await prisma.emailLog.deleteMany();
    if (emailres) {
      const intervierres = await prisma.interviews.deleteMany();
      if (intervierres) {
        await prisma.user.deleteMany();
      }
    }
    return NextResponse.json({
      message: "DB deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || "An error occurred while deleting the DB",
      },
      {
        status: 500,
      },
    );
  }
}
