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
    <img src="https://github.com/lucmsilva651.png" alt="GitHub Profile Picture">
    <div class="below-photo">
      <h1>Welcome!</h1>
      <p>I'm Lucas, a {{ calcAge("2009-07-07") }} y.o. student from Brazil. I have knowledge with web development, hardware, etc.</p>
      <p><i>Website under construction! (like every other one)</i></p>
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

section#home img {
  border-radius: 50%;
  margin-bottom: 5px;
  height: auto;
  width: 200px;
}

section#home h1 {
  font-size: 48px;
  color: #fff;
}

section#home * {
  color: #ababab;
}
</style>