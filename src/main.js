import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';

import '7.css/dist/7.css';
import './css/index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');