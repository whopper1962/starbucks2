require('./bootstrap');

import Vue from 'vue';
import router from "./router";
import VueRouter from "vue-router";
import Header from './components/Header';

window.Vue = require('vue');

Vue.component('header-component', Header);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router
});