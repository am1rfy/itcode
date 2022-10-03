import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/TodoPage')
    },
    {
        path: '/settings/',
        name: 'Settings',
        component: () => import ('@/views/SettingsPage')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router