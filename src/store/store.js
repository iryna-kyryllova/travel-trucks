import { configureStore } from '@reduxjs/toolkit'
import campersReducer from './campers/slice'
import favoritesSlice from './favorites/slice'

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesSlice
  }
})
