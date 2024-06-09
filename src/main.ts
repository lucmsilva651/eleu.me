import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import i18n from './plugins/i18n'
import VueNextSelect from 'vue-next-select'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
    // main icons
    FaVuejs,
    CoHtml5Shield,
    CoCss3Shiled,
    SiJavascript,
    CoTypescript,
    LaPython,
    HiSolidTerminal,
    FaNode,
    ViFileTypeLightGamemaker2,
    RiFileExcel2Fill,
    FaBlogger,
    SiGit,
    RiNpmjsFill,
    SiAssemblyscript,
    BiFlower1,
    RiFilePaper2Fill,
    // social media
    FaGithub,
    SiYoutube,
    FaLastfmSquare,
    FaSteamSquare,
    FaItchIo,
    CoTiktok,
    CoTwitter,
    CoFacebook,
    CoInstagram,
    SiBuymeacoffee,
    // ui icons
    RiBookMarkFill,
    FaCube,
    FaToolbox,
    RiMessageFill,
    FaHeart,
    FaSmile,
    FaSadCry
} from "oh-vue-icons/icons"

addIcons(
    // main icons
    FaVuejs,
    CoHtml5Shield,
    CoCss3Shiled,
    SiJavascript,
    CoTypescript,
    LaPython,
    HiSolidTerminal,
    FaNode,
    ViFileTypeLightGamemaker2,
    RiFileExcel2Fill,
    FaBlogger,
    SiGit,
    RiNpmjsFill,
    SiAssemblyscript,
    BiFlower1,
    RiFilePaper2Fill,
    // social media
    FaGithub,
    SiYoutube,
    FaLastfmSquare,
    FaSteamSquare,
    FaItchIo,
    CoTiktok,
    CoTwitter,
    CoFacebook,
    CoInstagram,
    SiBuymeacoffee,
    // ui icons
    RiBookMarkFill,
    FaCube,
    FaToolbox,
    RiMessageFill,
    FaHeart,
    FaSmile,
    FaSadCry
)

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.component('vue-select', VueNextSelect)
app.use(router)
app.use(i18n)
app.mount('#app')