<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('blog')
  .where({ date: { $exists: true } })
  .sort({ date: -1 })
  .find())

// TODO: Add proper loading state for fallback template
// TODO: Extend types properly https://content.nuxt.com/usage/typescript#type-augmentation
</script>

<template>
  <div class="rp-container">
    <h1 class="rp-title">
      Blog
    </h1>
    <ClientOnly>
      <ArticleCard
        v-for="{ title, description, date, _path, _id } in data"
        :key="_id"
        :title="title as string"
        :description="description"
        :date="date"
        :path="_path as string"
        mb2
      />
      <template #fallback>
        <span>Loading...</span>
      </template>
    </ClientOnly>
  </div>
</template>
