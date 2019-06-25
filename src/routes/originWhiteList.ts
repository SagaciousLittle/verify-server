import {
  Router,
} from 'express'
import {
  OriginWhiteList,
} from '../database/model'
import {
  ApiWarpper,
  ApiCode,
} from '../utils'

export const originWhiteListRouter = Router()

originWhiteListRouter.post('/addOne', (req, res) => {
  const {originIp} = req.body
  OriginWhiteList.create({
    originIp,
  }).then(r => {
    res.send(ApiWarpper(originIp))
  }).catch(err => {
    console.error(err)
    res.send(ApiWarpper(err, ApiCode.ERROR))
  })
})
