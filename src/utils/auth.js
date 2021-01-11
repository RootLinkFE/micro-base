// src/utils/auth.js

import { Message } from 'element-ui'

// import Request from '../request'

const DEFAULT_LOGOUT_MESSAGE = '登录信息已过期，需要重新登录'
const TOKEN = 'token'

export const setToken = (token) => {
  const value = { Authorization: `Bearer ${token}` }
  localStorage.setItem(TOKEN, JSON.stringify(value))
}

export const getToken = () => {
  const value = localStorage.getItem(TOKEN)
  return value ? JSON.parse(value) : {}
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN)
}

export const logout = () => {
  removeToken()
  location.reload()
}

export const logoutWithErrorMessage = (message = DEFAULT_LOGOUT_MESSAGE) => {
  const duration = 2000
  const opts = {
    duration,
    message: `${message}，即将跳转到登录页面...`,
    type: 'error',
  }

  Message(opts)
  setTimeout(logout, duration)
}
