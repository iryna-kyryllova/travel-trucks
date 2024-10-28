import axios from 'axios'

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'
const CAMPERS_LIMIT = 4

axios.defaults.baseURL = BASE_URL

export const fetchCampersApi = async (page) => {
  const { data } = await axios('/campers', {
    params: {
      limit: CAMPERS_LIMIT,
      page
    }
  })
  return data
}
