<script setup lang="ts">
const link = 'https://github.com/Readpato'
</script>

<template>
  <header class="h-12 border-b border-b-white w-full px-4">
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
