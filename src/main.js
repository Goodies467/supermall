import Vue from 'vue'
import App from './App.vue'
//接router里的index.js里的第四步，进行router挂载
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
//  项目开发步骤
//1. 划分目录结构
//2. 引用了两个css文件
//3. 配置vue.config.js和.editorconfig(配置路径别名和对代码进行风格统一)
//4. 项目的模块划分: tabbar -> 路由映射关系