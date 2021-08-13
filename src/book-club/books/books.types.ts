export type Book = {
  bookId: number,
  title: string,
  authorId: number,
  author: string,
  publicationYear: number,
  genres: Array<string>,
}

export type Suggestion = {
  title: string,
  author: string,// formatted to {firstName} {lastName}
  genres: Array<string>,
}
