import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import CategoryPage from './views/CategoryPage.vue'
import ProductPageVue from './views/ProductPage.vue'
import CheckoutPage from './views/CheckoutPage.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/category/:name', component: CategoryPage },
        { path: '/product/:slug', component: ProductPageVue },
        { path: '/checkout', component: CheckoutPage },
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
