import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {}
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload
    },
    resetFilters: (state) => {
      state.filters = {}
    }
  }
})

export const { setFilters } = filtersSlice.actions

export default filtersSlice.reducer
