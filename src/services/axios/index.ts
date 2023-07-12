import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://notion-api-proxy.talgarmarlis.workers.dev',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
})

apiClient.interceptors.request.use(request => {
    return request
})

apiClient.interceptors.response.use(undefined, error => {
    return Promise.reject(error)
})

export default apiClient