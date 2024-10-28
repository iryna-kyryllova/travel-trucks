import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {}
  // location: '',
  // vehicleType: '',
  // equipment: {
  //   transmission: '',
  //   engine: '',
  //   AC: false,
  //   bathroom: false,
  //   kitchen: false,
  //   TV: false,
  //   radio: false,
  //   refrigerator: false,
  //   microwave: false,
  //   gas: false,
  //   water: false
  // }
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload
    },
    // setVehicleType: (state, { payload }) => {
    //   state.vehicleType = payload
    // },
    // setEquipment: (state, { payload }) => {
    //   state.equipment = { ...state.equipment, ...payload }
    // },
    resetFilters: (state) => {
      state.filters = {}
    }
  }
})

export const { setFilters } = filtersSlice.actions

export default filtersSlice.reducer
