<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { defineProps, defineEmits } from 'vue';

const { t } = useI18n();

defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

function closePopup() {
  emit('close');
}

function copyText() {
  const pix = `00020101021126810014br.gov.bcb.pix01368d6a266f-59e5-4084-be71-ee134b21e6de0219PIX DOACAO VIA SITE5204000053039865802BR5918LUCAS G M DA SILVA6007PIQUETE62070503***6304AB6D`;
  navigator.clipboard.writeText(pix)
    .then(() => {
      alert(t('pix-alert'));
    })
    .catch(err => {
      alert(t('pix-err') + err);
    });
}
</script>

<template>
  <div v-if="visible" class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <h1 class="popup-title">{{ t('pix-dialog') }}</h1>
      <p class="popup-desc">{{ t('pix-desc') }}</p>
      <br>
      <img src="https://telegra.ph/file/7250a86d7f1eb36aec74f.jpg" width="275px" alt="QRCode Pix" class="popup-image">
      <div class="popup-buttons">
        <button @click="closePopup">{{ t('close') }}</button>
        <button @click="copyText">{{ t('copy-clipboard') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--overlay-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: var(--color-background);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px var(--box-shadow);
  text-align: center;
  max-width: 500px;
  width: 80%;
}

.popup-title {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 20px;
}

.popup-image {
  max-width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

.popup-buttons {
  display: flex;
  justify-content: space-around;
}

button {
  margin: 10px;
  padding: 10px 20px;
  background-color: var(--button-color);
  color: var(--button-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font: var(--font-family);
}
</style>
