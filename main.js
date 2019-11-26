import Vue from 'vue'
import App from './App'
import faicon from './components/fa-icon/fa-icon.vue'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.config.productionTip = false
Vue.component('faicon',faicon)
App.mpType = 'app'

Vue.component('cu-custom',cuCustom)
const app = new Vue({
    ...App
})
app.$mount()
