import { createApp } from 'vue'
import App from './App.vue'
import Router from './plugins/router.js'
import i18n from './plugins/i18n.js'
import './style.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {  } from "oh-vue-icons/icons"

addIcons()

const app = createApp(App)

app.use(Router)
app.use(i18n)
app.component("v-icon", OhVueIcon)

app.mount('#app')
