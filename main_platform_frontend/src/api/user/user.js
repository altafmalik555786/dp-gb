import axios from 'axios'
import { baseUrl } from '../const'
import { BaseApi } from '../baseApi'

class UserApi extends BaseApi {

  getListings = async () => {
    try {
      const response = await axios.get(`${baseUrl}home/listing/`)
      return response.data
    } catch (error) {
      throw error
    }
  }

}

export default UserApi
