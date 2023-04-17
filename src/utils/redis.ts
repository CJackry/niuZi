import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost',
  port: 6379,
});

const redisClient = () => {
  const get = async (id: string) => {
    const data = await redis.get(id);
    if (!data) {
      return null;
    }
    try {
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
    return null;
  };
  const set = async (id: string, sess: unknown, ttl?:number) => {
    let timer = null;
    if (typeof ttl === 'number') {
      timer = Math.ceil(ttl / 1000);
    }
    try {
      const sessStr = JSON.stringify(sess);
      if (timer) {
        await redis.setex(id, timer, sessStr);
      } else {
        await redis.set(id, sessStr);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const destroy = async (id: string) => {
    await this.client.del(id);
  };

  return {
    get,
    set,
    destroy,
  };
};
export default redisClient();
