<script lang="ts" setup>
  const colorMode = useColorMode();

</script>

<template>
  <ClientOnly>
    <div class="logo_wrapper">
      <NuxtLink to="/" class="logo">
        <Icon v-if="colorMode.value === 'light'" name="icons:logo-light" mode="css" class="logo-light"/>
        <Icon v-else name="icons:logo-dark" mode="css" class="logo-dark"/>
    </NuxtLink>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
[data-theme="dark"] .logo-dark,
[data-theme="light"] .logo-light {
    display: block;
    width: 1.8em;
    height: 1.8em;

    @media screen and (min-width: 768px) {
        width: 2.5em;
        height: 2em;
    }

    @media screen and (min-width: 1024px) {
        width: 3em;
        height: 1.8em;
    }
}

.logo {
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
