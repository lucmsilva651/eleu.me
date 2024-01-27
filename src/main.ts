import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { followingDotCursor } from "cursor-effects";
new followingDotCursor();

const app = createApp(App);

app.use(router)
app.mount('#app')
