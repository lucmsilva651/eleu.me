import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faYoutube,
    faFacebook,
    faTiktok,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
    faBook,
    faCube,
    faToolbox,
    faMessage,
    faHeart,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faYoutube,
    faFacebook,
    faTiktok,
    faInstagram,
    faGithub, 
    faBook,
    faCube,
    faToolbox,
    faMessage,
    faHeart
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')