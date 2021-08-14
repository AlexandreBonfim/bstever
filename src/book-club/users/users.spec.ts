import { getUser, getUsersFromClub } from './users.service'
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

  describe('getUsersFromClub', () => {
    test('should return users that match club id', () => {
      expect(getUsersFromClub(2)).toEqual(expect.arrayContaining(
        [
          {
            userId: 1,
            name: "This is a test user for tests",
            clubIds: [2, 4, 5],
            authorIds: [4, 12, 55, 63],
            genres: ["Autobiography", "Biography", "The Arts", "Current Affairs"]
          },
          {
            userId: 2,
            name: "This is another test user for tests",
            clubIds: [1, 2],
            authorIds: [1, 3, 48, 49, 53],
            genres: ["Children\"s", "General", "Food", "Young Adult"]
          }
        ]
      ))
    })

    test('should throw an error if club id has no users', () => {
      expect(() => getUsersFromClub(10)).toThrowError()
    })
  })
})
