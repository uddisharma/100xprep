import Redis from "ioredis";

class RedisClient {
  private static instance: Redis;

  private constructor() {}

  public static getInstance(): Redis {
    if (!RedisClient.instance) {
      const redisUrl = process.env.REDIS_URL;
      if (!redisUrl) {
        throw new Error("REDIS_URL environment variable is not set");
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
