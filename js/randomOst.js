import { $ } from "./utils/handleElem.min.js";

const khinsiderArray = [
  "https://eta.vgmtreasurechest.com/soundtracks/dragon-ball-z-legacy-of-goku-soundtrack/msvwaeek/01-Legacy%20of%20Goku.mp3",
  "https://eta.vgmtreasurechest.com/soundtracks/dragon-ball-z-legacy-of-goku-soundtrack/ygtgyozu/02-Around%20the%20World.mp3"
];

export default () => {
  const container = $("player");
  container.innerHTML = "";

  const audioUrl = khinsiderArray[Math.floor(Math.random() * khinsiderArray.length)];
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = audioUrl;
  container.appendChild(audio);
}