import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faFacebook,
  faDiscord,
  faYoutube,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

library.add(
    faGithub,
    faFacebook,
    faDiscord,
    faYoutube,
    faTiktok,
    faInbox,
    faInstagram
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.mount('#app')
