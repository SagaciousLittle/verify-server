import {
  Router,
} from 'express'
import cuid from 'cuid'
import {
  User,
} from '../database/model'
import {
  ApiCode,
  ApiWarpper,
} from '../utils'
import {
  redis,
} from '../database/redis'

export const mainRouter = Router()

// 登录获取TOKEN，返回用户信息
mainRouter.post('/login', async (req, res) => {
  try {
    let data
    let code
    const {
      username,
      password,
    } = req.body
    data = await User.findOne({
      where: {
        username,
      }
    })
    if (!data) {
      data = '该用户未注册'
      code = ApiCode.UNREGISTERED
    } else if (data.password !== password) {
      data = '密码不正确'
      code = ApiCode.PASSWORD_WRONG
    } else {
      const token = cuid()
      data = {
        ...JSON.parse(JSON.stringify(data)),
        password: null,
        token,
      }
      // 2小时TOKEN过期
      redis.set(token, JSON.stringify(data), 'ex', 60 * 60 * 2)
    }
    res.send(ApiWarpper(data, code))
  } catch (e) {
    console.error(e)
    res.send(ApiWarpper(e.message, ApiCode.ERROR))
  }
})