import Redis from 'ioredis';

class RedisClient {
    private static instance: Redis;

    private constructor() { }

    public static getInstance(): Redis {
        if (!RedisClient.instance) {
            RedisClient.instance = new Redis();

            RedisClient.instance.on('error', (err) => {
                console.error('Redis error:', err);
            });

            RedisClient.instance.on('connect', () => {
                console.log('Redis connected');
            });
        }

        return RedisClient.instance;
    }
}

export default RedisClient;