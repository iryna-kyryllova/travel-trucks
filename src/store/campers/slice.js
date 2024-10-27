import { createSlice } from '@reduxjs/toolkit'
import { fetchCampers } from './operations'

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.items = payload
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
  }
})

export default campersSlice.reducer
