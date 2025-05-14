<script lang="ts" setup>
  const colorMode = useColorMode();
  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
  }


</script>

<template>
  <button @click="toggleTheme" class="btn-toggle" aria-label="Toggle theme">
    {{ colorMode.value === 'light' ? 'dark' : 'light' }}
  </button>
</template>

<style lang="scss" scoped>
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
