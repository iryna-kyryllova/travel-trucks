import { createSlice } from '@reduxjs/toolkit'
import { fetchCampers } from './operations'

const initialState = {
  campers: [],
  page: 1,
  pagination: true,
  isLoading: false,
  error: null
}

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.campers = state.page === 1 ? payload.items : [...state.campers, ...payload.items]
        state.pagination = state.campers.length < payload.total
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
  }
})

export const { incrementPage } = campersSlice.actions

export default campersSlice.reducer
