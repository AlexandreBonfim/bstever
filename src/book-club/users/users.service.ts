import { User } from './users.types'
import { getUsers } from './users.store'

const getUser = (id: number): User => {
  const user: User = getUsers().find((item) => item.userId === id)

  if (!user) {
    throw new Error('User not found')
  }

  return user
}

export { getUser }
