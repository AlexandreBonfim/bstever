import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import booksRouter from './book-club/books/books.controller'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`ACCESS LOG: ${req.url}`)
  next()
})

app.get('/health', (req, res) => {
  res.json({ isAlive: true })
})

app.use('/books', booksRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Backend server started at http://localhost:${port}`)
  })
}

export default app
