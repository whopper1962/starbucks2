require('./bootstrap');

import Vue from 'vue';
import router from "./router";
import VueRouter from "vue-router";

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router
});