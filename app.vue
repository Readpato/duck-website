<template>
  <div class="app">
    <TheHeader />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  min-height: 100dvh;
  background-color: $c-black;
  color: $c-text;
  font-family: Inter, sans-serif;
}

p + p {
  margin-top: toRem(16px);
}
</style>
