<script lang="ts" setup>
  const colorMode = useColorMode();

</script>

<template>
  <ClientOnly>
  <div class="logo_wrapper">
      <NuxtLink to="/" class="logo">
        <Icon class="logo-light icon" :name="colorMode.value === 'light' ? 'icons:light-theme' : 'icons:dark-theme'" />        
    </NuxtLink>
  </div>
</ClientOnly>
</template>

<style scoped lang="scss">
.logo_wrapper {
  padding: 0.5rem 0 0.7rem;

  @media screen and (min-width: 768px) {
        padding: 0.5rem 0 1rem;
  }

  @media screen and (min-width: 1024px) {
        padding: 0.8rem 0 1.5rem;
  }

  @media screen and (min-width: 1440px) {
        padding: 1.2rem 0 2rem;
  }
}

// [data-theme="dark"] .logo-dark,
// [data-theme="light"] .logo-light {
//     display: block;
//     width: 1.8rem;
//     height: 1.8rem;

//     @media screen and (min-width: 768px) {
//         width: 2.5rem;
//         height: 2rem;
//     }

//     @media screen and (min-width: 1024px) {
//         width: 3rem;
//         height: 1.8rem;
//     }
// }

.logo {
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>
