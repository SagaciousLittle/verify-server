import cors from 'cors'
import {
  OriginWhiteList,
} from '../database/model'

let whiteList: string[] = []

async function initWhiteList () {
  try {
    const res = await OriginWhiteList.findAll()
    whiteList = res.map(originWhiteList => originWhiteList.originIp)
  } catch (err) {
    console.error(err)
  }
}

initWhiteList()

export function corsWhiteList () {
  return cors((req, callback) => {
    let origin = false
    const originIp = req.header('origin')
    if (!originIp) return callback(null, {origin})
    whiteList.forEach(secureIp => {
      if (new RegExp(secureIp).test(originIp)) origin = true
    })
    callback(null, {origin})
  })
}
