import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase.config'

import type { Character } from '@/models/types'

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'characters'))

    const characterList = [] as Character[]

    querySnapshot.forEach((doc) => {
      characterList.push({
        id: doc.id,
        name: doc.data().name,
        books: doc.data().books,
        pageInfo: doc.data().pageInfo,
      })
    })

    return characterList
  } catch (err: any) {
    console.error('An error has occurred in the fetchCharacters function call')
    throw new Error(err.message)
  }
}

export async function fetchCharactersByBookId(
  id: string
): Promise<Character[]> {
  try {
    const characterCollection = collection(db, 'characters')
    const characterSnapshot = await getDocs(
      query(characterCollection, where('books', 'array-contains', id))
    )

    const characterList = [] as any[]

    characterSnapshot.docs.map((doc) =>
      characterList.push({ ...doc.data(), id: doc.id })
    )

    return characterList
  } catch (err: any) {
    console.error(
      'An error has occurred in the fetchCharactersByBookId function call'
    )
    throw new Error(err.message)
  }
}
