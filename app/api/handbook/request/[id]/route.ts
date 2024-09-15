import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { revalidateTag } from "next/cache";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session || !session.user) {
      return NextResponse.redirect(new URL("/invalidsession", req.url));
    }

    await prisma.handbookRequest.delete({ where: { id: params.id } });
    revalidateTag("handbookRequests");

    return NextResponse.json({
      message: "Handbook Request deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while deleting the handbook request",
      },
      {
        status: 500,
      },
    );
  }
}
