import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/global.css' // global css
import '@/assets/icons' // icon
import SvgIcon from '@/components/SvgIcon'// svg component
import http from './http'
import plugins from './plugins'
import RightToolbar from "@/components/RightToolbar"



export const app = createApp(App)



app.config.globalProperties.$http = http
app.use(store).use(router).component('svg-icon', SvgIcon).use(Element,{
    size:'medium' // set element-ui default size
  }).mount('#app')
