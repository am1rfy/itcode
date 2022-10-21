import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Notes'
        },
        component: () => import('../views/todo-page.vue')
    },
    {
        path: '/tags/:activeTodoListName',
        meta: {
            title: 'Notes'
        },
        component: () => import('../views/todo-page.vue'),
        props: true
    },
    {
        path: '/sign-in',
        name: 'Login',
        meta: {
            title: 'Sign in'
        },
        component: () => import('../views/login-page.vue')
    },
    {
        path: '/sign-up',
        name: 'Register',
        meta: {
            title: 'Sign up'
        },
        component: () => import('../views/register-page.vue')
    },
    {
        path: '/settings/',
        name: 'Settings',
        meta: {
            title: 'Settings'
        },
        component: () => import ('../views/settings-page.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
            title: 'Not found'
        },
        component: () => import('../views/not-found-page.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    if (!localStorage.getItem('token') && to.name !== 'Login' && to.name !== 'Register')
        next({name: 'Login'})
    else if (localStorage.getItem('token') && (to.name === 'Login' || to.name === 'Register'))
        next({name: 'Home'})
    else
        next()
})

export default router