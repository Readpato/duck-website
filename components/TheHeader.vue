<script setup lang="ts">
const link = 'https://github.com/Readpato'
</script>

<template>
  <header class="h-12 w-full px-4 border-b">
    <nav class="flex justify-between items-center w-full h-full">
      <NuxtLink to="/" class="font-semibold">
        Patrick Raedler
      </NuxtLink>
      <nav class="space-x-2">
        <CtaIcon :to="link" is-anchor as-child icon="logo-github" target="_blank" />
        <CtaColorMode />
      </nav>
    </nav>
  </header>
</template>
