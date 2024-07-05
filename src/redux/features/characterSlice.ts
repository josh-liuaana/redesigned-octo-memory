import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCharacters } from '@/apis/characters'
import { Character } from '@/models/types'

const initialState = [] as Character[] // type this correctly

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (_, action: PayloadAction<Character[]>) => {
      return action.payload
    },
  },
})

export const fetchThunkCharacters = () => async (dispatch: any) => {
  const res = await fetchCharacters()
  dispatch(setCharacters(res))
}

export const { setCharacters } = characterSlice.actions
export default characterSlice.reducer
