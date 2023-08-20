<script setup lang="ts">
const links = [{
  icon: 'i-carbon-logo-github',
  link: 'https://github.com/Readpato',
  name: 'GitHub',
},
{
  icon: 'i-carbon-logo-linkedin',
  link: 'https://www.linkedin.com/in/patrickraedler/',
  name: 'LinkedIn',
},
{
  icon: 'i-carbon-logo-mastodon',
  link: 'https://mas.to/@readpato',
  name: 'Mastodon',
},
{
  icon: 'i-carbon-logo-twitter',
  link: 'https://twitter.com/readpato',
  name: 'Twitter',
},

]
</script>

<template>
  <footer class="flex flex-col justify-center items-center space-y-5 text-sm">
    <div class="line w-15 h-[1px]" />
    <div>&copy; {{ new Date().getFullYear() }} - Patrick Raedler</div>
    <nav>
      <ul class="flex justify-center items-center space-x-2">
        <li v-for="{ icon, link, name } in links" :key="name">
          <BaseLink :href="link" :icon="icon" small-icons />
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
