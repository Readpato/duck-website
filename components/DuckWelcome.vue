<script setup lang="ts">
const title = 'Duck nuxt starter'
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full h-100vh text-white bg-black">
    <img class="w-12 h-12" src="~/assets/img/nuxt.png" alt="Nuxt logo" data-test="welcome-logo">
    <h1 class="font-light text-2xl" data-test="welcome-header">
      {{ title }}
    </h1>
    <DuckCounter />
  </main>
</template>
