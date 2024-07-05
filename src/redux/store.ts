import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import bookSlice from './features/bookSlice'
import currentBookSlice from './features/currentBookSlice'
import characterSlice from './features/characterSlice'

export const store = configureStore({
  reducer: {
    books: bookSlice,
    currentBook: currentBookSlice,
    characters: characterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
