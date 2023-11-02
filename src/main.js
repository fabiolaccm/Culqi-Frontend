import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from './config/axios';
import InternalMenu from './components/InternalMenu.vue';
import VueToast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/index.css';

const app = createApp(App);
app.use(router);
app.use(VueToast)
app.config.globalProperties.$axios = axios; 
app.component('InternalMenu', InternalMenu);
app.mount('#app');
