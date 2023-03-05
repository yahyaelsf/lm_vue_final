import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import '@fortawesome/fontawesome-free'

const app = createApp(App)
app.component('header-tag',HeaderComponent)
app.component('footer-tag',FooterComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
