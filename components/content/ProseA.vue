<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  target?: string
}>(), {
  target: '_blank',
})
</script>

<template>
  <SCButton variant="link" as-child class="p-0 h-fit underline decoration-foreground/40 hover:decoration-foreground/100 text-base">
    <NuxtLink :href="href" :target="target">
      <slot />
    </NuxtLink>
  </SCButton>
</template>
