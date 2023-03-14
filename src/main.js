import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import App from './App.vue'
import router from './router'
import axios from 'axios';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import './assets/css/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createI18n } from 'vue-i18n';
import messages from './messages'
 const i18n = createI18n({
    locale:localStorage.getItem("locale") ?? "en", // set locale
    fallbackLocale: 'ar', // set fallback locale
    messages,
 })
window.toastr = toastr ;
const app = createApp(App)
const pinia = createPinia()

app.component('header-tag',HeaderComponent)
app.component('footer-tag',FooterComponent)
window.axios = axios;
axios.defaults.baseURL="http://localhost:3000"
app.use(i18n)
app.use(pinia)
app.use(router)
pinia.use(context => {
    const storeId = context.store.$id
    const serializer = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
    }
    const data = serializer.deserialize(window.localStorage.getItem(storeId))
    if(data) {
        context.store.$patch(data)
    }
    context.store.$subscribe((m, s) => {
        window.localStorage.setItem(storeId,serializer.serialize(s))
    })
})
app.mount('#app')
