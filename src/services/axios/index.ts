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
    // Errors handling
    const { response } = error
    const { data } = response
    if (data) {
        // notification.warning({
        //   message: data.message,
        // })
        return Promise.reject(data)
    }
    return Promise.reject(response)
})

export default apiClient