import ioredis from 'ioredis'
import {
  getValFromEnv,
} from '../utils'

export const redis = new ioredis({
  port: +getValFromEnv('REDIS_PORT'),
  host: getValFromEnv('REDIS_HOST'),
  password: getValFromEnv('REDIS_PASSWORD'),
})
