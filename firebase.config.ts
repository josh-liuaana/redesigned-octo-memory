import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC8tFgtohEr1TW1ZGkqSYWiz0CKdIufEVM',
  authDomain: 'athena-5f808.firebaseapp.com',
  projectId: 'athena-5f808',
  storageBucket: 'athena-5f808.appspot.com',
  messagingSenderId: '765099100744',
  appId: '1:765099100744:web:ddfdfd9b4a187090e4a67d',
  measurementId: 'G-HZ9R9FXYCZ',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
