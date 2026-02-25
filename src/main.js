import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';

import './css/index.css';
import './css/fonts.css';
import './css/responsivity.css';

const app = createApp(App);
app.mount('#app');
app.use(router);