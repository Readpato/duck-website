<template>
  <div class="app flex flex-col bg-background">
    <TheHeader />
    <NuxtPage class="flex-grow" />
    <TheFooter />
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  min-height: 100dvh;
}

p + p {
  margin-top: toRem(16px);
}
</style>
