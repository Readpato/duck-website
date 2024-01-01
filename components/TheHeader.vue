<script setup lang="ts">
const link = 'https://github.com/Readpato'
</script>

<template>
  <header class="w-full h-12 p-2 border-b border-b-white">
    <nav class="flex justify-between items-center w-full h-full">
      <NuxtLink to="/" class="font-bold text-white">
        Patrick Raedler
      </NuxtLink>
      <nav>
        <CtaIcon :href="link" icon="logo-github" />
      </nav>
    </nav>
  </header>
</template>
