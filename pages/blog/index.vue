<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('blog')
  .where({ date: { $exists: true } })
  .sort({ date: -1 })
  .find())
</script>

<template>
  <div class="rp-container">
    <h1 class="rp-title">
      Blog
    </h1>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
