/**
 * 操作local数据的工具函数模块
 * 
 */

 import store from 'store'

 const USER_KEY = 'user_key'

 export default {
     /**
      * 保存user
      */
     saveUser(user){
         //localStorage.setItem(USER_KEY , JSON.stringify(user))
         store.set(USER_KEY , user)
     },

     /**
      * 返回一个user对象，如果不存在则返回一个空对象
      */
     getUser(){
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
     },

     /**
      * 删除user
      */
     removeUser(){
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
     },
 }