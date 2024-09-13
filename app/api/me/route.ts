import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/db";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/invalidsession", req.url));
  }

  const user = await prisma.user.findFirst({
    where: {
      id: (token.sub || token.uid) as string,
    },
  });

  return NextResponse.json({
    user: user,
  });
}
