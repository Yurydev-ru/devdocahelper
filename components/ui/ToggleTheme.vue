<script lang="ts" setup>
  const colorMode = useColorMode();
  
  const setTheme = (theme: string) => {
    colorMode.value = theme === 'light' ? 'light' : 'dark';
    document.documentElement.style.setProperty('--color-scheme', theme === 'light' ? 'light' : 'dark');
  }


</script>

<template>
  <button @click="setTheme('light')" :aria-current="colorMode.value === 'light'" class="btn-toggle light-btn">
    <Icon name="hugeicons:ai-innovation-03" class="icon"/>
  </button>
  <button @click="setTheme('dark')" :aria-current="colorMode.value === 'dark'" class="btn-toggle dark-btn">
    <Icon name="hugeicons:moon-02" class="icon"/>
  </button>
</template>

<style lang="scss" scoped>
[data-theme="light'"] .light-btn {
  display: none;
}

[data-theme="dark'"] .dark-btn {
  display: none;
}

.icon {
  color: yellow;
  size: 1.5em;
  fill: red;
}
  .btn-toggle {
    border: none;
    background-color: transparent;
    padding: 0 5px;
    cursor: pointer;

    :hover {
      outline: 1px solid black;
    }
  }
</style>
