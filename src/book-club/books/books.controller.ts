import express, { Router, Request, Response, NextFunction } from 'express'
import { getUser } from '../users/users.service'
import { User } from '../users/users.types'
import { getSuggestions } from './books.service'


const routes: Router = express.Router()

// Middleware
const verifyRequest = (req: Request, res: Response, next: NextFunction) => {
  const { userId, clubId } = req.query

  if (!userId) return res.status(500).json({message :'Missing user id'})
  if (!clubId) return res.status(500).json({message :'Missing club id'})

  const user: User = getUser(Number(userId))

  if (!user) return res.status(400).json({message :'User not found'})

  res.locals.user = user
  res.locals.clubId = Number(clubId)

  return next();
}

routes.get('/suggestions', verifyRequest,(req: Request, res: Response, next: NextFunction) => {
  const { locals: { user, clubId }} = res;
  const result = getSuggestions(user, clubId)

  res.status(200).json(result)
})

export default routes
