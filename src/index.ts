import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`ACCESS LOG: ${req.url}`)
  next()
})

app.get('/books', (req, res) => {
  res.json({ isAlive: true })
})


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Backend server started at http://localhost:${port}`)
  })
}

export default app
