import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 30 * 1000,
  headers: { 'Content-Type': 'application/json' }
})

// 請求攔截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 回應攔截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: any) => {
    return Promise.reject(error.message)
  }
)

export default service
