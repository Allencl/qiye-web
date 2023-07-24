import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import antDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import i18n from '@/lang/index.js'

createApp(App)
.use(store)
.use(router)
.use(antDesignVue)
.use(i18n)
.mount('#app')
