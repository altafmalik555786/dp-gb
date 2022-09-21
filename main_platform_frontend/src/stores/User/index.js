import { toJS } from 'mobx'
import { flow, types } from 'mobx-state-tree'
import { userApi } from '../../api'

const User = types.model({
  id: types.maybeNull(types.number),
  title: types.maybeNull(types.string),
  business_type: types.maybeNull(types.string),
  icon: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  address: types.maybeNull(types.string),
  status: types.maybeNull(types.boolean),
  rating: types.maybeNull(types.string),
  pricing: types.maybeNull(types.string),
  web: types.maybeNull(types.string),
  created: types.maybeNull(types.string),
})

export const userStore = types
  .model({
    listingData: types.maybeNull(types.array(User)),
    loading: types.optional(types.boolean, false),
  })
  .views((self) => ({
    get getListings() {
      return toJS(self.listingData)
    },
    get isLoading() {
      return self.loading
    },
    get isLoadingVerifyEmail() {
      return self.loadingVerifyEmail
    },
  }))
  .actions((self) => {

    const loadListings = flow(function* () {
      let response = null
      self.loading = true
      try {
        self.loading = true
        const res = yield userApi.getListings()
        console.log("res",  toJS(res))
        self.listingData = res
        response = res

      } catch (error) {
        const { status, data } = error.response
        console.log("error", error)
        throw error
      } finally {
        self.loading = false
        return response
      }
    })

    const setListings = flow(function* (data) {
      let response = null
      self.loading = true
      try {
        self.loading = true
        const res = yield userApi.setListings(data)
        response = res
      } catch (error) {
        const { status, data } = error.response
        console.log("error", error)
        throw error
      } finally {
        self.loading = false
        return response
      }
    })

    return {
      loadListings,
      setListings,
    }
  })

export function initUserStore() {
  return userStore.create({})

}
