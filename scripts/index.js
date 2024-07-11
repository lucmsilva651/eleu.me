// defining reusable vars
const nav_lang = navigator.language.split('-')[0]

// i18n related code
function translateContent(translations) {
  document.querySelectorAll('[i18n]').forEach(el => {
    const key = el.getAttribute('i18n');
    el.textContent = translations[key] || el.textContent;
  });
};

// push json content in /locales/*.json to website
function setLanguage(lang) {
  fetch(`../locales/${lang}.json`)
    .then(response => response.json())
    .then(translateContent)
    .catch(err => console.error(`Error loading language file: ${err}`));
};

// this part of the script is donation related
// region check, then copy to clipboard
function regionCheck() {
  // assuming if the browser lang is pt, then is a brazilian (or not)
  if(nav_lang != "pt") {
    document.getElementById("pix").style.visibility = hidden;
  }
};

function copiarPix() {
  const obrigado = "chave pix copiada com sucesso! vai no seu app de banco e me dá um pouco do seu dinheiro, por favor?";
  const chave_pix = "00020101021126810014br.gov.bcb.pix01368d6a266f-59e5-4084-be71-ee134b21e6de0219PIX DOACAO VIA SITE5204000053039865802BR5918LUCAS G M DA SILVA6007PIQUETE62070503***6304AB6D";
  navigator.clipboard.writeText(chave_pix);
  document.getElementById("pix").textContent=obrigado;
}

document.getElementById("pix").addEventListener("click", copiarPix);

// load functions check on page load
document.addEventListener("DOMContentLoaded", function() {
  setLanguage(nav_lang || "en");
  regionCheck();
});