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
      const response = await axios.post(`${baseUrl}home/listing/`, data, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  setListingReview = async (id, data) => {
    try {
      const response = await axios.post(`${baseUrl}reviews/listing/${id}/`, data, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

  getSingleListings = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}home/listing/${id}`, {
        headers: { Authorization: getAuthorizationHeader() },
        cancelToken: this.cancelToken,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }

}

export default UserApi
