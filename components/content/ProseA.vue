<script setup lang="ts">
const { target = '_blank' } = defineProps<{
  href: string
  target?: string
}>()
</script>

<template>
  <NuxtLink :href="href" :target="target" class="p-0 h-fit underline decoration-foreground/40 hover:decoration-foreground/100 text-base">
    <slot />
  </NuxtLink>
</template>
