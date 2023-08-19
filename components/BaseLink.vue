<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
  link: string
}>()
</script>

<template>
  <a :href="link" target="_blank">
    <div v-if="icon" :class="`i-carbon-${icon}`" class="w-7 h-7 block" />
    {{ text }}
  </a>
</template>

<style scoped lang="scss">
a {
  color: $c-link;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
}
</style>
