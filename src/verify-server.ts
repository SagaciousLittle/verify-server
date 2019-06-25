import express from 'express'
import bodyParser from 'body-parser'
import {
  load,
} from 'env-configurator'
load('/etc/verify.env')
import {
  mainRouter,
} from './routes'
import {
  limitTimes,
} from './middleware'
import cors from 'cors'

const app = express()
const PORT = 6329

app.use(cors({
  origin: ['45.77.134.42']
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', limitTimes)

app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`)
})