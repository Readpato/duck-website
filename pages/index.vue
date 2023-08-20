<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Patrick Raedler',
  ogDescription: 'I\'m Pato, a self-taught Frontend Developer and this is my website!',
  ogImage: '/readpato-logo.png',
  ogUrl: 'https://www.readpato.dev',
  twitterTitle: 'Patrick Raedler',
  twitterDescription: 'I\'m Pato, a self-taught Frontend Developer and this is my website!',
  twitterImage: '/readpato-logo.png',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="w-full max-w-160 mx-auto px-7 py-10">
    <h1 class="mt-4 mb-6 text-4xl font-extrabold text-white">
      Hello there!
    </h1>
    <article>
      <ContentDoc />
    </article>
  </div>
</template>
