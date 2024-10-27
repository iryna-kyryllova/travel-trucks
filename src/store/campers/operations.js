import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCampersApi } from 'api/campersApi'

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const data = await fetchCampersApi()
    return data.items
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
