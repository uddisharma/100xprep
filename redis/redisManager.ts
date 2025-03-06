import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

class RedisClient {
  private static instance: Redis;

  private constructor() {}

  public static getInstance(): Redis {
    if (!RedisClient.instance) {
      const redisUrl = "redis://redis:6379";
      if (!redisUrl) {
        throw new Error("REDIS_HOST environment variable is not set");
      }

      RedisClient.instance = new Redis(redisUrl);

      RedisClient.instance.on("error", (err) => {
        console.error("Redis error:", err);
      });

      RedisClient.instance.on("connect", () => {
        console.log("Redis connected");
      });
    }

    return RedisClient.instance;
  }
}

export default RedisClient;
