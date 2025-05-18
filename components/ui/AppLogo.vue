<script lang="ts" setup>

</script>

<template>
  <ClientOnly>
    <div class="logo_wrapper">
      <NuxtLink to="/" class="logo">
      <img class="logo_image" src="/assets/icons/logo-dark.svg"  alt="logo"/>
          <!-- <div class="logo_text el-visible">
              <p>developers</p>
              <p>learn</p>
          </div> -->
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

    @media (min-width: 1024px) {
      padding: 15px 0;
    }
  }

  .logo {
        display: flex;
        justify-content: center;
        width: 65px;;
        height: 45px;
        cursor: pointer;
        @media (min-width: 768px) {
            align-items: center;
            height: 75px;
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
