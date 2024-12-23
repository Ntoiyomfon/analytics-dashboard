import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://guided-turkey-30045.upstash.io',
  token: process.env.REDIS_KEY,
})
