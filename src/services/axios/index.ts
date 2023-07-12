import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://notion-api-proxy.talgarmarlis.workers.dev',
    // timeout: 1000,
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