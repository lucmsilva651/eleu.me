import { createApp } from 'vue';
import App from './App.vue';

import './css/global/index.css';
import './css/global/fonts.css';
import './css/global/responsivity.css';

import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaVuejs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaMarkdown,
  FaJava,
  FaPython,
  FaNode,
  FaScroll,
  FaGithub,
  FaGitlab,
  FaTelegram,
  FaLastfmSquare,
  FaYoutube,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaArrowDown,
} from "oh-vue-icons/icons/fa";

import {
  SiArduino,
  SiElectron,
  SiJson
} from "oh-vue-icons/icons/si";

addIcons(
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaVuejs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaMarkdown,
  FaJava,
  FaPython,
  FaNode,
  FaScroll,
  FaGithub,
  FaGitlab,
  FaTelegram,
  FaLastfmSquare,
  FaYoutube,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaArrowDown,
  SiArduino,
  SiElectron,
  SiJson
)

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app');