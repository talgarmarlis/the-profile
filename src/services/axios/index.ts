import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://np.talgarmarlis.workers.dev/v1/',
    // timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
})

apiClient.interceptors.request.use(request => {
    return request
})

apiClient.interceptors.response.use(undefined, error => {
    return Promise.reject(error)
})

export default apiClient