<script lang="ts" setup>
  const colorMode = useColorMode();
  
 const setTheme = (theme: 'light' | 'dark') => {
  colorMode.value = theme;
  document.documentElement.setAttribute('data-theme', theme);
};
</script>

<template>
  <button @click="setTheme('light')" :aria-current="colorMode.value === 'light'" class="btn-toggle">
    <!-- <Icon class="icon light-icon" name="icons:light-theme" /> -->
    <Icon class="logo-light icon" :name="colorMode.value === 'light' ? 'icons:light-theme' : 'icons:dark-theme'" />
  </button>
  <button @click="setTheme('dark')" :aria-current="colorMode.value === 'dark'" class="btn-toggle">
    
    <Icon class="icon dark-icon" name="icons:dark-theme" />
  </button>
</template>

<style lang="scss" scoped>
[data-theme="light"] .light-icon {
  color: var(--light-icon);
  display: none;
 
}

[data-theme="dark"] .dark-icon {
  color: var(--dark-icon);
  display: none;
}


.icon {
  size: 1.5em;
}
  .btn-toggle {
    border: none;
    background-color: transparent;
    padding: 0 5px;
    cursor: pointer;

  }
</style>
