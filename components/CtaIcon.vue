<script setup lang="ts">
defineProps<{
  icon: string
  isAnchor?: boolean
  to?: string
}>()
</script>

<template>
  <template v-if="isAnchor">
    <NuxtLink class="size-8" :to="to">
      <Icon :name="`carbon:${icon}`" class="size-5" />
    </NuxtLink>
  </template>
  <template v-else>
    <button>
      <Icon :name="`carbon:${icon}`" class="size-5" />
    </button>
  </template>
</template>
