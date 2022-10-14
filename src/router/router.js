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
        path: '/tags/:activeTodoListName',
        meta: {
            title: 'Notes'
        },
        component: () => import('@/views/TodoPage'),
        props: true
    },
    {
        path: '/sign-in',
        name: 'Login',
        meta: {
            title: 'Sign in'
        },
        component: () => import('@/views/LoginPage')
    },
    {
        path: '/sign-up',
        name: 'Register',
        meta: {
            title: 'Sign up'
        },
        component: () => import('@/views/RegisterPage')
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