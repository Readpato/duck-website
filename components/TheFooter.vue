<script setup lang="ts">
const links = [{
  icon: 'logo-github',
  link: 'https://github.com/Readpato',
  name: 'GitHub',
}, {
  icon: 'logo-linkedin',
  link: 'https://www.linkedin.com/in/patrickraedler/',
  name: 'LinkedIn',
}, {
  icon: 'logo-mastodon',
  link: 'https://mas.to/@readpato',
  name: 'Mastodon',
}, {
  icon: 'logo-twitter',
  link: 'https://twitter.com/readpato',
  name: 'Twitter',
}]
</script>

<template>
  <footer class="flex flex-col justify-center items-center py-2 space-y-3 text-sm">
    <div class="line w-15 h-[1px]" />
    <div>&copy; {{ new Date().getFullYear() }} - Patrick Raedler</div>
    <nav>
      <ul class="flex justify-center items-center space-x-2">
        <li v-for="{ icon, link, name } in links" :key="name">
          <CtaIcon :to="link" :icon="icon" variant="outline" is-anchor as-child target="_blank" />
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
.line {
  background-color: $c-border;
}
</style>
