<script setup lang="ts">
const gitHubLink = 'https://github.com/Readpato'
</script>

<template>
  <header class="w-full h-12 p-2 border-b border-b-white">
    <nav class="flex justify-between items-center w-full h-full">
      <RouterLink to="/" class="font-bold text-white">
        Patrick Raedler
      </RouterLink>
      <ul>
        <li>
          <BaseLink :link="gitHubLink" icon="logo-github" />
        </li>
      </ul>
    </nav>
  </header>
</template>
