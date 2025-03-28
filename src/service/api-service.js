import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '69420',
  },
})

export const updateToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `${token}`
}

export const requests = {
  get: (url, query_params = {}, option = {}) =>
    axiosInstance.get(url, {
      params: query_params,
      ...option.config,
    }),

  post: (url, body, config = {}) =>
    axiosInstance.post(url, body, config.config),

  put: (url, body, config = {}) => axiosInstance.put(url, body, config.config),

  delete: (url, config = {}) => axiosInstance.delete(url, config.config),
}
