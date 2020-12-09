import Axios from 'axios'
import Vue from 'vue'
Axios.defaults.baseURL = 'https://curso-vue-9b843.firebaseio.com/'
Vue.prototype.$http = Axios
