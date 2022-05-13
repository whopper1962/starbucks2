require('./bootstrap');

import Vue from 'vue';
import router from "./router";
import VueRouter from "vue-router";
import Header from './components/Header';

window.Vue = require('vue');

Vue.component('header-component', Header);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faMugSaucer, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const fonts = [
    faUserSecret,
    faMugSaucer,
    faMugHot
];

library.add(fonts);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router
});