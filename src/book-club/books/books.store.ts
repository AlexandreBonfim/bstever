import store from '../../../data/books.json'
import { Book } from './books.types'

const getBooks = (): Book[] => store.books

export { getBooks }
