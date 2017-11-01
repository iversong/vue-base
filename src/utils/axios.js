/**
 * Created by songliang on 17/10/12.
 * 封装axios实现鉴权,拦截,提示等HTTP服务
 * https://github.com/axios/axios
 */

import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import router from '../router'

const Axios = axios.create({
  baseURL: '/', // 请求根路径
  timeout: 10000,
  responseType: 'json',
  withCredentials: false, // 设置跨域请求为允许带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
  // 在发送请求之前做某件事
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    // 序列化
    config.data = qs.stringify(config.data)
  }
  // 若是有做鉴权token , 就给头部带上token
  if (localStorage.token) {
    config.headers.Authorization = '' + localStorage.token
  }
  return config
}, error => {
  Toast.fail(error)
  return Promise.reject(error.data.error.message)
})

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
  // 对响应数据做些事
  // if (res.data && !res.data.success) {
  //   Toast.fail(res.data.error.message)
  //   return Promise.reject(res.data.error.message)
  // }
  return res
}, error => {
  console.log(error.response)
  // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
  if (error.response.status === 401) {
    Toast.fail(error.response.data.message)
    // router.push({
    //   path: '/error/403'
    // })
  }
  if (error.response.status === 403) {
    router.push({
      path: '/error/403'
    })
  }
  if (error.response.status === 500) {
    router.push({
      path: '/error/500'
    })
  }
  if (error.response.status === 502) {
    router.push({
      path: '/error/502'
    })
  }
  if (error.response.status === 404) {
    router.push({
      path: '/error/404'
    })
  }
  // 返回 response 里的错误信息
  // let errorInfo =  error.data.error ? error.data.error.message : error.data;
  return Promise.reject(error.response.data)
})

// 对axios的实例封装成一个plugin,挂载到Vue实例
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}
