// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from "@/store/store.js";
import ElementUI from "element-ui";
import axios from "axios";
import Vuex from "vuex";
import "element-ui/lib/theme-chalk/index.css";
// import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(ElementUI);
Vue.use(Vuex);
// Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/***按需引入iView组件***/
import { Button, Table } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
