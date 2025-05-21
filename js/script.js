import ZeroMd from 'https://cdn.jsdelivr.net/npm/zero-md@3'

const p = new URLSearchParams(location.search).get("p"), sE = e => document.getElementById(e);
window.onload = () => { sE("mdLoad").src = `pages/${p || "home"}.md`; }

function initZeroMd() {
  customElements.define('zero-md', class extends ZeroMd {
    async load() {
      await super.load()
      this.template = `<style>* {padding: 0; margin: 0;} h1, h2, h3, h4, h5, h6 {padding-bottom: 10px;} h1:not(:first-child), h2:not(:first-child), h3:not(:first-child), h4:not(:first-child), h5:not(:first-child), h6:not(:first-child) {padding-top: 10px;}</style>`
    }
  })
}

initZeroMd()