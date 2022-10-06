import axios from 'axios'
import { baseUrl } from '../const'
import { BaseApi } from '../baseApi'
import { getAuthorizationHeader } from 'api/common-utils'

class UserApi extends BaseApi {

  getListings = async () => {
    try {
      const response = await axios.get(`${baseUrl}home/listing/`, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  setListings = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}home/listing/`, data)
      return response.data
    } catch (error) {
      throw error
    }
  }

}

export default UserApi
