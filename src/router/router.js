import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Notes'
        },
        component: () => import('@/views/TodoPage')
    },
    {
        path: '/label/:activeLabelName',
        meta: {
            title: 'Notes'
        },
        component: () => import('@/views/TodoPage'),
        props: true
    },
    {
        path: '/settings/',
        name: 'Settings',
        meta: {
            title: 'Settings'
        },
        component: () => import ('@/views/SettingsPage')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
            title: 'Not found'
        },
        component: () => import('@/views/NotFoundPage')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router