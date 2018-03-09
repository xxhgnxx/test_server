import Vue from 'vue'
import App from './App'
import axios from 'axios'

import 'babel-polyfill'

// 创建axios实例
Vue.prototype.$axios = axios.create({
  baseURL: webpackDefinePlugin.ENV_DETAIL ? `//${webpackDefinePlugin.API_ROOT_PREFIXER}api.dongqiudi.com` : '/hgn', // api的base_url hgn为本地调试代理用
  timeout: 5000 // 请求超时时间
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
