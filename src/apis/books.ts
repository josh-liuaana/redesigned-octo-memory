import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'

import type { Book } from '@/models/types'

export async function fetchBooks(): Promise<Book[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'books'))

    const bookList = [] as Book[]

    querySnapshot.forEach((doc) => {
      bookList.push({
        id: doc.id,
        name: doc.data().name,
        author: doc.data().author,
        pages: doc.data().pages,
        series: doc.data().series,
      })
    })

    return bookList
  } catch (err: any) {
    console.error('An error has occurred in the fetchBooks function call')
    throw new Error(err.message)
  }
}

export async function fetchSingleBook(id: string): Promise<Book> {
  try {
    console.log('fetching single book...')
    const book = await getDoc(doc(db, 'books', id))
    return { ...book.data(), id } as Book
  } catch (err: any) {
    console.error('An error has occurred in the fetchBooks function call')
    throw new Error(err.message)
  }
}
