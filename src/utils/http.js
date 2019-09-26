import axios from 'axios';
import { Message } from 'element-ui';
var ismessage = true

const Axios = axios.create({
  baseURL: '/', // 因为我本地做了反向代理
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json'
  }
});

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  (res) => {
    // 登录超时，返回登录
    if (res.data.status === 504) {
      if (ismessage) {
        Message(res.data.msg);
      }
      ismessage = false
      setTimeout(() => {
        window.location.href = '/#/login';
      }, 2000);
    }
    // 对响应数据做些事
    return res.data;
  },
  (error) => {
    // 返回 response 里的错误信息
    return Promise.reject(error);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios });
  }
};
