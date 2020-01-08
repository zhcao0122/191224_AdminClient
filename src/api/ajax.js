/**
 * 封装的能发送ajax请求的函数
 */
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //得到请求方式和请求体数据
    const {method, data} = config
    //处理post请求，将data对象转换成query参数格式字符串
    if(method.toLowerCase() === 'post' && typeof data === 'object'){
        config.data = qs.stringify(data)
    }

    return config
  })

//添加响应拦截器
//在请求返回之后且在我们指定的请求回调函数之前
axios.interceptors.response.use(function (response) {
  return response.data //返回的结果就会交给我们指定的请求响应的回调函数
}, function (error) {//统一处理所有请求的异常错误
  message.error('请求出错'+error.message)
  //返回一个padding状态的promise，中断promise链
  return  new Promise(() => {})
})

export default axios