import { User } from './users.types'

export const mockUsers: User[] = [
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
  },
  {
    userId: 3,
    name: "This is another test user for tests",
    clubIds: [1, 3, 5],
    authorIds: [1, 4, 55, 67],
    genres: ["Crime", "Thriller", "Adventure", "Romance", "Fantasy"]
  }
]

