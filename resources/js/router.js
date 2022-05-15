import Home from "./components/Home";
import Details from './components/Details';
import VueRouter from "vue-router";
import Login from './components/Login';

import Store from './store/index';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'root',
        redirect: { name: 'items' },
        meta: {
            isAuthenticated: true,
        }
    },
    {
        path: "/items",
        component: Home,
        name: "items",
        meta: {
            isAuthenticated: true,
        },
    },
    {
        path: "/items/:item_id",
        component: Details,
        name: "item_details",
        meta: {
            isAuthenticated: true,
        }
    },
    {
        path: '*',
        name: 'unknown',
        redirect: { name: 'items' }
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && localStorage.getItem('authorized') === 'true') {
        next({name: 'items'})
    }
    if (to.matched.some(record => record.meta.isAuthenticated)) {
        console.error('AUTHORIZED:', localStorage.getItem('authorized'));
        if (localStorage.getItem('authorized') === 'true') {
            // should check accessToken and authorizedUser
            next();
        } else {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('authorized');
            localStorage.removeItem('authorizedUser');
            next({ name: 'login' });
        }
    } else {
        next();
    }
});

export default router;