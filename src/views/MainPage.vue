<script setup>
import { useNavigatorLanguage, useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard({ pixKey })
const { language } = useNavigatorLanguage()

const pixKey = "00020101021126810014br.gov.bcb.pix01368d6a266f-59e5-4084-be71-ee134b21e6de0219PIX DOACAO VIA SITE5204000053039865802BR5918LUCAS G M DA SILVA6007PIQUETE62070503***6304AB6D"
</script>

<template>  
  <p>{{ $t('introduction') }}</p>

  <div class="sns_row">
    <div class="sns_wrapper">
      <p>{{ $t('my-social-media') }}</p>

      <div class="sns_links">
        <a href="https://github.com/lucmsilva651" target="_blank" rel="noopener noreferrer">
          <button title="GitHub">
            <v-icon name="ri-github-line" scale="0.8" label="GitHub" />
          </button>
        </a>

        <a href="https://youtube.com/lucmsilva651" target="_blank" rel="noopener noreferrer">
          <button title="YouTube">
            <v-icon name="ri-youtube-line" scale="0.8" label="Telegram" />
          </button>
        </a>
        
        <a href="https://last.fm/user/lucmsilva" target="_blank" rel="noopener noreferrer">
          <button title="Last.fm">
            <v-icon name="la-lastfm" scale="0.8" label="Last.fm" />
          </button>
        </a>

        <a href="https://t.me/lucaspqt" target="_blank" rel="noopener noreferrer">
          <button title="Telegram">
            <v-icon name="la-telegram" scale="0.8" label="Telegram" />
          </button>
        </a>

        <a href="https://twitter.com/lucmsilvagg" target="_blank" rel="noopener noreferrer">
          <button title="Twitter">
            <v-icon name="ri-twitter-line" scale="0.8" label="Twitter" />
          </button>
        </a>
      </div>
    </div>

    <div class="sns_pix_container" v-if="language == 'pt'">
      <p class="sns_pix_separator">•</p>

      <div class="sns_pix_btn">
        <p>Me faz um pix?</p> 
        <button @click="copy(pixKey)">
          <span v-if="!copied">Copiar chave pix</span>
          <span v-else>Chave copiada!</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sns_row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.sns_pix_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.sns_pix_separator {
  padding: 0 14px 0 14px;
}

.sns_wrapper {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sns_row p {
  font-family: monospace;
  font-size: small;
}

.sns_links {
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
