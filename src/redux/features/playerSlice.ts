import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Item } from '../../types'

interface PlayerState {
  currentSongs: []
  currentIndex: number
  isActive: boolean
  isPlaying: boolean
  activeSong: Item
  genreListId: string
}

type ActiveSong = {
  song: Item
  i: number
}

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<ActiveSong>) => {
      state.activeSong = action.payload.song
      state.currentIndex = action.payload.i
      state.isActive = true
    },

    nextSong: (state, action) => {},

    prevSong: (state, action) => {},

    playPause: (state, action) => {},

    selectGenreListId: (state, action) => {},
  },
})

export const {
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
  setActiveSong,
} = playerSlice.actions

export const selectPlayer = (state: RootState) => state.player

export default playerSlice.reducer
