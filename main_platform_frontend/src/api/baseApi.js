import axios from 'axios'
import { camelCase, isArray, isObject, mapKeys, mapValues } from 'lodash'
import { flushTokenFromCookies } from './common-utils'

const tokenSources = {}

function pushToLoginOrRegister() {
  flushTokenFromCookies()
  const nextUrl = window.location.pathname + window.location.search
  const isJWT = window.location.search.includes('jwtToken=')
  if (
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/signup" &&
    !isJWT
  ) {
    localStorage.setItem('nextUrl', nextUrl)
  }
  window.location.href = "/login"
}

async function onCancelRequest(config) {
  // if cancelToken is defined, we will cancel previous request and create a new token for new request.
  if (config.cancelToken) {
    const key = config.url
    let tokenSource = tokenSources[key ?? 0]
    if (tokenSource && tokenSource?.cancel) {
      tokenSource?.cancel('Operation canceled due to new request')
    }
    tokenSource = axios.CancelToken.source()
    config.cancelToken = tokenSource.token
    tokenSources[key ?? 0] = tokenSource
  }

  return config
}

async function onError(
  error,
  axiosInstance,
  errorList
) {
  let throwError = true
  // return valid/empty response and exit
  if (axios.isCancel(error)) {
    console.warn(error)
    return Promise.resolve({ data: { isCancel: true } })
  }
  // Common error handling
  const { response } = error
  if (!response) {
    console.log("be safe from no-empty")
  } else if (response.status === 401) {
    // Interceptor that retries 401s by refreshing
    // tokens automatically only if token exists.
    pushToLoginOrRegister()
  } else {
    // Any other error.
    const { status, data } = response
    if (errorList && errorList?.length) {
      const errorItem = errorList
        .filter(
          (err) => err.statusCode === status && err.errorCode === data.code
        )
        .pop()
      if (errorItem) {
        throwError = false
      }
    }
  }
  if (throwError) {
    throw error
  }
}

function keysToCamelCase(obj) {
  if (isArray(obj)) {
    // @ts-ignore
    return obj.map(keysToCamelCase)
  }
  if (!isObject(obj)) {
    return obj
  }
  const fixedKeys = mapKeys(obj, (value, key) => camelCase(key))
  // @ts-ignore
  return mapValues(fixedKeys, keysToCamelCase)
}

// tslint:disable-next-line:no-any
function transformResponse(data) {
  return keysToCamelCase(data)
}

function getDefaultTransformResponse() {
  const axiosDefault = axios.defaults.transformResponse
  if (axiosDefault == null) {
    return [transformResponse]
  }
  if (isArray(axiosDefault)) {
    // @ts-ignore
    return axiosDefault?.concat(transformResponse)
  }
  // @ts-ignore
  return [axiosDefault, transformResponse]
}

const CAMEL_CASE_DEFAULT_CONFIG = {
  transformResponse: getDefaultTransformResponse(),
}

export class BaseApi {
  axios
  axiosWithoutAuth
  cancelToken

  constructor(baseURL, errorList) {
    this.axios = axios.create({ ...CAMEL_CASE_DEFAULT_CONFIG, baseURL })
    this.axios.interceptors.response.use(
      (res) => res,
      (err) => onError(err, this.axios, errorList)
    )
    this.axios.interceptors.request.use(onCancelRequest)
    this.axiosWithoutAuth = axios.create({
      ...CAMEL_CASE_DEFAULT_CONFIG,
      baseURL,
    })
    this.cancelToken = axios.CancelToken.source().token
  }
}
