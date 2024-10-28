import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCamperApi } from 'api/campersApi'

export const getCamper = createAsyncThunk('camper/getCamper', async (id, thunkAPI) => {
  try {
    const data = await fetchCamperApi(id)
    console.log('camper', data)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
