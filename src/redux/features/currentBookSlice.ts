import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Book } from '@/models/types'
import { fetchSingleBook } from '@/apis/books'

const initialState = {} as Book

export const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    setCurrentBook: (_, action: PayloadAction<Book>) => {
      return action.payload
    },
  },
})

export const fetchThunkSingleBook = (id: string) => async (dispatch: any) => {
  const res = await fetchSingleBook(id)
  dispatch(setCurrentBook(res))
}

export const { setCurrentBook } = currentBookSlice.actions
export default currentBookSlice.reducer
