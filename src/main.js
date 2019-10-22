import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 导入router
import router from '@/router'
// 导入vuex
import store from '@/store'
// 导入vant
import Vant from 'vant'
// 导入vant的样式
import 'vant/lib/index.css'
// 导入自定义插件
import AxiosPlugs from '@/utils/request.js'
// 导入字体图标
import '@/styles/index.css'
Vue.use(Vant)
Vue.use(AxiosPlugs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
