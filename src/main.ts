import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    // main icons
    FaVuejs,
    CoHtml5Shield,
    CoCss3Shiled,
    SiJavascript,
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
    FaSmile
} from "oh-vue-icons/icons";

addIcons(
    // main icons
    FaVuejs,
    CoHtml5Shield,
    CoCss3Shiled,
    SiJavascript,
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
    FaSmile
)

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(router)
app.mount('#app')