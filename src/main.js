import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import  { axiosPiniaPlugin } from '@/stores/plugins/axiosPlugin'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import router from '@/router/router'

const pinia = createPinia()
pinia.use(axiosPiniaPlugin)

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
