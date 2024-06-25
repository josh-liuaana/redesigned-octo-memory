import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'

import type { Book } from '@/models/types'

export async function fetchBooks(): Promise<Book[]> {
  const querySnapshot = await getDocs(collection(db, 'books'))

  const bookList = [] as Book[]

  querySnapshot.forEach((doc) => {
    bookList.push({
      id: doc.id,
      name: doc.data().name,
      author: doc.data().author,
    })
  })

  return bookList
}
