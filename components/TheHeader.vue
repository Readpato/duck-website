<script setup lang="ts">
const gitHubLink = 'https://github.com/Readpato'
</script>

<template>
  <header class="w-full h-12 p-2 border-b border-b-white">
    <nav class="flex justify-between items-center w-full h-full">
      <RouterLink to="/" class="font-bold">
        Patrick Raedler
      </RouterLink>
      <ul>
        <li>
          <a :href="gitHubLink" class="i-carbon-logo-github w-7 h-7 block" target="_blank" />
        </li>
      </ul>
    </nav>
  </header>
</template>
