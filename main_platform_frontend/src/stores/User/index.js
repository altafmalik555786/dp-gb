import { toJS } from 'mobx'
import { flow, types } from 'mobx-state-tree'
import { userApi } from '../../api'
import { resetStore } from 'stores/root-store'

const User = types.model({
  id: types.maybeNull(types.number),
  name: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
  role: types.maybeNull(types.string),
  status: types.maybeNull(types.string),
  emailVerified: types.maybeNull(types.boolean),
  phoneVerified: types.maybeNull(types.boolean),
})

export const userStore = types
  .model({
    listingData: types.maybeNull(User),
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
        // self.listingData = res
        response = res

      } catch (error) {
        const { status } = error.response
        const { data } = error.response
        console.log("error", error)
        throw error
      } finally {
        self.loading = false
        return response
      }
    })

    return {
      loadListings,
    
    }
  })

export function initUserStore() {
  return userStore.create({})

}
