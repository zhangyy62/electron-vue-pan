import Vue from 'vue';
import axios from 'axios';
import App from 'App.vue';
import router from './router';
import store from './store';
import vContextMenu from '@/basic/v-contextMenu/v-contextMenu.vue';
import electron from 'vue-electron';
/* eslint-disable */
if (!process.env.IS_WEB) Vue.use(electron);
Vue.prototype.$http = axios;
Vue.http = Vue.prototype.$http;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    components: { App, vContextMenu },
    router,
    store,
    template: '<App/>'
}).$mount('#app');