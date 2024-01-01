<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  icon?: string
  secondary?: boolean
  small?: boolean
  target?: string
}>(), {
  target: '_blank',
})
</script>

<template>
  <NuxtLink :href="href" :target="target" :class="{ secondary }">
    <Icon :name="`carbon:${icon}`" :class="small ? 'w-5 h-5' : 'w-7 h-7'" />
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  color: $c-link;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &.secondary {
    border-bottom: 1px solid rgba($c-border, .3);
    opacity: 1;
    text-decoration: none;
    transition: border-bottom 0.2s ease;

    &:hover {
      border-bottom: 1px solid rgba($c-border, 1);
    }
  }
}
</style>
