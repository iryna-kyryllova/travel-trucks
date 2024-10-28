import { createSlice } from '@reduxjs/toolkit'
import { getCamper } from './operations'

const initialState = {
  camper: null,
  isLoading: false,
  error: null
}

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCamper.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getCamper.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.camper = payload
      })
      .addCase(getCamper.rejected, (state, { payload }) => {
        state.isLoading = false
        state.camper = null
        state.error = payload
      })
  }
})

export default camperSlice.reducer
