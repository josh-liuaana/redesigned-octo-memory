import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/models/types'
import { fetchBooks } from '@/apis/books'

const initialState = [] as Book[]

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (_, action: PayloadAction<Book[]>) => {
      return action.payload
    },
  },
})

export const fetchThunkBooks = () => async (dispatch: any) => {
  const res = await fetchBooks()
  dispatch(setBooks(res))
}

export const { setBooks } = bookSlice.actions
export default bookSlice.reducer
