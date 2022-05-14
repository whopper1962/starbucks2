import Home from "./components/Home";
import Details from './components/Details';
import VueRouter from "vue-router";
import Login from './components/Login';

import Store from './store/index';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'root',
        redirect: { name: 'items' }
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
        name: "item_details"
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
    if (to.matched.some(record => record.meta.isAuthenticated)) {
        console.error(Store.state.auth.isAuth);
        if (!Store.state.auth.isAuth) {
            next({ name: 'Login' });
        } else {
            next();
        }
    }
    next();
});

export default router;