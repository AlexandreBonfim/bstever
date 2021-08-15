import { getSuggestions, getMany, exportedForTesting } from './books.service'
import {
  mockSuggestionResponse,
  mockSortByYearResponse,
  mockBooks,
  mockPriorityResponse,
  mockFormattedResponse
} from './books.mock'

jest.mock('./books.store', () => ({
  getBooks: jest.fn(() => mockBooks)
}))

const { sortByYear, priority, formattedResponse, mostPopularByUsers } = exportedForTesting

const mockUser = {
    userId: 1,
    name: "This is a test user for tests",
    clubIds: [2, 4, 5],
    authorIds: [4, 12, 5, 64],
    genres: ["Children\\'s", 'Fiction', "Biography", "The Arts", "Current Affairs"]
}

describe('Books Module', () => {
  describe('priority', () => {
    test('should return all the users', () => {
      expect(priority(4)).toEqual(mockPriorityResponse)
    })
  })

  describe('formattedResponse', () => {
    test('should return books formatted', () => {
      expect(formattedResponse(mockBooks)).toEqual(mockFormattedResponse)
    })

    test('should throw an error if book list is empty', () => {
      expect(() => formattedResponse([])).toThrowError()
    })
  })

  describe('sortByYear', () => {
    test('should return books sorted by year', () => {
      expect(sortByYear(mockBooks)).toEqual(mockSortByYearResponse)
    })

    test('should throw an error if book list is empty', () => {
      expect(() => sortByYear([])).toThrowError()
    })
  })

  describe('getMany', () => {
    test('should return all the books', () => {
      expect(getMany()).toEqual(mockBooks)
    })
  })

  // describe('getSuggestions', () => {
  //   test('should return list of books suggested', () => {
  //     expect(getSuggestions(mockUser, 2)).toEqual(expect.arrayContaining(mockSuggestionResponse))
  //   })
  // })
})
