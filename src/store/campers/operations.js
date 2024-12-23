import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCampersApi } from 'api/campersApi'

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const { page } = thunkAPI.getState().campers
    const { filters } = thunkAPI.getState().filters
    const { items, total } = await fetchCampersApi(page, filters)
    return { items, total }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
