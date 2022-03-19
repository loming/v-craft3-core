/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import App from './example/App.vue';

// Vue.use(ElementUI);

const app = createApp(App);
app.use(ElementPlus);

app.mount('#app');
