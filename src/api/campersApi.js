import axios from 'axios'

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'
const CAMPERS_LIMIT = 4

axios.defaults.baseURL = BASE_URL

const transformFilters = (filters) => {
  const params = {}

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      params[key] = value.join(',')
    } else {
      params[key] = value
    }
  })

  return params
}

export const fetchCampersApi = async (page, filters = {}) => {
  const filtersParams = transformFilters(filters)

  const params = {
    limit: CAMPERS_LIMIT,
    page,
    ...filtersParams
  }

  const { data } = await axios.get('/campers', { params })
  return data
}
