import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((id) => id !== payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
