import { Suggestion, Book, Priority } from './books.types'

export const mockBooks: Book[] =  [
  {
    bookId: 1,
    title: 'This is a test user for tests',
    authorId: 8,
    author: 'Test, Dan',
    publicationYear: 2004,
    genres: [ 'Crime', 'Thriller', 'Adventure' ]
  },
  {
    bookId: 2,
    title: 'This is another test user for tests',
    authorId: 4,
    author: 'Test, J.K.',
    publicationYear: 2007,
    genres: [ "Children\\'s", 'Fiction' ]
  },
  {
    bookId: 3,
    title: 'This is another test user for tests',
    authorId: 4,
    author: 'Test, Hey',
    publicationYear: 1997,
    genres: [ "Children\\'s", "The Arts" ]
  },
  {
    bookId: 4,
    title: 'This is another test user for tests',
    authorId: 12,
    author: 'Test, J.K.',
    publicationYear: 2003,
    genres: [ "Children\\'s", 'Fiction' ]
  },
  {
    bookId: 5,
    title: 'This is another test user for tests',
    authorId: 12,
    author: 'Test, E. L.',
    publicationYear: 2012,
    genres: [ 'Romance', 'Sagas' ]
  },
  {
    bookId: 6,
    title: 'This is another test user for tests',
    authorId: 5,
    author: 'Test, J.K.',
    publicationYear: 2001,
    genres: [ "Children\\'s", "The Arts" ]
  }
]

export const mockSortByYearResponse = [
  {
     "author":"Test, Hey",
     "authorId":4,
     "bookId":3,
     "genres":[
        "Children\\'s",
        "The Arts"
     ],
     "publicationYear":1997,
     "title":"This is another test user for tests"
  },
  {
     "author":"Test, J.K.",
     "authorId":5,
     "bookId":6,
     "genres":[
        "Children\\'s",
        "The Arts"
     ],
     "publicationYear":2001,
     "title":"This is another test user for tests"
  },
  {
     "author":"Test, J.K.",
     "authorId":12,
     "bookId":4,
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "publicationYear":2003,
     "title":"This is another test user for tests"
  }
]

export const mockFormattedResponse: Suggestion[] = [
  {
    title: 'This is a test user for tests',
    author: ' Dan Test',
    genres: [ 'Crime', 'Thriller', 'Adventure' ]
  },
  {
    title: 'This is another test user for tests',
    author: ' J.K. Test',
    genres: [ "Children\\'s", 'Fiction' ]
  },
  {
    title: 'This is another test user for tests',
    author: ' Hey Test',
    genres: [ "Children\\'s", 'The Arts' ]
  },
  {
    title: 'This is another test user for tests',
    author: ' J.K. Test',
    genres: [ "Children\\'s", 'Fiction' ]
  },
  {
    title: 'This is another test user for tests',
    author: ' E. L. Test',
    genres: [ 'Romance', 'Sagas' ]
  },
  {
    title: 'This is another test user for tests',
    author: ' J.K. Test',
    genres: [ "Children\\'s", 'The Arts' ]
  }
]

export const mockPriorityResponse: Priority = {
    authorIds: [
      4, 12, 55, 63, 67, 42, 23, 30,
     50, 62, 18, 20, 46, 51, 58, 13,
     21, 49,  5, 60,  7, 34, 40, 61,
     64
   ],
   genres: [
     'Autobiography',   'Biography',
     'The Arts',        'Current Affairs',
     'Issues',          'Thriller',
     'Sagas',           'Fitness',
     'Diet',            'Humuor',
     'Young Adult',     'Humour',
     'Fiction',         'General',
     'Science',         'Fantasy',
     'Media',           'Food',
     'Popular Science', 'Children"s',
     'Crime',           'Adventure',
     'Romance',         'Fiction Fantasy'
   ]
}

export const mockSuggestionResponse: Suggestion[] = [
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" J.K. Test",
     "genres":[
        "Children\\'s",
        "Fiction"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" Dan Brown",
     "genres":[
        "Crime",
        "Thriller",
        "Adventure"
     ],
     "title":"This is another test user for tests"
  },
  {
     "author":" Dan Test",
     "genres":[
        "Crime",
        "Thriller",
        "Adventure"
     ],
     "title":"This is a test user for tests"
  }
]
