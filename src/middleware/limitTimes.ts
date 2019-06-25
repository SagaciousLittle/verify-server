import {
  Request,
  Response,
  NextFunction,
} from 'express'
import {
  redis,
} from '../database/redis'
import {
  ApiWarpper,
  ApiCode,
} from '../utils'


/**
 * 限制IP请求次数的中间件
 * 每个IP5S内最多请求20次
 *
 * @export
 * @param {Request} req 
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function limitTimes (req: Request, res: Response, next: NextFunction) {
  try {
    const {ip} = req
    let requestTimes = await redis.get(ip)
    if (!requestTimes) {
      redis.set(ip, 0, 'ex', 5)
      return next()
    }
    console.log(`ip: ${ip}, requestTimes: ${requestTimes}`)
    redis.incr(ip)
    if (+requestTimes >= 20) return res.send(ApiWarpper('请求过于频繁', ApiCode.ATTACKED))
  } catch (e) {
    console.error(e.message)
  }
  next()
}