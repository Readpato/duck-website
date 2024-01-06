<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  path: string
}>()

// TODO: Add transfomer directives and modify css directly for the p elements
</script>

<template>
  <NuxtLink :to="path" block p2 border="~ rounded-lg gray-500" un-text="white">
    <h2 un-text="~ 2xl white" font="bold">
      {{ title }}
    </h2>
    <p un-text="gray-400 md">
      {{ description }}
    </p>
    <p mt1 un-text="gray-400 sm">
      {{ new Date(date).toLocaleString().split(',')[0] }}
    </p>
  </NuxtLink>
</template>
