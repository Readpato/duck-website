<template>
  <p>
    <slot />
  </p>
</template>

<style scoped lang="scss">
p + p {
  margin-top: toRem(16px);
}
</style>
