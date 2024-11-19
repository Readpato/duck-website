<script setup lang="ts">
const colorMode = useColorMode()

function handleColorChange() {
  colorMode.preference === 'dark'
    ? colorMode.preference = 'light'
    : colorMode.preference = 'dark'
}
</script>

<template>
  <CtaIcon :icon="colorMode.preference === 'dark' ? 'sun' : 'moon'" @click="handleColorChange" />
</template>
