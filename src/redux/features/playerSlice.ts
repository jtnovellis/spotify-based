import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface PlayerState {
  value: number
}

const initialState: PlayerState = {
  value: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = playerSlice.actions

export const selectCount = (state: RootState) => state.player.value

export default playerSlice.reducer
