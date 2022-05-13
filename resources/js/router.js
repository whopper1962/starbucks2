import Home from "./components/Home";
import Details from './components/Details';
import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: { name: 'items' }
    },
    {
        path: "/items",
        component: Home,
        name: "items"
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

export default router;