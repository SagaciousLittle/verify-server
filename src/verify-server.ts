import express from 'express'
import bodyParser from 'body-parser'
import {
  load,
} from 'env-configurator'
load('/etc/verify.env')
import {
  mainRouter,
  originWhiteListRouter,
} from './routes'
import {
  limitTimes,
  corsWhiteList,
} from './middleware'

const app = express()
const PORT = 6329

app.use(corsWhiteList())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', limitTimes)

app.use('/', mainRouter)
app.use('/originWhiteList', originWhiteListRouter)

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`)
})
