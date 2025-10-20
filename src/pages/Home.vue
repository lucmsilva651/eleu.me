<script setup>
const calcAge = (d) => {
  const x = new Date();
  const y = new Date(d);
  let z = x.getFullYear() - y.getFullYear();
  const monthDiff = x.getMonth() - y.getMonth();
  const dayDiff = x.getDate() - y.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    z--;
  }
  return z;
};
</script>

<template>
  <section id="home">
    <div class="content">
      <img src="https://github.com/lucmsilva651.png" alt="GitHub Profile Picture">
      <div class="below-photo">
        <h1>Welcome!</h1>
        <p>I'm Lucas, a {{ calcAge("2009-07-07") }} y.o. student from Brazil. I have knowledge with web development, hardware, etc.</p>
        <p><i>Website under construction! (like every other one)</i></p>
      </div>
    </div>
    <div class="please-scroll">
      <v-icon name="fa-arrow-down" class="arrow-down" />
      <p>Please scroll to see more content</p>
    </div>
  </section>
</template>

<style scoped>
section#home {
  background-color: #202029;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
}

section#home>.content {
  height: calc(100vh - 190px);
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
  display: flex;
}

section#home>.content>img {
  border-radius: 50%;
  margin-bottom: 5px;
  height: auto;
  width: 200px;
}

section#home>.content>.below-photo>h1 {
  font-size: 48px;
  color: #fff;
}

section#home * {
  color: #ababab;
}

section#home>.please-scroll {
  flex-direction: row;
  align-items: center;
  position: relative;
  display: flex;
  bottom: 0px;
  gap: 10px;
}

section#home .please-scroll p {
  font-weight: bold;
  font-size: 24px;
}

@keyframes arrowFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.arrow-down {
  animation: arrowFloat 1.8s ease-in-out infinite;
  opacity: 0.8;
}
</style>