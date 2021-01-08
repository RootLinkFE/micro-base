// src/api/auth.js

import axios from 'axios'

import * as Auth from '../utils/auth'

const ACCOUNT_LOGIN = '/account/login'

let source = axios.CancelToken.source()

const baseURL = process.env.VUE_APP_API_AUTH
const timeout = 60 * 1000
const instance = axios.create({baseURL, timeout})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.request.use(
  (config) => {
    Object.assign(config.headers, Auth.getToken())
    config.cancelToken = source.token
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error

    if (response) {
      const { status } = response
      const { href } = location

      if (status === 401 && !href.includes(ACCOUNT_LOGIN)) {
        source.cancel()
        source = axios.CancelToken.source()
        Auth.logoutWithErrorMessage()
      }
    }

    if (axios.isCancel(error)) {
      console.log('后续请求已取消')
    }

    return Promise.reject(error)
  }
)

export default instance
