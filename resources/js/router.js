import Home from "./components/Home";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;