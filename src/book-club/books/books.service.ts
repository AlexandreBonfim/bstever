import { Book, Priority, Suggestion } from './books.types'
import { getBooks } from './books.store'

import { User } from '../users/users.types'
import { getUsersFromClub } from '../users/users.service'

const priority = (id: number): Priority => {
  const authorIds = [].concat(...getUsersFromClub(id).map((x => x.authorIds)))
  const genres = [].concat(...getUsersFromClub(id).map((x => x.genres)))

  // Remove duplicates
  const uniqueAuthorIds = new Set(authorIds)
  const uniqueGenres = new Set(genres)

  return {
    // Convert back to array
    authorIds: [...uniqueAuthorIds],
    genres: [...uniqueGenres]
  }
}

// b. Each matching criteria should sort the books by Publication Year.
const sortByYear = (books: Book[]): Book[] => {
  return books.sort((a, b) => a.publicationYear - b.publicationYear).slice(0, 3) // remove 3 first items
}

const getMany = (): Book[] => {
  return getBooks()
}

// d. The list should display the Title, Author (formatted to {firstName} {lastName}) and the matching Genre(s) of each Book.
const formattedResponse = (books: Book[]): Suggestion[] => {
  const formatted: Suggestion[] = []

  books.forEach(book => {
    const author = book.author.split(',')
    const  suggestion: Suggestion = {
      title: book.title,
      author: `${author[1]} ${author[0]}`,
      genres: book.genres
    }

    formatted.push(suggestion)
  })

  return formatted
}

const getSuggestions =  (user: User, clubId: number): any => {
  let result: Suggestion[] = []

  const books = getMany()
  const { authorIds, genres: userGenres } = user

  /**
  * Books 1-3: Matching all shared Authors (prioritized by number of users sharing the same Author) of all Users in the Club.
  *   If none are shared, fallback to most popular by all Users.
  */
  const booksFromAuthorPriority = sortByYear(books.filter(({ authorId }) => (priority(clubId).authorIds).includes(authorId)))

  result = [...formattedResponse(booksFromAuthorPriority)]

  return result
}

export { getSuggestions }


