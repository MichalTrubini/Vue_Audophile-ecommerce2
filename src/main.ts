import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheHomePage from './views/TheHomePage.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheHomePage },
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})
app.use(router)

app.mount('#app')
