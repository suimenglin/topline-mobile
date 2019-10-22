// 导入 axios
import axios from 'axios'
// 导入 store
import store from '@/store'

// 创建一个 axios 实例
const instance = axios.create({
  // 设置基准地址
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/'
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (store.state.user) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    // config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 相应拦截器
instance.interceptors.response.use(function (response) {
  // 响应回来的数据
  return response.data.data
//   return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

const Myplugs = {}
Myplugs.install = function (Vue) {
  Vue.prototype.$http = instance
}

export default Myplugs
