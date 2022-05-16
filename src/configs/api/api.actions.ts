import { Axios } from './api.config'

/*
API request handler
 */
const apiActions = {
  get(endpoint: string, params?: any) {
    return new Promise((resolve, reject) => {
      Axios.get(`${endpoint}`, { params })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => reject(error.response))
    })
  },

  post(endpoint: string, payload: any, type = 'json') {
    return new Promise((resolve, reject) => {
      if (type === 'json') {
        Axios.post(`${endpoint}`, payload)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            console.log('api post error: ', error, error.response)
            reject(error.response)
          })
      } else {
        Axios.post(`${endpoint}`, payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            // accept: 'application/json',
          },
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            console.log('api post error: ', error, error.response)
            reject(error.response)
          })
      }
    })
  },

  put(endpoint: string, payload: any) {
    return new Promise((resolve, reject) => {
      Axios.put(`${endpoint}`, payload)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => reject(error.response))
    })
  },

  patch(endpoint: string, payload: any) {
    return new Promise((resolve, reject) => {
      Axios.patch(`${endpoint}`, payload)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => reject(error.response))
    })
  },

  delete(endpoint: string, params?: any) {
    return new Promise((resolve, reject) => {
      Axios.delete(`${endpoint}`, { params })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => reject(error.response))
    })
  },
}

export default apiActions
