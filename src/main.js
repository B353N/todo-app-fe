import './assets/main.css'
import { createPinia } from "pinia";
import routes from "@/router/index.js";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(routes)
app.mount('#app')

