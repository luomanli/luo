// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { post, get, patch, put } from './utils/axious.js'
import './assets/style/common.css';
import VueJsonp from 'vue-jsonp'


/*使用VueResource插件*/

Vue.use(VueJsonp)
    //定义全局变量


Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://10.10.10.22:9352'
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})