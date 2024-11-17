<script setup lang="ts">
defineProps<{
  icon: string
  to?: string
}>()
</script>

<template>
  <NuxtLink class="size-8" :to="to">
    <Icon :name="`carbon:${icon}`" class="size-5" />
  </NuxtLink>
</template>
