import store from '../../../data/users.json'
import { User } from './users.types'

const getUsers = (): User[] => store.users

export { getUsers }
