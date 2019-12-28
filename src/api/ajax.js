/**
 * 封装的能发送ajax请求的函数
 */
import axios from 'axios'
import qs from 'qs'


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

export default axios