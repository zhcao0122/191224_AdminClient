/**
 * 包含应用中所有请求接口的函数：接口请求函数
 */

 import ajax from './ajax'

 //请求登录
 export const reqLogin = (username , password) => ajax.post('./login',{username, password})
    // ajax({
    //     method: 'post',
    //     url: './login',
    //     data: { //data是对象的时候 默认使用json格式的请求体携带参数数据
    //         username,
    //         password
    //     }
    //    // data: qs.stringify({username , password})
    // })
    

//  const name = 'admin'
//  const psd = 'admin'
//  reqLogin(name , psd).then(result => {
//     //  const result = response.data
//      console.log('请求成功', result)
//  })