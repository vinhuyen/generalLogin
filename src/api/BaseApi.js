import axios from 'axios'
import {AuthUtils} from "@/utils/localStorageUtils";
const API_ROOT = import.meta.env.VITE_API_ROOT
export default class BaseApi {
    constructor(url) {
        this.url = url
    }

    getAll(data = {}) {
        return this.get(this.url, { params: data })
    }

    getOne(id) {
        return this.get(`${this.url}/${id}`)
    }

    create(data) {
        return this.post(this.url, data)
    }

    update(id, data) {
        return this.put(id, data)
    }

    delete(id) {
        return this.del(id)
    }

    async get_with(url, params = {}) {
        try {
            const headers = this.getHeaders()
            const response = await axios.get(`${url}`, { params, headers: headers })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    async get(url, params = {}) {
        try {
            const headers = this.getHeaders()
            const response = await axios.get(`${API_ROOT}/${url}`, {
                params,
                headers: headers
            })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    async put(url, data) {
        try {
            const headers = this.getHeaders()
            const response= await axios.put(`${API_ROOT}/${url}`, data, {
                headers: headers
            })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    async post(url, data, config = {}) {
        try {
            const headers = this.getHeaders(config)
            const response = await axios.post(`${API_ROOT}/${url}`, data, {
                headers: headers
            })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    async postDataForm(url, data, config = {}) {
        try {
            const headers = this.getHeadersDataForm(config)
            const response = await axios.post(`${API_ROOT}/${url}`, data, {
                headers: headers
            })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    async putDataForm(url, data, config = {}) {
        try {
            const headers = this.getHeadersDataForm(config)
            const response = await axios.put(`${API_ROOT}/${url}`, data, {
                headers: headers
            })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    async del(url, data) {
        try {
            const headers = this.getHeaders()
            const response = await axios.delete(`${API_ROOT}/${url}`, { data, headers: headers })
            return this._responseHandler(response)
        } catch (error) {
            this._errorHandler(error)
        }
    }

    _responseHandler(response) {
        return response
    }

    _errorHandler(error) {
        if (error.response && error.response.status === 404) {
            window.$nuxt.$router.push({
                name: 'home'
            })
        } else if (error.response && error.response.status === 401) {
            window.$nuxt.$router.push({
                name: 'signin'
            })
        } else throw error
    }

    getHeaders(config = {}) {
        let headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Content-Type': 'application/json;charset=UTF-8/multipart/form-data'
        }

        if (AuthUtils.getTokenFromCookies()) {
            headers['Authorization'] = `Bearer ${AuthUtils.getTokenFromCookies()}`
        }

        if (config) {
            headers = { ...headers, ...config }
        }

        return headers
    }

    getHeadersDataForm(config = {}) {
        let headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Content-Type': 'multipart/form-data'
        }

        if (AuthUtils.getTokenFromCookies()) {
            headers['Authorization'] = `Bearer ${AuthUtils.getTokenFromCookies()}`
        }

        if (config) {
            headers = { ...headers, ...config }
        }

        return headers
    }
}
// const defaultAxiosConfig  = {
//   baseURL: API_ROOT
// }
// const BaseApi = axios.create(defaultAxiosConfig)
// BaseApi.interceptors.request.use(
//     config => {
//       config.headers.Authorization = `Bearer ${AuthUtils.getToken()}`
//       return config;
//     },
//     Promise.reject
// );
// BaseApi.interceptors.response.use(
//     response => {
//       return response;
//     },
//     (error) => Promise.reject(error.response)
// );
//
// export default BaseApi;