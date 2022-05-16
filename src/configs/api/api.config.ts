import {
  default as AxiosService,
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios'

import { API_DOMAIN } from './api.urls'

export const Axios: AxiosInstance = AxiosService.create()
Axios.defaults.baseURL = API_DOMAIN.NEXT_PUBLIC_CONVOSIGHT_API_URL
Axios.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    let access_token: any = ''

    if (config.headers) {
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`
      }
      config.headers.Accept = 'application/json'
      if (config.headers['Content-Type'] !== 'multipart/form-data') {
        config.headers['Content-Type'] = 'application/json'
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

Axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)
