import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from "./Index.vue"

var routes = [
    {
        path:"/",
        name:"Index",
        component: Index
    },
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')
