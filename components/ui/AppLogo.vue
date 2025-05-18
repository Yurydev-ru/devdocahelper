<script lang="ts" setup>
  const colorMode = useColorMode();

</script>

<template>
  <ClientOnly>
    <div class="logo_wrapper">
      <NuxtLink to="/" class="logo">
        <Icon name="icons:logo-light"/>
        <Icon name="icons:logo-dark"/>
    </NuxtLink>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
  .logo_wrapper {
    padding: 5px 0;

    @media (min-width: 768px) {
      padding: 10px 0;
    }
  }

  [data-theme="light"] .logo-light {
  display: none;
}

[data-theme="dark"] .logo-dark {
  display: block;
}

  .logo {
        display: flex;
        justify-content: center;
        width: 65px;;
        height: 45px;
        cursor: pointer;
        @media (min-width: 768px) {
            align-items: center;
            height: 55px;
            width: 80px;
        }
        @media (min-width: 1024px) {
            align-items: center;
            height: 60px;
            width: 110px;
            padding: 5px 0;
        }
    }

    .logo_text {
        justify-content: center;
        align-items: center;
        
        
        @media (max-width: 768px) {    
            flex-direction: row;
            font-size: 10px;
            font-weight: 300;
        } 
    }
</style>
