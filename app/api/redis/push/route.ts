import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import RedisClient from "@/redis/redisManager";
import { MessagetoService } from "@/types/email";

const redis = RedisClient.getInstance();

export async function POST(req: NextRequest, res: NextApiResponse) {
  const reqBody: MessagetoService = await req.json();
  const { data } = reqBody;

  if (!data) {
    return NextResponse.json({ error: "Data is required" });
  }

  try {
    await redis.lpush("EmailQueue", JSON.stringify(data));
    return NextResponse.json({ message: "Message pushed to queue" });
  } catch (error) {
    console.error("Error pushing to queue:", error);
    return NextResponse.json({ error: "Failed to push message to queue" });
  }
}
