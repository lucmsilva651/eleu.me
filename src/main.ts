import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { ViFileTypeLightGamemaker2 , SiMicrosoftexcel } from "oh-vue-icons/icons";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

addIcons(ViFileTypeLightGamemaker2, SiMicrosoftexcel)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('v-icon', OhVueIcon)
app.use(router)
app.mount('#app')