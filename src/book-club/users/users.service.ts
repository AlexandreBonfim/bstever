import { User } from './users.types'
import { getUsers } from './users.store'

const getUser = (id: number): User => {
  const user: User = getUsers().find(({ userId }) => userId === id)

  if (!user) {
    throw new Error('User not found')
  }

  return user
}

const getUsersFromClub = (id: number): User[] => {
    const users = getUsers().filter(({ clubIds }) => clubIds.includes(id))

    if (users.length <= 0) {
      throw new Error('No user with club id')
    }

    return users
}

const getMany = (): User[] => {
  return getUsers()
}

export { getUser, getMany, getUsersFromClub }
