// 封装所有对首页的请求
//对 首页所有请求的URL 进行统一的管理

// Home.vue面对home.js开发
import {request} from "./request";// 导入request

export function getHomeMultidata(){//封装一个函数，用来获取首页的多个数据
    return request({
        url:'/home/multidata'
    })

}
