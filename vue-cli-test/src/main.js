// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { post, get, patch, put } from './utils/axious.js'
import './assets/style/common.css';
import VueJsonp from 'vue-jsonp'
import './assets/js/rem.js'
import { Search } from 'vant';
import { randomPeo } from './utils/randomPeo.js'



import { Step, Steps, DropdownMenu, DropdownItem } from 'vant';
import { Field, cellGroup } from 'vant';
import { Picker } from 'vant';
import { Form } from 'vant';
import { NumberKeyboard } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(NumberKeyboard);
Vue.use(Form);
Vue.use(Picker);
Vue.use(Field);
Vue.use(cellGroup);

Vue.use(Search);
Vue.use(Step);
Vue.use(Steps);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
/*使用VueResource插件*/

Vue.use(VueJsonp)
    //定义全局变量

Vue.prototype.$randomPeo = randomPeo;
console.log('we', Vue.prototype.$randomPeo)
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://m.dian7.net:9351'
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})