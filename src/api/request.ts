import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import { ElMessage } from 'element-plus'

// 后端统一返回结构（与 Spring Boot 约定）
export interface ApiResult<T = unknown> {
  code: number
  message: string
  data: T
}

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 15000,
})

// 请求拦截：注入 token
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截：统一错误提示（成功时原样返回 response，由 request 包装器拆 data）
service.interceptors.response.use(
  (response: AxiosResponse<ApiResult>) => {
    const res = response.data
    if (res.code !== undefined && res.code !== 0 && res.code !== 200) {
      ElMessage.error(res.message || '请求失败')
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return response
  },
  (error) => {
    const status = error?.response?.status
    const msg =
      error?.response?.data?.message ||
      (status === 401
        ? '未授权，请重新登录'
        : status === 500
          ? '服务器开小差了'
          : error.message || '网络异常')
    ElMessage.error(msg)
    return Promise.reject(error)
  },
)

export function request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  return service
    .request<ApiResult<T>, AxiosResponse<ApiResult<T>>>(config)
    .then((res) => res.data.data)
}

export default service
