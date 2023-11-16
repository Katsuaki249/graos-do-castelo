import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const conn = require('./db/connection')
const routes = require('./routes/router')

app.use(cors())
app.use(express.json())

conn()

app.get('/', (req: Request, res: Response) => {
  const { message } = req.body

  if (!message) return res.status(400).send({ error: 'Message is required' })

  res.send({ message })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
