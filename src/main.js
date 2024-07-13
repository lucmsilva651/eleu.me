import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './plugins/router.js'
import i18n from './plugins/i18n.js'

import { addIcons, OhVueIcon } from 'oh-vue-icons';
import {
  RiGithubLine,
  RiTwitterLine,
  LaTelegram,
  LaLastfm,
  RiYoutubeLine
} from "oh-vue-icons/icons";

addIcons(
  RiGithubLine,
  RiTwitterLine,
  LaTelegram,
  LaLastfm,
  RiYoutubeLine
);

const app = createApp(App)

app.use(Router)
app.use(i18n)
app.component("v-icon", OhVueIcon)
app.mount('#app');