<script setup lang="ts">
const props = withDefaults(defineProps<{
  href: string
  icon?: string
  secondary?: boolean
  smallIcons?: boolean
  target?: string
}>(), {
  smallIcons: false,
  target: '_blank',
})

const iconSize = computed(() => props.smallIcons ? 'w-5 h-5' : 'w-7 h-7')
</script>

<template>
  <NuxtLink :href="href" :target="target" :class="{ secondary }">
    <div v-if="icon" class="block" :class="[iconSize, icon]" />
    <slot />
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
