import './styles/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router/router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
