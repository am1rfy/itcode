import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import router from "./router/router";

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
