import { toJS } from 'mobx'
import { flow, types } from 'mobx-state-tree'
import { userApi } from '../../api';
const listingBusinessModal = types.model({
  id: types.maybeNull(types.string),
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
  updated_detail: types.maybeNull(types.string),
})

export const userStore = types
  .model({
    listingData: types.maybeNull(types.array(listingBusinessModal)),
    singleListingData: types.maybeNull(listingBusinessModal),
    filteredCategory: types.maybeNull(types.array(listingBusinessModal)),
    category: types.maybeNull(types.string),
    loading: types.optional(types.boolean, false),
  })
  .views((self) => ({
    // @ts-ignore
    get getListings() {
      return toJS(self.listingData)
    },
    // @ts-ignore
    get isLoading() {
      return self.loading
    },
    // @ts-ignore
    get isLoadingVerifyEmail() {
      // @ts-ignore
      return self.loadingVerifyEmail
    },
    // @ts-ignore
    get getFilteredCategory() {
      return toJS(self.filteredCategory);
    },
    // @ts-ignore
    get getCategory() {
      return self.category;
    },
    get getSingleListing() {
      return toJS(self.singleListingData);
    },
    
  }))
  .actions((self) => {

    const loadListings = flow(function* () {
      let response = null
      self.loading = true
      try {
        self.loading = true
        const res = yield userApi.getListings()
        self.listingData = res
        self.filteredCategory = res;
        response = res

      } catch (error) {
        // @ts-ignore
        self.filteredCategory = [];
        // @ts-ignore
        const { status, data } = error.response
        console.log("error", error)
        throw error
      } finally {
        self.loading = false
        return response
      }
    })


    const loadSingleListings = flow(function* (id) {
      let response = null
      self.loading = true
      try {
        self.loading = true
        const res = yield userApi.getSingleListings(id)
        self.singleListingData = res
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

    const loadCategory = flow(function* (c) {
      self.category = c;
      let filteredData = self.getListings?.filter(item => item?.business_type?.toLowerCase() == c?.toLowerCase());
      // @ts-ignore
      self.filteredCategory = filteredData;
    })

    const loadFiltered = flow(function* (data = []) {
      self.filteredCategory = data;
    })


    const setListings = flow(function* (data) {
      let response = null
      try {
        self.loading = true
        const res = yield userApi.setListings(data)
        response = res
      } catch (error) {
        const { status, data } = error.response
        console.log("error", error)
        throw error
      } finally {
        return response
      }

    })


    return {
      loadListings,
      loadCategory,
      loadFiltered,
      setListings,
      loadSingleListings,
    }
  })

export function initUserStore() {
  return userStore.create({})

}
