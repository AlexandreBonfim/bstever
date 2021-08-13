import { getUser } from './users.service'
import { mockUsers } from './users.mock'

jest.mock('./users.store', () => ({
  getUsers: jest.fn(() => mockUsers)
}))

describe('Users Module', () => {
  describe('getUser', () => {
    test('should return the first user', () => {
      expect(getUser(1)).toEqual(mockUsers[0])
    })

    test('should throw an error if user does not exist', () => {
      expect(() => getUser(5)).toThrowError()
    })
  })
})
