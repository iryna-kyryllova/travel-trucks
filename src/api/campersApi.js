import axios from 'axios'

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'
const CAMPERS_LIMIT = 4

axios.defaults.baseURL = BASE_URL

export const fetchCampersApi = async (page, filters = {}) => {
  const params = {
    limit: CAMPERS_LIMIT,
    page,
    ...filters
  }

  const { data } = await axios.get('/campers', { params })
  return data
}

export const fetchCamperApi = async (id) => {
  const { data } = await axios.get(`/campers/${id}`)
  return data
}
