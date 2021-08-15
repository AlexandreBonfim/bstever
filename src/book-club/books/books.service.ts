import { Book, Priority, Suggestion } from './books.types'
import { getBooks } from './books.store'

import { User } from '../users/users.types'
import { getMany as allUsers, getUsersFromClub } from '../users/users.service'

// Each matching criteria should sort the books by Publication Year.
const sortByYear = (books: Book[]): Book[] => {
  if (books.length <= 0) throw new Error('No books to be sorted')

  return books.sort((a, b) => a.publicationYear - b.publicationYear).slice(0, 3) // remove 3 first items.
}

// Get authors & genres from users in clubId
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

// The list should display the Title, Author (formatted to {firstName} {lastName}) and the matching Genre(s) of each Book.
const formattedResponse = (books: Book[]): Suggestion[] => {
  if (books.length <= 0) throw new Error('No books to be formatted')

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

// Books most popular by all Users.
const mostPopularByUsers = (data: any[]): any => {
  const counted = data.reduce((acc, curr) => {
    if (curr in acc) {
        acc[curr]++
    } else {
        acc[curr] = 1
    }

    return acc;
  }, {});

  const popular = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);

  // return popular;

  return counted
}

const getMany = (): Book[] => {
  return getBooks()
}

const getSuggestions = (user: User, clubId: number): Suggestion[] => {
  const books = getMany()
  const { authorIds, genres: userGenres } = user
  const priorityByClub = priority(clubId)

  /**
  * Books 1-3: Matching all shared Authors (prioritized by number of users sharing the same Author) of all Users in the Club.
  *   If none are shared, fallback to most popular by all Users.
  */
  const booksFromAuthorsPriority = sortByYear(books.filter(({ authorId }) => (priorityByClub.authorIds).includes(authorId)))

  // @todo : return only one or list of popular in case of === result
  // if (booksFromAuthorsPriority.length <= 0) {
  //   const authors = [].concat(...allUsers().map((x => x.authorIds)))

  //   mostPopularByUsers(authors)
  // }

  /**
  * Books 4-6: Matching all shared Genres (prioritized by number of users sharing the same Genres) of all Users in the Club.
  *   If none are shared, fallback to most popular by all Users.
  */
  const booksFromGenresPriority = sortByYear(books.filter(({ genres }) => genres.some(genre => priorityByClub.genres.includes(genre))))

  // @todo : return only one or list of popular in case of === result
  // if (booksFromAuthorsPriority.length <= 0) {
  //   const authors = [].concat(...allUsers().map((x => x.authorIds)))

  //   mostPopularByUsers(authors)
  // }

  /**
  * Books 7-9: Matching all Authors of the specified User.
  */
  const authorFromUser = sortByYear(books.filter(({ authorId }) => authorIds.includes(authorId)))

  /**
  * Books 10-12: Matching all Genres of the specified User.
  // */
  const authorFromGenres = sortByYear(books.filter(({ genres }) => genres.some(genre => userGenres.includes(genre))))

  /**
  * Books 13-15: Matching all Authors of the Club’s User that are not shared between all of the Club’s Users.
  */
  const booksFromAuthorsNotShared = sortByYear(books.filter(({ authorId }) => !(priority(clubId).authorIds).includes(authorId)))// @ todo logic wrong not in users instead priority

  return [ // @todo The entire list should not contain any duplicate entries.
    ...formattedResponse(booksFromAuthorsPriority),
    ...formattedResponse(booksFromGenresPriority),
    ...formattedResponse(authorFromUser),
    ...formattedResponse(authorFromGenres),
    ...formattedResponse(booksFromAuthorsNotShared)
  ]
}

export { getSuggestions, getMany }

export const exportedForTesting = { sortByYear, priority, formattedResponse, mostPopularByUsers}

