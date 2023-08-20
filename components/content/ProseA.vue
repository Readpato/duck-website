<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  target?: string
}>(), {
  target: '_blank',
})
</script>

<template>
  <NuxtLink :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  border-bottom: 1px solid rgba($c-border, .3);
  color: $c-white;
  opacity: 1;
  text-decoration: none;
  transition: border-bottom 0.2s ease;

  &:hover {
    border-bottom: 1px solid rgba($c-border, 1);
  }
}
</style>
