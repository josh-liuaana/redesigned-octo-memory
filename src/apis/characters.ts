import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
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
