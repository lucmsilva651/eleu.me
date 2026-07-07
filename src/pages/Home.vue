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
  <section id="home" class="window">
    <div class="title-bar">
      <div class="title-bar-text">Hi &lt;3</div>
    </div>
    <div class="window-body has-space">
      <img
        src="https://avatars.githubusercontent.com/u/90426410?s=512"
        fetchpriority="high"
        alt="GitHub Profile Picture"
      />
      <div class="below-photo">
        <h1>Welcome!</h1>
        <p>
          I'm Lucas, a {{ calcAge("2009/07/07") }} y.o. student from Brazil. I
          have knowledge with web development, hardware, etc.
        </p>
        <br>
        <p><i>Website under construction! (like every other one)</i></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#home {
  max-width: 500px;
}

#home .window-body {
  padding: 20px 30px;
  flex-direction: row;
  gap: 30px;
}

#home img {
  border-radius: 50%;
  height: auto;
  width: 160px;
}

#home h1 {
  font-size: 2.8em;
  margin-bottom: 20px;
}
</style>
