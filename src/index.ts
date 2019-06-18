import express from 'express'
import bodyParser from 'body-parser'
import {
  load,
} from 'env-configurator'

const app = express()
const PORT = 6329
load('/etc/verify.env')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', (req, res) => {
  res.send('verify server')
})

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`)
})